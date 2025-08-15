import React from 'react'
import RichTextEditor from '@/components/ui/RichTextEditor'

interface ApproachFormModalProps {
  isOpen: boolean
  isEditing: boolean
  formData: { title: string; description: string }
  onFormDataChange: (data: { title: string; description: string }) => void
  onSubmit: (e: React.FormEvent) => void
  onClose: () => void
}

export default function ApproachFormModal({
  isOpen,
  isEditing,
  formData,
  onFormDataChange,
  onSubmit,
  onClose
}: ApproachFormModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
          {isEditing ? 'Edit Service Approach' : 'Add New Service Approach'}
        </h3>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => onFormDataChange({ ...formData, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
              placeholder="Enter approach title..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <RichTextEditor
              content={formData.description}
              onChange={(content) => onFormDataChange({ ...formData, description: content })}
              placeholder="Enter approach description with formatting..."
              className="min-h-[200px]"
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
            >
              {isEditing ? 'Update' : 'Create'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
