'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { uploadFile } from '@/lib/fileUpload'
import { lifeAtVikasaService, type LifeAtVikasa } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function LifeAtVikasaManager() {
  const [lifeAtVikasa, setLifeAtVikasa] = useState<LifeAtVikasa[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<LifeAtVikasa | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    description: '',
    image: ''
  })

  const loadLifeAtVikasa = async () => {
    try {
      setIsLoading(true)
      const data = await lifeAtVikasaService.getAll()
      setLifeAtVikasa(data)
    } catch (err) {
      setError('Failed to load life at vikasa content')
      console.error('Load life at vikasa error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadLifeAtVikasa()
  }, [])

  const handleImageUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const result = await uploadFile(file, 'life-at-vikasa')
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
    try {
      if (editingItem) {
        const updated = await lifeAtVikasaService.update(editingItem.id, formData)
        setLifeAtVikasa(lifeAtVikasa.map(item => item.id === updated.id ? updated : item))
      } else {
        const newItem = await lifeAtVikasaService.create(formData)
        setLifeAtVikasa([newItem, ...lifeAtVikasa])
      }
      
      setFormData({ description: '', image: '' })
      setIsFormOpen(false)
      setEditingItem(null)
      setError(null)
    } catch (err) {
      setError('Failed to save life at vikasa content')
      console.error('Save life at vikasa error:', err)
    }
  }

  const handleEdit = (item: LifeAtVikasa) => {
    setEditingItem(item)
    setFormData({
      description: item.description,
      image: item.image || ''
    })
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this life at vikasa content?')) return
    
    try {
      await lifeAtVikasaService.delete(id)
      setLifeAtVikasa(lifeAtVikasa.filter(item => item.id !== id))
    } catch (err) {
      setError('Failed to delete content')
      console.error('Delete life at vikasa error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ description: '', image: '' })
    setEditingItem(null)
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">Life at Vikasa Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Content
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
              {editingItem ? 'Edit Life at Vikasa Content' : 'Add New Content'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Describe life at Vikasa..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image (Optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleImageUpload(file)
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-vikasa-espresso file:text-white hover:file:bg-vikasa-espresso/90"
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
                      width={128} 
                      height={96} 
                      className="object-cover rounded border"
                    />
                  </div>
                )}
                <p className="mt-1 text-xs text-gray-500">Optional image to accompany the content</p>
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingItem ? 'Update' : 'Create'}
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

      {/* Life at Vikasa Content List */}
      <div className="space-y-6">
        {lifeAtVikasa.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No life at vikasa content found. Add your first content to get started.
          </div>
        ) : (
          lifeAtVikasa.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition duration-200">
              {item.image && (
                <Image 
                  src={item.image} 
                  alt="Life at Vikasa"
                  width={800}
                  height={300}
                  className="object-cover w-full"
                />
              )}
              
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    Created: {new Date(item.created_at).toLocaleDateString()}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800 px-3 py-1 rounded"
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
