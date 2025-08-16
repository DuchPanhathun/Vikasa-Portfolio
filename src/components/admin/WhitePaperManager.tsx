'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  whitePaperService,
  type WhitePaper 
} from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function WhitePaperManager() {
  const [whitePapers, setWhitePapers] = useState<WhitePaper[]>([])
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Form state
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingPaper, setEditingPaper] = useState<WhitePaper | null>(null)
  const [formData, setFormData] = useState({ 
    title: '', 
    description: '',
    date_published: '',
    pages_count: 0,
    cover_photo: '',
    pdf_download_url: ''
  })

  // File upload state
  const [coverUploadType, setCoverUploadType] = useState<'url' | 'file'>('url')
  const [pdfUploadType, setPdfUploadType] = useState<'url' | 'file'>('url')
  const [selectedCoverFile, setSelectedCoverFile] = useState<File | null>(null)
  const [selectedPdfFile, setSelectedPdfFile] = useState<File | null>(null)
  const [coverPreview, setCoverPreview] = useState<string>('')
  const [pdfPreview, setPdfPreview] = useState<string>('')

  const loadWhitePapers = async () => {
    try {
      setIsLoading(true)
      const data = await whitePaperService.getAll()
      setWhitePapers(data)
    } catch (err) {
      setError('Failed to load white papers')
      console.error('Load white papers error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadWhitePapers()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const paperData = {
        ...formData,
        date_published: formData.date_published || new Date().toISOString().split('T')[0],
        pages_count: Number(formData.pages_count) || 0
      }

      if (editingPaper) {
        const updated = await whitePaperService.update(editingPaper.id, paperData)
        setWhitePapers(whitePapers.map(p => p.id === updated.id ? updated : p))
      } else {
        const newPaper = await whitePaperService.create(paperData)
        setWhitePapers([newPaper, ...whitePapers])
      }
      
      // Reset form after successful submission
      setFormData({ 
        title: '', 
        description: '',
        date_published: '',
        pages_count: 0,
        cover_photo: '',
        pdf_download_url: ''
      })
      // Reset upload state
      setCoverUploadType('url')
      setPdfUploadType('url')
      setSelectedCoverFile(null)
      setSelectedPdfFile(null)
      setCoverPreview('')
      setPdfPreview('')
      setIsFormOpen(false)
      setEditingPaper(null)
      setError(null)
    } catch (err) {
      setError('Failed to save white paper')
      console.error('Save white paper error:', err)
    }
  }

  const handleEdit = (paper: WhitePaper) => {
    setEditingPaper(paper)
    setFormData({ 
      title: paper.title,
      description: paper.description,
      date_published: paper.date_published || '',
      pages_count: paper.pages_count,
      cover_photo: paper.cover_photo || '',
      pdf_download_url: paper.pdf_download_url || ''
    })
    // Reset upload state
    setCoverUploadType('url')
    setPdfUploadType('url')
    setSelectedCoverFile(null)
    setSelectedPdfFile(null)
    setCoverPreview(paper.cover_photo || '')
    setPdfPreview(paper.pdf_download_url || '')
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this white paper?')) return
    
    try {
      await whitePaperService.delete(id)
      setWhitePapers(whitePapers.filter(p => p.id !== id))
    } catch (err) {
      setError('Failed to delete white paper')
      console.error('Delete white paper error:', err)
    }
  }

  // File upload handlers
  const handleCoverFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedCoverFile(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setCoverPreview(result)
        setFormData({ ...formData, cover_photo: result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCoverUrlChange = (url: string) => {
    setFormData({ ...formData, cover_photo: url || '' })
    setCoverPreview(url || '')
    setSelectedCoverFile(null)
  }

  const handlePdfFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedPdfFile(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setPdfPreview(file.name)
        setFormData({ ...formData, pdf_download_url: result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePdfUrlChange = (url: string) => {
    setFormData({ ...formData, pdf_download_url: url || '' })
    setPdfPreview(url || '')
    setSelectedPdfFile(null)
  }

  const clearCover = () => {
    setSelectedCoverFile(null)
    setCoverPreview('')
    setFormData({ ...formData, cover_photo: '' })
  }

  const clearPdf = () => {
    setSelectedPdfFile(null)
    setPdfPreview('')
    setFormData({ ...formData, pdf_download_url: '' })
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">White Paper Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add White Paper
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* White Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whitePapers.map((paper) => (
          <div key={paper.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Cover Photo */}
            {paper.cover_photo ? (
              <img 
                src={paper.cover_photo} 
                alt={paper.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">No Cover</span>
                </div>
              </div>
            )}
            
            {/* Content */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{paper.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{paper.description}</p>
              </div>
              
              {/* Metadata */}
              <div className="flex justify-between items-center text-xs text-gray-500">
                <div className="space-y-1">
                  {paper.date_published && (
                    <div>Published: {new Date(paper.date_published).toLocaleDateString()}</div>
                  )}
                  <div>{paper.pages_count} pages</div>
                </div>
                
                {paper.pdf_download_url && (
                  <a 
                    href={paper.pdf_download_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors flex items-center space-x-1"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download</span>
                  </a>
                )}
              </div>
              
              {/* Actions */}
              <div className="flex space-x-2 pt-3 border-t">
                <button
                  onClick={() => handleEdit(paper)}
                  className="flex-1 text-blue-600 hover:text-blue-800 px-3 py-2 rounded text-sm border border-blue-300 hover:border-blue-400 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(paper.id)}
                  className="flex-1 text-red-600 hover:text-red-800 px-3 py-2 rounded text-sm border border-red-300 hover:border-red-400 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {whitePapers.length === 0 && (
          <div className="col-span-full text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No white papers found</h3>
            <p className="text-gray-500">Get started by adding your first white paper.</p>
          </div>
        )}
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl m-4">
            <h3 className="text-lg font-semibold mb-4">
              {editingPaper ? 'Edit White Paper' : 'Add New White Paper'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter white paper title..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter white paper description..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Published Date
                  </label>
                  <input
                    type="date"
                    value={formData.date_published}
                    onChange={(e) => setFormData({ ...formData, date_published: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Count
                  </label>
                  <input
                    type="number"
                    value={formData.pages_count}
                    onChange={(e) => setFormData({ ...formData, pages_count: parseInt(e.target.value) || 0 })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                    placeholder="Number of pages..."
                    min="0"
                  />
                </div>
              </div>

              {/* Cover Photo */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Cover Photo
                  </label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => setCoverUploadType('url')}
                      className={`px-3 py-1 text-xs rounded-full transition duration-200 ${
                        coverUploadType === 'url'
                          ? 'bg-vikasa-espresso text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      URL
                    </button>
                    <button
                      type="button"
                      onClick={() => setCoverUploadType('file')}
                      className={`px-3 py-1 text-xs rounded-full transition duration-200 ${
                        coverUploadType === 'file'
                          ? 'bg-vikasa-espresso text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                {coverUploadType === 'url' ? (
                  <input
                    type="url"
                    value={formData.cover_photo || ''}
                    onChange={(e) => handleCoverUrlChange(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                    placeholder="https://example.com/cover-image.jpg"
                  />
                ) : (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverFileChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                    key={`cover-input-${editingPaper?.id || 'new'}`}
                  />
                )}

                {/* Cover Preview */}
                {coverPreview && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Preview:</span>
                      <button
                        type="button"
                        onClick={clearCover}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <img 
                      src={coverPreview} 
                      alt="Cover Preview"
                      className="w-full h-32 object-cover rounded border"
                    />
                  </div>
                )}
              </div>

              {/* PDF Download */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    PDF Download
                  </label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => setPdfUploadType('url')}
                      className={`px-3 py-1 text-xs rounded-full transition duration-200 ${
                        pdfUploadType === 'url'
                          ? 'bg-vikasa-espresso text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      URL
                    </button>
                    <button
                      type="button"
                      onClick={() => setPdfUploadType('file')}
                      className={`px-3 py-1 text-xs rounded-full transition duration-200 ${
                        pdfUploadType === 'file'
                          ? 'bg-vikasa-espresso text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                {pdfUploadType === 'url' ? (
                  <input
                    type="url"
                    value={formData.pdf_download_url || ''}
                    onChange={(e) => handlePdfUrlChange(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                    placeholder="https://example.com/whitepaper.pdf"
                  />
                ) : (
                  <input
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={handlePdfFileChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                    key={`pdf-input-${editingPaper?.id || 'new'}`}
                  />
                )}

                {/* PDF Preview */}
                {pdfPreview && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Selected:</span>
                      <button
                        type="button"
                        onClick={clearPdf}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded border">
                      <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-700 truncate">
                        {selectedPdfFile ? selectedPdfFile.name : 'PDF file'}
                      </span>
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-500 mt-1">
                  URL or file where users can download the PDF version of this white paper
                </p>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingPaper ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ 
                      title: '', 
                      description: '',
                      date_published: '',
                      pages_count: 0,
                      cover_photo: '',
                      pdf_download_url: ''
                    })
                    // Reset upload state
                    setCoverUploadType('url')
                    setPdfUploadType('url')
                    setSelectedCoverFile(null)
                    setSelectedPdfFile(null)
                    setCoverPreview('')
                    setPdfPreview('')
                    setIsFormOpen(false)
                    setEditingPaper(null)
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  )
}
