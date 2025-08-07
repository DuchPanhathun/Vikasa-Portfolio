'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { experienceService, type Experience } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ExperienceManager() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState({
    years: 0,
    detail: ''
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch experiences on component mount
  useEffect(() => {
    fetchExperiences()
  }, [])

  const fetchExperiences = async () => {
    try {
      setLoading(true)
      const data = await experienceService.getAll()
      setExperiences(data)
    } catch (err) {
      setError('Failed to fetch experiences')
      console.error('Error fetching experiences:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    try {
      if (isEditing) {
        const updated = await experienceService.update(isEditing, formData)
        setExperiences(prev => prev.map(exp => 
          exp.id === isEditing ? updated : exp
        ))
        setIsEditing(null)
      } else {
        const newExperience = await experienceService.create(formData)
        setExperiences(prev => [newExperience, ...prev])
        setIsAdding(false)
      }
      
      setFormData({ years: 0, detail: '' })
    } catch (err) {
      setError('Failed to save experience')
      console.error('Error saving experience:', err)
    }
  }

  const handleEdit = (experience: Experience) => {
    setFormData({
      years: experience.years,
      detail: experience.detail
    })
    setIsEditing(experience.id)
    setIsAdding(false)
    setError(null)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this experience entry?')) {
      try {
        await experienceService.delete(id)
        setExperiences(prev => prev.filter(exp => exp.id !== id))
      } catch (err) {
        setError('Failed to delete experience')
        console.error('Error deleting experience:', err)
      }
    }
  }

  const handleCancel = () => {
    setIsEditing(null)
    setIsAdding(false)
    setFormData({ years: 0, detail: '' })
    setError(null)
  }

  if (loading) {
    return (
      <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vikasa-espresso"></div>
          <span className="ml-2 text-gray-600">Loading experiences...</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-vikasa-espresso">Experience Management</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-vikasa-espresso text-white px-4 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors"
        >
          Add Experience
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
            {isEditing ? 'Edit Experience' : 'Add New Experience'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
              <input
                type="number"
                min="0"
                max="50"
                value={formData.years}
                onChange={(e) => setFormData(prev => ({ ...prev, years: parseInt(e.target.value) || 0 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                required
                placeholder="e.g., 5"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience Detail</label>
              <textarea
                value={formData.detail}
                onChange={(e) => setFormData(prev => ({ ...prev, detail: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                required
                placeholder="Describe the experience, achievements, or expertise gained..."
              />
            </div>
            
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-vikasa-latte text-white px-4 py-2 rounded-md hover:bg-vikasa-latte/90 transition-colors"
              >
                {isEditing ? 'Update' : 'Add'} Experience
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

      {/* Experience List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <div key={experience.id} className="border rounded-lg p-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-300"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="transparent"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-vikasa-espresso"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="transparent"
                    strokeDasharray={`${(experience.years / 10) * 100}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-vikasa-espresso">{experience.years}+</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">{experience.detail}</p>
            <p className="text-xs text-gray-400 mb-3">
              Created: {new Date(experience.created_at).toLocaleDateString()}
            </p>
            
            <div className="flex justify-center space-x-2">
              <button
                onClick={() => handleEdit(experience)}
                className="text-vikasa-latte hover:text-vikasa-espresso transition-colors p-1"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                onClick={() => handleDelete(experience.id)}
                className="text-red-500 hover:text-red-700 transition-colors p-1"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {experiences.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p className="mt-2">No experience entries added yet</p>
        </div>
      )}
    </motion.div>
  )
}