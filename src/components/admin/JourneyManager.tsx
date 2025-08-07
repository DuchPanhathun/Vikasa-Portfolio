'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { uploadFile } from '@/lib/fileUpload'
import { journeyService, type Journey } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function JourneyManager() {
  const [journeyData, setJourneyData] = useState<Journey[]>([])
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState({
    year: new Date().getFullYear(),
    title: '',
    detail: '',
    image: ''
  })
  const [isUploading, setIsUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch journey data on component mount
  useEffect(() => {
    fetchJourneyData()
  }, [])

  const fetchJourneyData = async () => {
    try {
      setLoading(true)
      const data = await journeyService.getAll()
      setJourneyData(data)
    } catch (err) {
      setError('Failed to fetch journey data')
      console.error('Error fetching journey data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const result = await uploadFile(file, 'journey')
      if (result.success && result.url) {
        setFormData(prev => ({ ...prev, image: result.url || '' }))
      } else {
        setError('Failed to upload image: ' + result.error)
      }
    } catch (err) {
      setError('Upload failed: ' + (err instanceof Error ? err.message : 'Unknown error'))
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    try {
      if (isEditing) {
        const updated = await journeyService.update(isEditing, formData)
        setJourneyData(prev => prev.map(item => 
          item.id === isEditing ? updated : item
        ).sort((a, b) => a.year - b.year))
        setIsEditing(null)
      } else {
        const newJourneyItem = await journeyService.create(formData)
        setJourneyData(prev => [...prev, newJourneyItem].sort((a, b) => a.year - b.year))
        setIsAdding(false)
      }
      
      setFormData({ year: new Date().getFullYear(), title: '', detail: '', image: '' })
    } catch (err) {
      setError('Failed to save journey milestone')
      console.error('Error saving journey milestone:', err)
    }
  }

  const handleEdit = (item: Journey) => {
    setFormData({
      year: item.year,
      title: item.title,
      detail: item.detail,
      image: item.image || ''
    })
    setIsEditing(item.id)
    setIsAdding(false)
    setError(null)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this journey milestone?')) {
      try {
        await journeyService.delete(id)
        setJourneyData(prev => prev.filter(item => item.id !== id))
      } catch (err) {
        setError('Failed to delete journey milestone')
        console.error('Error deleting journey milestone:', err)
      }
    }
  }

  const handleCancel = () => {
    setIsEditing(null)
    setIsAdding(false)
    setFormData({ year: new Date().getFullYear(), title: '', detail: '', image: '' })
    setError(null)
  }

  if (loading) {
    return (
      <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vikasa-espresso"></div>
          <span className="ml-2 text-gray-600">Loading journey data...</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-vikasa-espresso">Our Journey Management</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-vikasa-espresso text-white px-4 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors"
        >
          Add Journey Milestone
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Add/Edit Form */}
      {(isAdding || isEditing) && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-6 p-4 border rounded-lg bg-gray-50"
        >
          <h3 className="text-lg font-medium mb-4">
            {isEditing ? 'Edit Journey Milestone' : 'Add New Journey Milestone'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <input
                type="number"
                min="2000"
                max="2030"
                value={formData.year}
                onChange={(e) => setFormData(prev => ({ ...prev, year: parseInt(e.target.value) || new Date().getFullYear() }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                required
                placeholder="e.g., 2020"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Milestone Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                required
                placeholder="e.g., Company Founded"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Detail Description</label>
              <textarea
                value={formData.detail}
                onChange={(e) => setFormData(prev => ({ ...prev, detail: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                required
                placeholder="Describe this milestone in detail..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Milestone Image (Optional)</label>
              <div className="mt-1 flex items-center space-x-4">
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
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-vikasa-espresso"></div>
                )}
              </div>
              {formData.image && (
                <div className="mt-2">
                  <Image src={formData.image} alt="Preview" width={128} height={96} className="object-cover rounded border" />
                </div>
              )}
              <p className="mt-1 text-xs text-gray-500">Optional image to represent this milestone</p>
            </div>
            
            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={isUploading}
                className="bg-vikasa-latte text-white px-4 py-2 rounded-md hover:bg-vikasa-latte/90 transition-colors disabled:opacity-50"
              >
                {isEditing ? 'Update' : 'Add'} Milestone
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Journey Timeline */}
      <div className="space-y-6">
        {journeyData.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Timeline line */}
            {index < journeyData.length - 1 && (
              <div className="absolute left-8 top-16 w-0.5 h-full bg-vikasa-latte/30 -z-10"></div>
            )}
            
            <div className="flex items-start space-x-4">
              {/* Year badge */}
              <div className="flex-shrink-0 w-16 h-16 bg-vikasa-espresso text-white rounded-full flex items-center justify-center font-bold text-sm">
                {item.year}
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-3">{item.detail}</p>
                    
                    {item.image && (
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        width={192}
                        height={128}
                        className="object-cover rounded border mb-2"
                      />
                    )}

                    <p className="text-xs text-gray-400">
                      Created: {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-vikasa-latte hover:text-vikasa-espresso transition-colors p-1"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-1"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {journeyData.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-2">No journey milestones added yet</p>
        </div>
      )}
    </motion.div>
  )
}
