'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { uploadFile } from '@/lib/fileUpload'
import { 
  clientService, 
  feedbackService, 
  successStoryService, 
  type Client, 
  type Feedback, 
  type SuccessStory 
} from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ClientManager() {
  const [activeTab, setActiveTab] = useState<'clients' | 'feedbacks' | 'stories'>('clients')
  
  // Clients State
  const [clients, setClients] = useState<Client[]>([])
  const [isEditingClient, setIsEditingClient] = useState<string | null>(null)
  const [isAddingClient, setIsAddingClient] = useState(false)
  const [clientFormData, setClientFormData] = useState({
    name: '',
    profile_image: '',
    company: '',
    position: ''
  })

  // Feedbacks State
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [isEditingFeedback, setIsEditingFeedback] = useState<string | null>(null)
  const [isAddingFeedback, setIsAddingFeedback] = useState(false)
  const [feedbackFormData, setFeedbackFormData] = useState({
    client_id: '',
    feedback: '',
    rating: 5
  })

  // Success Stories State
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([])
  const [isEditingStory, setIsEditingStory] = useState<string | null>(null)
  const [isAddingStory, setIsAddingStory] = useState(false)
  const [storyFormData, setStoryFormData] = useState({
    client_id: '',
    title: '',
    description: '',
    image: ''
  })

  // Common State
  const [isUploading, setIsUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch all data on component mount
  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = async () => {
    try {
      setLoading(true)
      const [clientsData, feedbacksData, storiesData] = await Promise.all([
        clientService.getAll(),
        feedbackService.getAll(),
        successStoryService.getAll()
      ])
      setClients(clientsData)
      setFeedbacks(feedbacksData)
      setSuccessStories(storiesData)
    } catch (err) {
      setError('Failed to fetch data')
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  // Image Upload Handler
  const handleImageUpload = async (file: File, type: 'client' | 'story') => {
    setIsUploading(true)
    try {
      const folder = type === 'client' ? 'clients' : 'success-stories'
      const result = await uploadFile(file, folder)
      if (result.success && result.url) {
        if (type === 'client') {
          setClientFormData(prev => ({ ...prev, profile_image: result.url! }))
        } else {
          setStoryFormData(prev => ({ ...prev, image: result.url! }))
        }
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

  // Client CRUD Operations
  const handleClientSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    try {
      if (isEditingClient) {
        const updated = await clientService.update(isEditingClient, clientFormData)
        setClients(prev => prev.map(client => 
          client.id === isEditingClient ? updated : client
        ))
        setIsEditingClient(null)
      } else {
        const newClient = await clientService.create(clientFormData)
        setClients(prev => [newClient, ...prev])
        setIsAddingClient(false)
      }
      
      setClientFormData({ name: '', profile_image: '', company: '', position: '' })
    } catch (err) {
      setError('Failed to save client')
      console.error('Error saving client:', err)
    }
  }

  const handleClientEdit = (client: Client) => {
    setClientFormData({
      name: client.name,
      profile_image: client.profile_image || '',
      company: client.company || '',
      position: client.position || ''
    })
    setIsEditingClient(client.id)
    setIsAddingClient(false)
    setError(null)
  }

  const handleClientDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this client? This will also delete all associated feedbacks and success stories.')) {
      try {
        await clientService.delete(id)
        setClients(prev => prev.filter(client => client.id !== id))
        // Remove associated feedbacks and stories
        setFeedbacks(prev => prev.filter(feedback => feedback.client_id !== id))
        setSuccessStories(prev => prev.filter(story => story.client_id !== id))
      } catch (err) {
        setError('Failed to delete client')
        console.error('Error deleting client:', err)
      }
    }
  }

  // Feedback CRUD Operations
  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    try {
      if (isEditingFeedback) {
        const updated = await feedbackService.update(isEditingFeedback, feedbackFormData)
        setFeedbacks(prev => prev.map(feedback => 
          feedback.id === isEditingFeedback ? updated : feedback
        ))
        setIsEditingFeedback(null)
      } else {
        const newFeedback = await feedbackService.create(feedbackFormData)
        setFeedbacks(prev => [newFeedback, ...prev])
        setIsAddingFeedback(false)
      }
      
      setFeedbackFormData({ client_id: '', feedback: '', rating: 5 })
    } catch (err) {
      setError('Failed to save feedback')
      console.error('Error saving feedback:', err)
    }
  }

  const handleFeedbackEdit = (feedback: Feedback) => {
    setFeedbackFormData({
      client_id: feedback.client_id,
      feedback: feedback.feedback,
      rating: feedback.rating
    })
    setIsEditingFeedback(feedback.id)
    setIsAddingFeedback(false)
    setError(null)
  }

  const handleFeedbackDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this feedback?')) {
      try {
        await feedbackService.delete(id)
        setFeedbacks(prev => prev.filter(feedback => feedback.id !== id))
      } catch (err) {
        setError('Failed to delete feedback')
        console.error('Error deleting feedback:', err)
      }
    }
  }

  // Success Story CRUD Operations
  const handleStorySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    try {
      if (isEditingStory) {
        const updated = await successStoryService.update(isEditingStory, storyFormData)
        setSuccessStories(prev => prev.map(story => 
          story.id === isEditingStory ? updated : story
        ))
        setIsEditingStory(null)
      } else {
        const newStory = await successStoryService.create(storyFormData)
        setSuccessStories(prev => [newStory, ...prev])
        setIsAddingStory(false)
      }
      
      setStoryFormData({ client_id: '', title: '', description: '', image: '' })
    } catch (err) {
      setError('Failed to save success story')
      console.error('Error saving success story:', err)
    }
  }

  const handleStoryEdit = (story: SuccessStory) => {
    setStoryFormData({
      client_id: story.client_id,
      title: story.title,
      description: story.description,
      image: story.image || ''
    })
    setIsEditingStory(story.id)
    setIsAddingStory(false)
    setError(null)
  }

  const handleStoryDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this success story?')) {
      try {
        await successStoryService.delete(id)
        setSuccessStories(prev => prev.filter(story => story.id !== id))
      } catch (err) {
        setError('Failed to delete success story')
        console.error('Error deleting success story:', err)
      }
    }
  }

  // Cancel handlers
  const handleCancel = () => {
    setIsEditingClient(null)
    setIsAddingClient(false)
    setIsEditingFeedback(null)
    setIsAddingFeedback(false)
    setIsEditingStory(null)
    setIsAddingStory(false)
    setClientFormData({ name: '', profile_image: '', company: '', position: '' })
    setFeedbackFormData({ client_id: '', feedback: '', rating: 5 })
    setStoryFormData({ client_id: '', title: '', description: '', image: '' })
    setError(null)
  }

  if (loading) {
    return (
      <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vikasa-espresso"></div>
          <span className="ml-2 text-gray-600">Loading client data...</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-vikasa-espresso">Client Management</h2>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('clients')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'clients'
                ? 'border-vikasa-espresso text-vikasa-espresso'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Clients ({clients.length})
          </button>
          <button
            onClick={() => setActiveTab('feedbacks')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'feedbacks'
                ? 'border-vikasa-espresso text-vikasa-espresso'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Feedbacks ({feedbacks.length})
          </button>
          <button
            onClick={() => setActiveTab('stories')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'stories'
                ? 'border-vikasa-espresso text-vikasa-espresso'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Success Stories ({successStories.length})
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'clients' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Clients</h3>
            <button
              onClick={() => setIsAddingClient(true)}
              className="bg-vikasa-espresso text-white px-4 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors"
            >
              Add Client
            </button>
          </div>

          {/* Client Form */}
          {(isAddingClient || isEditingClient) && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6 p-4 border rounded-lg bg-gray-50"
            >
              <h4 className="text-md font-medium mb-4">
                {isEditingClient ? 'Edit Client' : 'Add New Client'}
              </h4>
              
              <form onSubmit={handleClientSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                  <input
                    type="text"
                    value={clientFormData.name}
                    onChange={(e) => setClientFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                    required
                    placeholder="e.g., John Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    value={clientFormData.company}
                    onChange={(e) => setClientFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                    placeholder="e.g., Tech Corp"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                  <input
                    type="text"
                    value={clientFormData.position}
                    onChange={(e) => setClientFormData(prev => ({ ...prev, position: e.target.value }))}
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
                      if (file) handleImageUpload(file, 'client')
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-vikasa-espresso file:text-white hover:file:bg-vikasa-espresso/90"
                  />
                  {clientFormData.profile_image && (
                    <Image src={clientFormData.profile_image} alt="Preview" width={64} height={64} className="mt-2 object-cover rounded-full" />
                  )}
                </div>
                
                <div className="md:col-span-2 flex space-x-3">
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="bg-vikasa-latte text-white px-4 py-2 rounded-md hover:bg-vikasa-latte/90 transition-colors disabled:opacity-50"
                  >
                    {isEditingClient ? 'Update' : 'Add'} Client
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Clients List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client) => (
              <div key={client.id} className="border rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  {client.profile_image ? (
                    <Image 
                      src={client.profile_image} 
                      alt={client.name}
                      width={48}
                      height={48}
                      className="object-cover rounded-full"
                    />
                  ) : (
                    <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">
                        {client.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{client.name}</h4>
                    {client.position && client.company && (
                      <p className="text-sm text-gray-600">{client.position} at {client.company}</p>
                    )}
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 mb-3">
                  Created: {new Date(client.created_at).toLocaleDateString()}
                </p>
                
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => handleClientEdit(client)}
                    className="text-vikasa-latte hover:text-vikasa-espresso transition-colors p-1"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleClientDelete(client.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {clients.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No clients added yet</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'feedbacks' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Client Feedbacks</h3>
            <button
              onClick={() => setIsAddingFeedback(true)}
              disabled={clients.length === 0}
              className="bg-vikasa-espresso text-white px-4 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors disabled:opacity-50"
            >
              Add Feedback
            </button>
          </div>

          {clients.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>Please add clients first before creating feedbacks</p>
            </div>
          )}

          {/* Feedback Form */}
          {(isAddingFeedback || isEditingFeedback) && clients.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6 p-4 border rounded-lg bg-gray-50"
            >
              <h4 className="text-md font-medium mb-4">
                {isEditingFeedback ? 'Edit Feedback' : 'Add New Feedback'}
              </h4>
              
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                  <select
                    value={feedbackFormData.client_id}
                    onChange={(e) => setFeedbackFormData(prev => ({ ...prev, client_id: e.target.value }))}
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
                    value={feedbackFormData.rating}
                    onChange={(e) => setFeedbackFormData(prev => ({ ...prev, rating: parseInt(e.target.value) }))}
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
                    value={feedbackFormData.feedback}
                    onChange={(e) => setFeedbackFormData(prev => ({ ...prev, feedback: e.target.value }))}
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
                    {isEditingFeedback ? 'Update' : 'Add'} Feedback
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Feedbacks List */}
          <div className="space-y-4">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-gray-900">
                        {feedback.client?.name || 'Unknown Client'}
                      </h4>
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{feedback.feedback}</p>
                    <p className="text-xs text-gray-400">
                      Created: {new Date(feedback.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleFeedbackEdit(feedback)}
                      className="text-vikasa-latte hover:text-vikasa-espresso transition-colors p-1"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleFeedbackDelete(feedback.id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-1"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {feedbacks.length === 0 && clients.length > 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No feedbacks added yet</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'stories' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Success Stories</h3>
            <button
              onClick={() => setIsAddingStory(true)}
              disabled={clients.length === 0}
              className="bg-vikasa-espresso text-white px-4 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors disabled:opacity-50"
            >
              Add Success Story
            </button>
          </div>

          {clients.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>Please add clients first before creating success stories</p>
            </div>
          )}

          {/* Success Story Form */}
          {(isAddingStory || isEditingStory) && clients.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6 p-4 border rounded-lg bg-gray-50"
            >
              <h4 className="text-md font-medium mb-4">
                {isEditingStory ? 'Edit Success Story' : 'Add New Success Story'}
              </h4>
              
              <form onSubmit={handleStorySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                  <select
                    value={storyFormData.client_id}
                    onChange={(e) => setStoryFormData(prev => ({ ...prev, client_id: e.target.value }))}
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
                    value={storyFormData.title}
                    onChange={(e) => setStoryFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                    required
                    placeholder="e.g., Digital Transformation Success"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Story Description</label>
                  <textarea
                    value={storyFormData.description}
                    onChange={(e) => setStoryFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                    required
                    placeholder="Detailed description of the success story..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Story Image (Optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleImageUpload(file, 'story')
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-vikasa-espresso file:text-white hover:file:bg-vikasa-espresso/90"
                  />
                  {storyFormData.image && (
                    <Image src={storyFormData.image} alt="Preview" width={128} height={96} className="mt-2 object-cover rounded border" />
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="bg-vikasa-latte text-white px-4 py-2 rounded-md hover:bg-vikasa-latte/90 transition-colors disabled:opacity-50"
                  >
                    {isEditingStory ? 'Update' : 'Add'} Success Story
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Success Stories List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((story) => (
              <div key={story.id} className="border rounded-lg overflow-hidden">
                {story.image && (
                  <Image 
                    src={story.image} 
                    alt={story.title}
                    width={400}
                    height={192}
                    className="object-cover w-full"
                  />
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{story.title}</h4>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => handleStoryEdit(story)}
                        className="text-vikasa-latte hover:text-vikasa-espresso transition-colors p-1"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleStoryDelete(story.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Client: {story.client?.name || 'Unknown Client'}
                  </p>
                  <p className="text-gray-600 mb-2">{story.description}</p>
                  <p className="text-xs text-gray-400">
                    Created: {new Date(story.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {successStories.length === 0 && clients.length > 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No success stories added yet</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}
