import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ClientFormData {
  name: string
  profile_image: string
  company: string
  position: string
}

interface ClientFormProps {
  formData: ClientFormData
  setFormData: (data: ClientFormData | ((prev: ClientFormData) => ClientFormData)) => void
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
  isEditing: boolean
  isUploading: boolean
  onImageUpload: (file: File) => void
}

export default function ClientForm({ 
  formData, 
  setFormData, 
  onSubmit, 
  onCancel, 
  isEditing, 
  isUploading,
  onImageUpload 
}: ClientFormProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="mb-6 p-4 border rounded-lg bg-gray-50"
    >
      <h4 className="text-md font-medium mb-4">
        {isEditing ? 'Edit Client' : 'Add New Client'}
      </h4>
      
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
            required
            placeholder="e.g., John Smith"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
            placeholder="e.g., Tech Corp"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
            placeholder="e.g., CEO"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) onImageUpload(file)
            }}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-vikasa-espresso file:text-white hover:file:bg-vikasa-espresso/90"
          />
          {formData.profile_image && (
            <Image src={formData.profile_image} alt="Preview" width={64} height={64} className="mt-2 object-cover rounded-full" />
          )}
        </div>
        
        <div className="md:col-span-2 flex space-x-3">
          <button
            type="submit"
            disabled={isUploading}
            className="bg-vikasa-latte text-white px-4 py-2 rounded-md hover:bg-vikasa-latte/90 transition-colors disabled:opacity-50"
          >
            {isEditing ? 'Update' : 'Add'} Client
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  )
}
