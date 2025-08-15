'use client'

import React, { useState, useEffect } from 'react'
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
import {
  ClientList,
  ClientForm,
  ClientTabs,
  FeedbackList,
  FeedbackForm,
  SuccessStoryList,
  SuccessStoryForm
} from './clients'

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
      <ClientTabs 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        clientsCount={clients.length}
        feedbacksCount={feedbacks.length}
        storiesCount={successStories.length}
      />

      {/* Tab Content */}
      {activeTab === 'clients' && (
        <div>
          {/* Client Form */}
          {(isAddingClient || isEditingClient) && (
            <ClientForm
              formData={clientFormData}
              setFormData={setClientFormData}
              onSubmit={handleClientSubmit}
              onCancel={handleCancel}
              isEditing={!!isEditingClient}
              isUploading={isUploading}
              onImageUpload={(file) => handleImageUpload(file, 'client')}
            />
          )}

          {/* Clients List */}
          <ClientList
            clients={clients}
            onEdit={handleClientEdit}
            onDelete={handleClientDelete}
            onAdd={() => setIsAddingClient(true)}
          />
        </div>
      )}

      {activeTab === 'feedbacks' && (
        <div>
          {/* Feedback Form */}
          {(isAddingFeedback || isEditingFeedback) && clients.length > 0 && (
            <FeedbackForm
              formData={feedbackFormData}
              setFormData={setFeedbackFormData}
              onSubmit={handleFeedbackSubmit}
              onCancel={handleCancel}
              isEditing={!!isEditingFeedback}
              clients={clients}
            />
          )}

          {/* Feedbacks List */}
          <FeedbackList
            feedbacks={feedbacks}
            onEdit={handleFeedbackEdit}
            onDelete={handleFeedbackDelete}
            onAdd={() => setIsAddingFeedback(true)}
            clientsExist={clients.length > 0}
          />
        </div>
      )}

      {activeTab === 'stories' && (
        <div>
          {/* Success Story Form */}
          {(isAddingStory || isEditingStory) && clients.length > 0 && (
            <SuccessStoryForm
              formData={storyFormData}
              setFormData={setStoryFormData}
              onSubmit={handleStorySubmit}
              onCancel={handleCancel}
              isEditing={!!isEditingStory}
              isUploading={isUploading}
              onImageUpload={(file) => handleImageUpload(file, 'story')}
              clients={clients}
            />
          )}

          {/* Success Stories List */}
          <SuccessStoryList
            stories={successStories}
            onEdit={handleStoryEdit}
            onDelete={handleStoryDelete}
            onAdd={() => setIsAddingStory(true)}
            clientsExist={clients.length > 0}
          />
        </div>
      )}
    </motion.div>
  )
}
