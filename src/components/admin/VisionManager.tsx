'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { visionService, type Vision } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function VisionManager() {
  const [visions, setVisions] = useState<Vision[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingVision, setEditingVision] = useState<Vision | null>(null)
  const [formData, setFormData] = useState({
    detail: ''
  })

  const loadVisions = async () => {
    try {
      setIsLoading(true)
      const data = await visionService.getAll()
      setVisions(data)
    } catch (err) {
      setError('Failed to load visions')
      console.error('Load visions error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadVisions()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingVision) {
        const updated = await visionService.update(editingVision.id, formData)
        setVisions(visions.map(v => v.id === updated.id ? updated : v))
      } else {
        const newVision = await visionService.create(formData)
        setVisions([newVision, ...visions])
      }
      
      setFormData({ detail: '' })
      setIsFormOpen(false)
      setEditingVision(null)
      setError(null)
    } catch (err) {
      setError('Failed to save vision')
      console.error('Save vision error:', err)
    }
  }

  const handleEdit = (vision: Vision) => {
    setEditingVision(vision)
    setFormData({
      detail: vision.detail
    })
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this vision?')) return
    
    try {
      await visionService.delete(id)
      setVisions(visions.filter(v => v.id !== id))
    } catch (err) {
      setError('Failed to delete vision')
      console.error('Delete vision error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ detail: '' })
    setEditingVision(null)
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">Vision Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Vision
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
              {editingVision ? 'Edit Vision' : 'Add New Vision'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vision Detail
                </label>
                <textarea
                  value={formData.detail}
                  onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter vision details..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingVision ? 'Update' : 'Create'}
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

      {/* Visions List */}
      <div className="space-y-4">
        {visions.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No visions found. Add your first vision to get started.
          </div>
        ) : (
          visions.map((vision) => (
            <div key={vision.id} className="border rounded-lg p-4 hover:shadow-md transition duration-200">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">{vision.detail}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Created: {new Date(vision.created_at).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(vision)}
                    className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(vision.id)}
                    className="text-red-600 hover:text-red-800 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  )
}
