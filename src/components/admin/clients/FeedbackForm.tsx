import React from 'react'
import { motion } from 'framer-motion'
import { Client, Feedback } from '@/lib/supabaseService'

interface FeedbackFormData {
  client_id: string
  feedback: string
  rating: number
}

interface FeedbackFormProps {
  formData: FeedbackFormData
  setFormData: (data: FeedbackFormData | ((prev: FeedbackFormData) => FeedbackFormData)) => void
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
  isEditing: boolean
  clients: Client[]
}

export default function FeedbackForm({ 
  formData, 
  setFormData, 
  onSubmit, 
  onCancel, 
  isEditing,
  clients 
}: FeedbackFormProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="mb-6 p-4 border rounded-lg bg-gray-50"
    >
      <h4 className="text-md font-medium mb-4">
        {isEditing ? 'Edit Feedback' : 'Add New Feedback'}
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
          <select
            value={formData.rating}
            onChange={(e) => setFormData(prev => ({ ...prev, rating: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
            required
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} Star{rating !== 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
          <textarea
            value={formData.feedback}
            onChange={(e) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
            required
            placeholder="Client's feedback or testimonial..."
          />
        </div>
        
        <div className="flex space-x-3">
          <button
            type="submit"
            className="bg-vikasa-latte text-white px-4 py-2 rounded-md hover:bg-vikasa-latte/90 transition-colors"
          >
            {isEditing ? 'Update' : 'Add'} Feedback
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
