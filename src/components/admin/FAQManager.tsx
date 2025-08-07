'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { faqService, type FAQ } from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function FAQManager() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    question: '',
    answer: ''
  })

  const loadFAQs = async () => {
    try {
      setIsLoading(true)
      const data = await faqService.getAll()
      setFaqs(data)
    } catch (err) {
      setError('Failed to load FAQs')
      console.error('Load FAQs error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadFAQs()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingFAQ) {
        const updated = await faqService.update(editingFAQ.id, formData)
        setFaqs(faqs.map(f => f.id === updated.id ? updated : f))
      } else {
        const newFAQ = await faqService.create(formData)
        setFaqs([newFAQ, ...faqs])
      }
      
      setFormData({ question: '', answer: '' })
      setIsFormOpen(false)
      setEditingFAQ(null)
      setError(null)
    } catch (err) {
      setError('Failed to save FAQ')
      console.error('Save FAQ error:', err)
    }
  }

  const handleEdit = (faq: FAQ) => {
    setEditingFAQ(faq)
    setFormData({
      question: faq.question,
      answer: faq.answer
    })
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) return
    
    try {
      await faqService.delete(id)
      setFaqs(faqs.filter(f => f.id !== id))
    } catch (err) {
      setError('Failed to delete FAQ')
      console.error('Delete FAQ error:', err)
    }
  }

  const resetForm = () => {
    setFormData({ question: '', answer: '' })
    setEditingFAQ(null)
    setIsFormOpen(false)
  }

  const toggleExpanded = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">FAQ Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add FAQ
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
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {editingFAQ ? 'Edit FAQ' : 'Add New FAQ'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question
                </label>
                <input
                  type="text"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter the question..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Answer
                </label>
                <textarea
                  value={formData.answer}
                  onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter the answer..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingFAQ ? 'Update' : 'Create'}
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

      {/* FAQs List */}
      <div className="space-y-4">
        {faqs.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No FAQs found. Add your first FAQ to get started.
          </div>
        ) : (
          faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg overflow-hidden hover:shadow-md transition duration-200">
              <div 
                className="p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200"
                onClick={() => toggleExpanded(faq.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{faq.question}</h3>
                    <p className="text-xs text-gray-500">
                      Created: {new Date(faq.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleEdit(faq)
                      }}
                      className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDelete(faq.id)
                      }}
                      className="text-red-600 hover:text-red-800 px-2 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                    <span className="text-gray-400 ml-2">
                      {expandedFAQ === faq.id ? '▼' : '▶'}
                    </span>
                  </div>
                </div>
              </div>
              
              {expandedFAQ === faq.id && (
                <div className="p-4 border-t bg-white">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </motion.div>
  )
}
