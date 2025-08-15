'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { coreValueService, type CoreValue } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function CoreValueManager() {
  const [coreValues, setCoreValues] = useState<CoreValue[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingValue, setEditingValue] = useState<CoreValue | null>(null)
  const [formData, setFormData] = useState({
    icon: '',
    title: '',
    detail: ''
  })

  // Predefined icons for selection
  const availableIcons = [
    { id: 'integrity', symbol: '🛡️', name: 'Shield (Integrity)' },
    { id: 'excellence', symbol: '⭐', name: 'Star (Excellence)' },
    { id: 'innovation', symbol: '💡', name: 'Lightbulb (Innovation)' },
    { id: 'partnership', symbol: '🤝', name: 'Handshake (Partnership)' },
    { id: 'impact', symbol: '⚡', name: 'Lightning (Impact)' },
    { id: 'growth', symbol: '📈', name: 'Chart (Growth)' },
    { id: 'team', symbol: '👥', name: 'People (Team)' },
    { id: 'quality', symbol: '✨', name: 'Sparkles (Quality)' },
    { id: 'trust', symbol: '🔒', name: 'Lock (Trust)' },
    { id: 'vision', symbol: '👁️', name: 'Eye (Vision)' },
    { id: 'success', symbol: '🎯', name: 'Target (Success)' },
    { id: 'leadership', symbol: '👑', name: 'Crown (Leadership)' },
    { id: 'knowledge', symbol: '📚', name: 'Books (Knowledge)' },
    { id: 'creativity', symbol: '🎨', name: 'Palette (Creativity)' },
    { id: 'communication', symbol: '💬', name: 'Speech (Communication)' },
    { id: 'efficiency', symbol: '⚙️', name: 'Gear (Efficiency)' }
  ]

  const loadCoreValues = async () => {
    try {
      setIsLoading(true)
      const data = await coreValueService.getAll()
      setCoreValues(data)
    } catch (err) {
      setError('Failed to load core values')
      console.error('Load core values error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadCoreValues()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingValue) {
        const updated = await coreValueService.update(editingValue.id, formData)
        setCoreValues(coreValues.map(v => v.id === updated.id ? updated : v))
      } else {
        const newValue = await coreValueService.create(formData)
        setCoreValues([newValue, ...coreValues])
      }
      
      setFormData({ icon: '', title: '', detail: '' })
      setIsFormOpen(false)
      setEditingValue(null)
      setError(null)
    } catch (err) {
      setError('Failed to save core value')
      console.error('Save core value error:', err)
    }
  }

  const handleEdit = (value: CoreValue) => {
    setEditingValue(value)
    setFormData({
      icon: value.icon,
      title: value.title,
      detail: value.detail
    })
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this core value?')) return
    
    try {
      await coreValueService.delete(id)
      setCoreValues(coreValues.filter(v => v.id !== id))
    } catch (err) {
      setError('Failed to delete core value')
      console.error('Delete core value error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ icon: '', title: '', detail: '' })
    setEditingValue(null)
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">Core Values Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Core Value
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
              {editingValue ? 'Edit Core Value' : 'Add New Core Value'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Icon
                </label>
                <div className="grid grid-cols-4 gap-2 p-3 border border-gray-300 rounded-lg max-h-48 overflow-y-auto">
                  {availableIcons.map((icon) => (
                    <button
                      key={icon.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, icon: icon.symbol })}
                      className={`p-3 rounded-lg border-2 transition-all hover:bg-gray-50 ${
                        formData.icon === icon.symbol
                          ? 'border-vikasa-espresso bg-vikasa-espresso/10'
                          : 'border-gray-200'
                      }`}
                      title={icon.name}
                    >
                      <div className="text-2xl">{icon.symbol}</div>
                    </button>
                  ))}
                </div>
                {formData.icon && (
                  <div className="mt-2 text-sm text-gray-600">
                    Selected: <span className="text-lg">{formData.icon}</span>
                  </div>
                )}
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
                  placeholder="Enter title..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detail
                </label>
                <textarea
                  value={formData.detail}
                  onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter detail description..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingValue ? 'Update' : 'Create'}
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

      {/* Core Values List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coreValues.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            No core values found. Add your first core value to get started.
          </div>
        ) : (
          coreValues.map((value) => (
            <div key={value.id} className="border rounded-lg p-4 hover:shadow-md transition duration-200">
              <div className="flex items-start space-x-3 mb-3">
                {value.icon.startsWith('http') ? (
                  <Image 
                    src={value.icon} 
                    alt={value.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 flex items-center justify-center text-2xl">
                    {value.icon}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.detail}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t">
                <p className="text-xs text-gray-500">
                  Created: {new Date(value.created_at).toLocaleDateString()}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(value)}
                    className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(value.id)}
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
