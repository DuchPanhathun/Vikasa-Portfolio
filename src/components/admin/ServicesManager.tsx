'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  serviceService, 
  serviceDetailService, 
  serviceApproachService,
  type Service, 
  type ServiceDetail, 
  type ServiceApproach 
} from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ServicesManager() {
  const [services, setServices] = useState<Service[]>([])
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [activeTab, setActiveTab] = useState<'service' | 'details' | 'approaches'>('service')
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Service form state
  const [isServiceFormOpen, setIsServiceFormOpen] = useState(false)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [serviceFormData, setServiceFormData] = useState({ title: '', summary: '' })
  
  // Detail form state
  const [isDetailFormOpen, setIsDetailFormOpen] = useState(false)
  const [editingDetail, setEditingDetail] = useState<ServiceDetail | null>(null)
  const [detailFormData, setDetailFormData] = useState({ title: '', description: '' })
  
  // Approach form state
  const [isApproachFormOpen, setIsApproachFormOpen] = useState(false)
  const [editingApproach, setEditingApproach] = useState<ServiceApproach | null>(null)
  const [approachFormData, setApproachFormData] = useState({ title: '', description: '' })

  const loadServices = async () => {
    try {
      setIsLoading(true)
      const data = await serviceService.getAll()
      setServices(data)
      if (data.length > 0 && !selectedService) {
        setSelectedService(data[0])
      }
    } catch (err) {
      setError('Failed to load services')
      console.error('Load services error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadServices()
  }, [])

  // Service handlers
  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingService) {
        const updated = await serviceService.update(editingService.id, serviceFormData)
        setServices(services.map(s => s.id === updated.id ? updated : s))
        if (selectedService?.id === updated.id) {
          setSelectedService(updated)
        }
      } else {
        const newService = await serviceService.create(serviceFormData)
        setServices([newService, ...services])
        if (!selectedService) {
          setSelectedService(newService)
        }
      }
      
      setServiceFormData({ title: '', summary: '' })
      setIsServiceFormOpen(false)
      setEditingService(null)
      setError(null)
    } catch (err) {
      setError('Failed to save service')
      console.error('Save service error:', err)
    }
  }

  const handleServiceEdit = (service: Service) => {
    setEditingService(service)
    setServiceFormData({ title: service.title, summary: service.summary })
    setIsServiceFormOpen(true)
  }

  const handleServiceDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service? This will also delete all associated details and approaches.')) return
    
    try {
      await serviceService.delete(id)
      const updatedServices = services.filter(s => s.id !== id)
      setServices(updatedServices)
      if (selectedService?.id === id) {
        setSelectedService(updatedServices.length > 0 ? updatedServices[0] : null)
      }
    } catch (err) {
      setError('Failed to delete service')
      console.error('Delete service error:', err)
    }
  }

  // Detail handlers
  const handleDetailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedService) return
    
    try {
      const detailData = { ...detailFormData, service_id: selectedService.id }
      
      if (editingDetail) {
        await serviceDetailService.update(editingDetail.id, detailFormData)
      } else {
        await serviceDetailService.create(detailData)
      }
      
      // Reload the selected service to get updated details
      const updatedServices = await serviceService.getAll()
      const updatedSelectedService = updatedServices.find(s => s.id === selectedService.id)
      if (updatedSelectedService) {
        setSelectedService(updatedSelectedService)
        setServices(updatedServices)
      }
      
      setDetailFormData({ title: '', description: '' })
      setIsDetailFormOpen(false)
      setEditingDetail(null)
      setError(null)
    } catch (err) {
      setError('Failed to save service detail')
      console.error('Save detail error:', err)
    }
  }

  const handleDetailEdit = (detail: ServiceDetail) => {
    setEditingDetail(detail)
    setDetailFormData({ title: detail.title, description: detail.description })
    setIsDetailFormOpen(true)
  }

  const handleDetailDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service detail?')) return
    
    try {
      await serviceDetailService.delete(id)
      // Reload the selected service
      const updatedServices = await serviceService.getAll()
      const updatedSelectedService = updatedServices.find(s => s.id === selectedService?.id)
      if (updatedSelectedService) {
        setSelectedService(updatedSelectedService)
        setServices(updatedServices)
      }
    } catch (err) {
      setError('Failed to delete service detail')
      console.error('Delete detail error:', err)
    }
  }

  // Approach handlers
  const handleApproachSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedService) return
    
    try {
      const approachData = { ...approachFormData, service_id: selectedService.id }
      
      if (editingApproach) {
        await serviceApproachService.update(editingApproach.id, approachFormData)
      } else {
        await serviceApproachService.create(approachData)
      }
      
      // Reload the selected service to get updated approaches
      const updatedServices = await serviceService.getAll()
      const updatedSelectedService = updatedServices.find(s => s.id === selectedService.id)
      if (updatedSelectedService) {
        setSelectedService(updatedSelectedService)
        setServices(updatedServices)
      }
      
      setApproachFormData({ title: '', description: '' })
      setIsApproachFormOpen(false)
      setEditingApproach(null)
      setError(null)
    } catch (err) {
      setError('Failed to save service approach')
      console.error('Save approach error:', err)
    }
  }

  const handleApproachEdit = (approach: ServiceApproach) => {
    setEditingApproach(approach)
    setApproachFormData({ title: approach.title, description: approach.description })
    setIsApproachFormOpen(true)
  }

  const handleApproachDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service approach?')) return
    
    try {
      await serviceApproachService.delete(id)
      // Reload the selected service
      const updatedServices = await serviceService.getAll()
      const updatedSelectedService = updatedServices.find(s => s.id === selectedService?.id)
      if (updatedSelectedService) {
        setSelectedService(updatedSelectedService)
        setServices(updatedServices)
      }
    } catch (err) {
      setError('Failed to delete service approach')
      console.error('Delete approach error:', err)
    }
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

  const tabs = [
    { id: 'service' as const, label: 'Service Info' },
    { id: 'details' as const, label: 'Service Details' },
    { id: 'approaches' as const, label: 'Service Approaches' }
  ]

  return (
    <motion.div 
      className="p-6 space-y-6"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-vikasa-espresso">Services Management</h2>
        <button
          onClick={() => setIsServiceFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Service
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Services List */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <div className="space-y-2">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-3 rounded-lg cursor-pointer transition duration-200 ${
                  selectedService?.id === service.id
                    ? 'bg-vikasa-espresso text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedService(service)}
              >
                <h4 className="font-medium">{service.title}</h4>
                <p className="text-sm opacity-80 line-clamp-2">{service.summary}</p>
              </div>
            ))}
            {services.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                No services found
              </div>
            )}
          </div>
        </div>

        {/* Service Management */}
        <div className="lg:col-span-3">
          {selectedService ? (
            <>
              {/* Service Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{selectedService.title}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleServiceEdit(selectedService)}
                    className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded"
                  >
                    Edit Service
                  </button>
                  <button
                    onClick={() => handleServiceDelete(selectedService.id)}
                    className="text-red-600 hover:text-red-800 px-3 py-1 rounded"
                  >
                    Delete Service
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b mb-6">
                <div className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-vikasa-espresso text-vikasa-espresso'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } transition-colors`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'service' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Summary</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedService.summary}</p>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-900">Service Details</h4>
                    <button
                      onClick={() => setIsDetailFormOpen(true)}
                      className="bg-vikasa-espresso text-white px-4 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                    >
                      Add Detail
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {selectedService.details?.map((detail) => (
                      <div key={detail.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900 mb-1">{detail.title}</h5>
                            <p className="text-gray-600 text-sm">{detail.description}</p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <button
                              onClick={() => handleDetailEdit(detail)}
                              className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDetailDelete(detail.id)}
                              className="text-red-600 hover:text-red-800 px-2 py-1 rounded text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )) || (
                      <div className="text-center py-8 text-gray-500">
                        No service details found. Add your first detail to get started.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'approaches' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-900">Service Approaches</h4>
                    <button
                      onClick={() => setIsApproachFormOpen(true)}
                      className="bg-vikasa-espresso text-white px-4 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                    >
                      Add Approach
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {selectedService.approaches?.map((approach) => (
                      <div key={approach.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900 mb-1">{approach.title}</h5>
                            <p className="text-gray-600 text-sm">{approach.description}</p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <button
                              onClick={() => handleApproachEdit(approach)}
                              className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleApproachDelete(approach.id)}
                              className="text-red-600 hover:text-red-800 px-2 py-1 rounded text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )) || (
                      <div className="text-center py-8 text-gray-500">
                        No service approaches found. Add your first approach to get started.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-gray-500">
              Select a service to manage its details and approaches
            </div>
          )}
        </div>
      </div>

      {/* Service Form Modal */}
      {isServiceFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {editingService ? 'Edit Service' : 'Add New Service'}
            </h3>
            
            <form onSubmit={handleServiceSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={serviceFormData.title}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, title: e.target.value })}
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
                  value={serviceFormData.summary}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, summary: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter service summary..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingService ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setServiceFormData({ title: '', summary: '' })
                    setIsServiceFormOpen(false)
                    setEditingService(null)
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

      {/* Detail Form Modal */}
      {isDetailFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {editingDetail ? 'Edit Service Detail' : 'Add New Service Detail'}
            </h3>
            
            <form onSubmit={handleDetailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={detailFormData.title}
                  onChange={(e) => setDetailFormData({ ...detailFormData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter detail title..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={detailFormData.description}
                  onChange={(e) => setDetailFormData({ ...detailFormData, description: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter detailed description..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingDetail ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDetailFormData({ title: '', description: '' })
                    setIsDetailFormOpen(false)
                    setEditingDetail(null)
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

      {/* Approach Form Modal */}
      {isApproachFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {editingApproach ? 'Edit Service Approach' : 'Add New Service Approach'}
            </h3>
            
            <form onSubmit={handleApproachSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={approachFormData.title}
                  onChange={(e) => setApproachFormData({ ...approachFormData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter approach title..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={approachFormData.description}
                  onChange={(e) => setApproachFormData({ ...approachFormData, description: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter approach description..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingApproach ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setApproachFormData({ title: '', description: '' })
                    setIsApproachFormOpen(false)
                    setEditingApproach(null)
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
