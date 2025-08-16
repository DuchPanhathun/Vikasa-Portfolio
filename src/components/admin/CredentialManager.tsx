'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { credentialService, type Credential } from '@/lib/supabaseService'
import RichTextEditor from '@/components/ui/RichTextEditor'
import RichTextViewer from '@/components/ui/RichTextViewer'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const bulletIcons = [
  { value: '✓', label: 'Checkmark' },
  { value: '★', label: 'Star' },
  { value: '●', label: 'Bullet' },
  { value: '▶', label: 'Arrow' },
  { value: '◆', label: 'Diamond' },
  { value: '■', label: 'Square' },
  { value: '🏆', label: 'Trophy' },
  { value: '🎯', label: 'Target' },
  { value: '💎', label: 'Gem' },
  { value: '⚡', label: 'Lightning' }
]

export default function CredentialManager() {
  const [credentials, setCredentials] = useState<Credential[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingCredential, setEditingCredential] = useState<Credential | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    details: '',
    bullet_icon: '✓'
  })

  const loadCredentials = async () => {
    try {
      setIsLoading(true)
      const data = await credentialService.getAll()
      setCredentials(data)
    } catch (err) {
      setError('Failed to load credentials')
      console.error('Load credentials error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadCredentials()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingCredential) {
        const updated = await credentialService.update(editingCredential.id, formData)
        setCredentials(credentials.map(c => c.id === updated.id ? updated : c))
      } else {
        const newCredential = await credentialService.create(formData)
        setCredentials([newCredential, ...credentials])
      }
      
      setFormData({ title: '', details: '', bullet_icon: '✓' })
      setIsFormOpen(false)
      setEditingCredential(null)
      setError(null)
    } catch (err) {
      setError('Failed to save credential')
      console.error('Save credential error:', err)
    }
  }

  const handleEdit = (credential: Credential) => {
    setEditingCredential(credential)
    setFormData({
      title: credential.title,
      details: credential.details,
      bullet_icon: credential.bullet_icon
    })
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this credential?')) return
    
    try {
      await credentialService.delete(id)
      setCredentials(credentials.filter(c => c.id !== id))
    } catch (err) {
      setError('Failed to delete credential')
      console.error('Delete credential error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ title: '', details: '', bullet_icon: '✓' })
    setEditingCredential(null)
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">Credentials Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Credential
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
              {editingCredential ? 'Edit Credential' : 'Add New Credential'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter credential title..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Details
                </label>
                <RichTextEditor
                  content={formData.details}
                  onChange={(content) => setFormData({ ...formData, details: content })}
                  placeholder="Enter credential details with formatting..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bullet Point Icon
                </label>
                <select
                  value={formData.bullet_icon}
                  onChange={(e) => setFormData({ ...formData, bullet_icon: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                >
                  {bulletIcons.map((icon) => (
                    <option key={icon.value} value={icon.value}>
                      {icon.value} {icon.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingCredential ? 'Update' : 'Create'}
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

      {/* Credentials List */}
      <div className="space-y-4">
        {credentials.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No credentials found. Add your first credential to get started.
          </div>
        ) : (
          credentials.map((credential) => (
            <div key={credential.id} className="border rounded-lg p-4 hover:shadow-md transition duration-200">
              <div className="flex items-start space-x-3">
                <span className="text-vikasa-espresso text-xl mt-1">{credential.bullet_icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{credential.title}</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <RichTextViewer content={credential.details} className="prose-sm" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Created: {new Date(credential.created_at).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(credential)}
                    className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(credential.id)}
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
