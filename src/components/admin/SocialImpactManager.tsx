'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { uploadFile } from '@/lib/fileUpload'
import { socialImpactService, type SocialImpactInitiative } from '@/lib/supabaseService'
import RichTextEditor from '@/components/ui/RichTextEditor'
import RichTextViewer from '@/components/ui/RichTextViewer'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function SocialImpactManager() {
  const [initiatives, setInitiatives] = useState<SocialImpactInitiative[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingInitiative, setEditingInitiative] = useState<SocialImpactInitiative | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    description: '',
    image: ''
  })

  const loadInitiatives = async () => {
    try {
      setIsLoading(true)
      const data = await socialImpactService.getAll()
      setInitiatives(data)
    } catch (err) {
      setError('Failed to load social impact initiatives')
      console.error('Load initiatives error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadInitiatives()
  }, [])

  const handleImageUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const result = await uploadFile(file, 'social-impact')
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
      if (editingInitiative) {
        const updated = await socialImpactService.update(editingInitiative.id, formData)
        setInitiatives(initiatives.map(i => i.id === updated.id ? updated : i))
      } else {
        const newInitiative = await socialImpactService.create(formData)
        setInitiatives([newInitiative, ...initiatives])
      }
      
      setFormData({ description: '', image: '' })
      setIsFormOpen(false)
      setEditingInitiative(null)
      setError(null)
    } catch (err) {
      setError('Failed to save social impact initiative')
      console.error('Save initiative error:', err)
    }
  }

  const handleEdit = (initiative: SocialImpactInitiative) => {
    setEditingInitiative(initiative)
    setFormData({
      description: initiative.description,
      image: initiative.image || ''
    })
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this social impact initiative?')) return
    
    try {
      await socialImpactService.delete(id)
      setInitiatives(initiatives.filter(i => i.id !== id))
    } catch (err) {
      setError('Failed to delete initiative')
      console.error('Delete initiative error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ description: '', image: '' })
    setEditingInitiative(null)
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">Social Impact Initiatives</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Initiative
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
              {editingInitiative ? 'Edit Initiative' : 'Add New Initiative'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <RichTextEditor
                  content={formData.description}
                  onChange={(content) => setFormData({ ...formData, description: content })}
                  placeholder="Describe the social impact initiative with formatting..."
                  className="w-full"
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
                    <Image src={formData.image} alt="Preview" width={128} height={96} className="object-cover rounded border" />
                  </div>
                )}
                <p className="mt-1 text-xs text-gray-500">Optional image to represent this initiative</p>
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingInitiative ? 'Update' : 'Create'}
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

      {/* Initiatives List */}
      <div className="space-y-6">
        {initiatives.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No social impact initiatives found. Add your first initiative to get started.
          </div>
        ) : (
          initiatives.map((initiative) => (
            <div key={initiative.id} className="border rounded-lg overflow-hidden hover:shadow-md transition duration-200">
              {initiative.image && (
                <Image 
                  src={initiative.image} 
                  alt="Social Impact Initiative"
                  width={800}
                  height={300}
                  className="object-cover w-full"
                />
              )}
              
              <div className="p-6">
                <RichTextViewer 
                  content={initiative.description} 
                  className="text-gray-700 leading-relaxed mb-4"
                />
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    Created: {new Date(initiative.created_at).toLocaleDateString()}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(initiative)}
                      className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(initiative.id)}
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
