'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { uploadFile } from '@/lib/fileUpload'
import { cultureService, type Culture } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function CultureManager() {
  const [cultures, setCultures] = useState<Culture[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingCulture, setEditingCulture] = useState<Culture | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    image: ''
  })

  const loadCultures = async () => {
    try {
      setIsLoading(true)
      const data = await cultureService.getAll()
      setCultures(data)
    } catch (err) {
      setError('Failed to load culture images')
      console.error('Load cultures error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadCultures()
  }, [])

  const handleImageUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const result = await uploadFile(file, 'culture')
      if (result.success && result.url) {
        setFormData(prev => ({ ...prev, image: result.url! }))
      } else {
        setError('Failed to upload image: ' + result.error)
      }
    } catch (err) {
      setError('Upload failed')
      console.error('Upload error:', err)
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.image) {
      setError('Please select an image')
      return
    }
    
    try {
      if (editingCulture) {
        const updated = await cultureService.update(editingCulture.id, formData)
        setCultures(cultures.map(c => c.id === updated.id ? updated : c))
      } else {
        const newCulture = await cultureService.create(formData)
        setCultures([newCulture, ...cultures])
      }
      
      setFormData({ image: '' })
      setIsFormOpen(false)
      setEditingCulture(null)
      setError(null)
    } catch (err) {
      setError('Failed to save culture image')
      console.error('Save culture error:', err)
    }
  }

  const handleEdit = (culture: Culture) => {
    setEditingCulture(culture)
    setFormData({
      image: culture.image
    })
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this culture image?')) return
    
    try {
      await cultureService.delete(id)
      setCultures(cultures.filter(c => c.id !== id))
    } catch (err) {
      setError('Failed to delete culture image')
      console.error('Delete culture error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ image: '' })
    setEditingCulture(null)
    setIsFormOpen(false)
  }

  if (isLoading) {
    return (
      <motion.div 
        className="p-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vikasa-espresso"></div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="p-6 space-y-6"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-vikasa-espresso">Culture Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Culture Image
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {editingCulture ? 'Edit Culture Image' : 'Add New Culture Image'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Culture Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleImageUpload(file)
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-vikasa-espresso file:text-white hover:file:bg-vikasa-espresso/90"
                  required={!editingCulture}
                />
                {isUploading && (
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-vikasa-espresso"></div>
                    <span className="text-sm text-gray-600">Uploading...</span>
                  </div>
                )}
                {formData.image && (
                  <div className="mt-2">
                    <Image 
                      src={formData.image} 
                      alt="Preview" 
                      width={200} 
                      height={150} 
                      className="object-cover rounded border"
                    />
                  </div>
                )}
                <p className="mt-1 text-xs text-gray-500">Upload an image that represents your company culture</p>
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  disabled={!formData.image}
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {editingCulture ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Culture Images List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cultures.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            No culture images found. Add your first culture image to get started.
          </div>
        ) : (
          cultures.map((culture) => (
            <div key={culture.id} className="border rounded-lg overflow-hidden hover:shadow-md transition duration-200">
              <Image 
                src={culture.image} 
                alt="Company Culture"
                width={400}
                height={300}
                className="object-cover w-full"
              />
              
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">
                    Added: {new Date(culture.created_at).toLocaleDateString()}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(culture)}
                      className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(culture.id)}
                      className="text-red-600 hover:text-red-800 px-2 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  )
}
