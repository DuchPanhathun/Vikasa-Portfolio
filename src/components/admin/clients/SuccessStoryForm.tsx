import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Client } from '@/lib/supabaseService'
import RichTextEditor from '@/components/ui/RichTextEditor'

interface StoryFormData {
  client_id: string
  title: string
  description: string
  image: string
}

interface SuccessStoryFormProps {
  formData: StoryFormData
  setFormData: (data: StoryFormData | ((prev: StoryFormData) => StoryFormData)) => void
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
  isEditing: boolean
  isUploading: boolean
  onImageUpload: (file: File) => void
  clients: Client[]
}

export default function SuccessStoryForm({ 
  formData, 
  setFormData, 
  onSubmit, 
  onCancel, 
  isEditing, 
  isUploading,
  onImageUpload,
  clients 
}: SuccessStoryFormProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="mb-6 p-4 border rounded-lg bg-gray-50"
    >
      <h4 className="text-md font-medium mb-4">
        {isEditing ? 'Edit Success Story' : 'Add New Success Story'}
      </h4>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
          <select
            value={formData.client_id}
            onChange={(e) => setFormData(prev => ({ ...prev, client_id: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
            required
          >
            <option value="">Select a client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name} {client.company && `(${client.company})`}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Story Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
            required
            placeholder="e.g., Digital Transformation Success"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Story Description</label>
          <RichTextEditor
            content={formData.description}
            onChange={(content) => setFormData(prev => ({ ...prev, description: content }))}
            placeholder="Detailed description of the success story with formatting..."
            className="w-full"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Story Image (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) onImageUpload(file)
            }}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-vikasa-espresso file:text-white hover:file:bg-vikasa-espresso/90"
          />
          {formData.image && (
            <Image src={formData.image} alt="Preview" width={128} height={96} className="mt-2 object-cover rounded border" />
          )}
        </div>
        
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={isUploading}
            className="bg-vikasa-latte text-white px-4 py-2 rounded-md hover:bg-vikasa-latte/90 transition-colors disabled:opacity-50"
          >
            {isEditing ? 'Update' : 'Add'} Success Story
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
