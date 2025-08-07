'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { uploadFile } from '@/lib/fileUpload'
import { awardService, type Award } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function AwardManager() {
  const [awards, setAwards] = useState<Award[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [error, setError] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    profile: ''
  })

  useEffect(() => {
    fetchAwards()
  }, [])

  const fetchAwards = async () => {
    try {
      const data = await awardService.getAll()
      setAwards(data)
    } catch (err) {
      setError('Error fetching awards: ' + (err instanceof Error ? err.message : 'Unknown error'))
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setIsSubmitting(true)
      const result = await uploadFile(file, 'awards')
      if (result.success && result.url) {
        setFormData(prev => ({ ...prev, profile: result.url || '' }))
      } else {
        setError(result.error || 'Failed to upload image')
      }
    } catch (error) {
      setError('Error uploading image: ' + (error instanceof Error ? error.message : 'Unknown error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setError('Name is required')
      return
    }

    try {
      setIsSubmitting(true)
      setError('')

      if (editingId) {
        await awardService.update(editingId, formData)
      } else {
        await awardService.create(formData)
      }

      await fetchAwards()
      resetForm()
    } catch (err) {
      setError('Error saving award: ' + (err instanceof Error ? err.message : 'Unknown error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (award: Award) => {
    setFormData({
      name: award.name,
      profile: award.profile || ''
    })
    setEditingId(award.id)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this award?')) return

    try {
      await awardService.delete(id)
      await fetchAwards()
    } catch (err) {
      setError('Error deleting award: ' + (err instanceof Error ? err.message : 'Unknown error'))
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      profile: ''
    })
    setEditingId(null)
    setError('')
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="space-y-6"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {editingId ? 'Edit Award' : 'Add New Award'}
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Award Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter award name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Certificate Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formData.profile && (
              <div className="mt-2">
                <Image
                  src={formData.profile}
                  alt="Certificate Preview"
                  width={128}
                  height={80}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Saving...' : editingId ? 'Update Award' : 'Add Award'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {awards.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <div key={award.id} className="bg-white rounded-lg shadow-md p-6">
              {award.profile && (
                <Image
                  src={award.profile}
                  alt={award.name}
                  width={400}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {award.name}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(award)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(award.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <p className="mt-2">No awards added yet</p>
        </div>
      )}
    </motion.div>
  )
}