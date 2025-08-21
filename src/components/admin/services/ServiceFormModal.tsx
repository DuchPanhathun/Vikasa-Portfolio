import React from 'react'

interface ServiceFormModalProps {
  isOpen: boolean
  isEditing: boolean
  formData: { title: string; summary: string; image: string }
  onFormDataChange: (data: { title: string; summary: string; image: string }) => void
  onSubmit: (e: React.FormEvent) => void
  onClose: () => void
  // Image upload props
  imageUploadType: 'url' | 'file'
  onImageUploadTypeChange: (type: 'url' | 'file') => void
  onImageFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onImageUrlChange: (url: string) => void
  onClearImage: () => void
  imagePreview: string
  selectedImageFile: File | null
}

export default function ServiceFormModal({
  isOpen,
  isEditing,
  formData,
  onFormDataChange,
  onSubmit,
  onClose,
  imageUploadType,
  onImageUploadTypeChange,
  onImageFileChange,
  onImageUrlChange,
  onClearImage,
  imagePreview,
  selectedImageFile
}: ServiceFormModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
          {isEditing ? 'Edit Service' : 'Add New Service'}
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
              placeholder="Enter service title..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Summary
            </label>
            <textarea
              value={formData.summary}
              onChange={(e) => onFormDataChange({ ...formData, summary: e.target.value })}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
              placeholder="Enter service summary..."
              required
            />
          </div>

          {/* Service Image */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Service Image
              </label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => onImageUploadTypeChange('url')}
                  className={`px-3 py-1 text-xs rounded-full transition duration-200 ${
                    imageUploadType === 'url'
                      ? 'bg-vikasa-espresso text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  URL
                </button>
                <button
                  type="button"
                  onClick={() => onImageUploadTypeChange('file')}
                  className={`px-3 py-1 text-xs rounded-full transition duration-200 ${
                    imageUploadType === 'file'
                      ? 'bg-vikasa-espresso text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Upload
                </button>
              </div>
            </div>

            {imageUploadType === 'url' ? (
              <input
                type="url"
                value={formData.image || ''}
                onChange={(e) => onImageUrlChange(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                placeholder="https://example.com/service-image.jpg"
              />
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={onImageFileChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                key={`service-image-${isEditing ? 'edit' : 'new'}`}
              />
            )}

            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Preview:</span>
                  <button
                    type="button"
                    onClick={onClearImage}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <img 
                  src={imagePreview} 
                  alt="Service Preview"
                  className="w-full h-32 object-cover rounded border"
                />
              </div>
            )}
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
