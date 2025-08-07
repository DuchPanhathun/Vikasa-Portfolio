'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { impactService, type Impact } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ImpactManager() {
  const [impacts, setImpacts] = useState<Impact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingImpact, setEditingImpact] = useState<Impact | null>(null)
  const [formData, setFormData] = useState({
    amount_value: '',
    title: '',
    description: ''
  })

  const loadImpacts = async () => {
    try {
      setIsLoading(true)
      const data = await impactService.getAll()
      setImpacts(data)
    } catch (err) {
      setError('Failed to load impacts')
      console.error('Load impacts error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadImpacts()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingImpact) {
        const updated = await impactService.update(editingImpact.id, formData)
        setImpacts(impacts.map(i => i.id === updated.id ? updated : i))
      } else {
        const newImpact = await impactService.create(formData)
        setImpacts([newImpact, ...impacts])
      }
      
      setFormData({ amount_value: '', title: '', description: '' })
      setIsFormOpen(false)
      setEditingImpact(null)
      setError(null)
    } catch (err) {
      setError('Failed to save impact')
      console.error('Save impact error:', err)
    }
  }

  const handleEdit = (impact: Impact) => {
    setEditingImpact(impact)
    setFormData({
      amount_value: impact.amount_value,
      title: impact.title,
      description: impact.description
    })
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this impact metric?')) return
    
    try {
      await impactService.delete(id)
      setImpacts(impacts.filter(i => i.id !== id))
    } catch (err) {
      setError('Failed to delete impact')
      console.error('Delete impact error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ amount_value: '', title: '', description: '' })
    setEditingImpact(null)
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">Impact Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Impact Metric
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
              {editingImpact ? 'Edit Impact Metric' : 'Add New Impact Metric'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount/Value
                </label>
                <input
                  type="text"
                  value={formData.amount_value}
                  onChange={(e) => setFormData({ ...formData, amount_value: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="e.g., 100+, 50K, $2M..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter impact title..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter impact description..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingImpact ? 'Update' : 'Create'}
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

      {/* Impact Metrics List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {impacts.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            No impact metrics found. Add your first impact metric to get started.
          </div>
        ) : (
          impacts.map((impact) => (
            <div key={impact.id} className="border rounded-lg p-6 text-center hover:shadow-md transition duration-200">
              <div className="mb-4">
                <div className="text-4xl font-bold text-vikasa-espresso mb-2">
                  {impact.amount_value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{impact.title}</h3>
                <p className="text-gray-600 text-sm">{impact.description}</p>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <p className="text-xs text-gray-500">
                  {new Date(impact.created_at).toLocaleDateString()}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(impact)}
                    className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(impact.id)}
                    className="text-red-600 hover:text-red-800 px-2 py-1 rounded text-sm"
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
