'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { uploadFile } from '@/lib/fileUpload'
import { staffService, type Staff } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function StaffManager() {
  const [staff, setStaff] = useState<Staff[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    role: '',
    description: '',
    profile_url: ''
  })

  const loadStaff = async () => {
    try {
      setIsLoading(true)
      const data = await staffService.getAll()
      setStaff(data)
    } catch (err) {
      setError('Failed to load staff')
      console.error('Load staff error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadStaff()
  }, [])

  const handleImageUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const result = await uploadFile(file, 'staff')
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
      if (editingStaff) {
        const updated = await staffService.update(editingStaff.id, formData)
        setStaff(staff.map(s => s.id === updated.id ? updated : s))
      } else {
        const newStaff = await staffService.create(formData)
        setStaff([newStaff, ...staff])
      }
      
      setFormData({ image: '', name: '', role: '', description: '', profile_url: '' })
      setIsFormOpen(false)
      setEditingStaff(null)
      setError(null)
    } catch (err) {
      setError('Failed to save staff member')
      console.error('Save staff error:', err)
    }
  }

  const handleEdit = (staffMember: Staff) => {
    setEditingStaff(staffMember)
    setFormData({
      image: staffMember.image || '',
      name: staffMember.name,
      role: staffMember.role,
      description: staffMember.description,
      profile_url: staffMember.profile_url || ''
    })
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this staff member?')) return
    
    try {
      await staffService.delete(id)
      setStaff(staff.filter(s => s.id !== id))
    } catch (err) {
      setError('Failed to delete staff member')
      console.error('Delete staff error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ image: '', name: '', role: '', description: '', profile_url: '' })
    setEditingStaff(null)
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">Staff Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Staff Member
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
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {editingStaff ? 'Edit Staff Member' : 'Add New Staff Member'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Image
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
                    <Image src={formData.image} alt="Preview" width={64} height={64} className="object-cover rounded-full" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter staff name..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter role/position..."
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
                  placeholder="Enter description..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.profile_url}
                  onChange={(e) => setFormData({ ...formData, profile_url: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter profile URL..."
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingStaff ? 'Update' : 'Create'}
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

      {/* Staff List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            No staff members found. Add your first staff member to get started.
          </div>
        ) : (
          staff.map((staffMember) => (
            <div key={staffMember.id} className="border rounded-lg overflow-hidden hover:shadow-md transition duration-200">
              {staffMember.image && (
                <Image 
                  src={staffMember.image} 
                  alt={staffMember.name}
                  width={300}
                  height={200}
                  className="object-cover w-full"
                />
              )}
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{staffMember.name}</h3>
                <p className="text-vikasa-espresso font-medium text-sm mb-2">{staffMember.role}</p>
                <p className="text-gray-600 text-sm mb-3">{staffMember.description}</p>
                
                {staffMember.profile_url && (
                  <a 
                    href={staffMember.profile_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Profile →
                  </a>
                )}
                
                <div className="flex justify-between items-center pt-3 border-t mt-3">
                  <p className="text-xs text-gray-500">
                    {new Date(staffMember.created_at).toLocaleDateString()}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(staffMember)}
                      className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(staffMember.id)}
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
