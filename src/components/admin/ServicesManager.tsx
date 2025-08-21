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
import {
  ServiceList,
  ServiceTabs,
  ServiceInfoTab,
  ServiceDetailsTab,
  ServiceApproachesTab,
  ServiceFormModal,
  DetailFormModal,
  ApproachFormModal
} from './services'

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
  const [serviceFormData, setServiceFormData] = useState({ title: '', summary: '', image: '' })
  
  // Image upload state
  const [imageUploadType, setImageUploadType] = useState<'url' | 'file'>('url')
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  
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
      
      handleServiceFormClose()
      setError(null)
    } catch (err) {
      setError('Failed to save service')
      console.error('Save service error:', err)
    }
  }

  const handleServiceEdit = (service: Service) => {
    setEditingService(service)
    setServiceFormData({ title: service.title, summary: service.summary, image: service.image || '' })
    // Reset image upload state
    setImageUploadType('url')
    setSelectedImageFile(null)
    setImagePreview(service.image || '')
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

  const handleServiceFormClose = () => {
    setServiceFormData({ title: '', summary: '', image: '' })
    // Reset image upload state
    setImageUploadType('url')
    setSelectedImageFile(null)
    setImagePreview('')
    setIsServiceFormOpen(false)
    setEditingService(null)
  }

  // Image upload handlers for services
  const handleServiceImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImageFile(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setImagePreview(result)
        setServiceFormData({ ...serviceFormData, image: result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleServiceImageUrlChange = (url: string) => {
    setServiceFormData({ ...serviceFormData, image: url || '' })
    setImagePreview(url || '')
    setSelectedImageFile(null)
  }

  const clearServiceImage = () => {
    setSelectedImageFile(null)
    setImagePreview('')
    setServiceFormData({ ...serviceFormData, image: '' })
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
      
      handleDetailFormClose()
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

  const handleDetailFormClose = () => {
    setDetailFormData({ title: '', description: '' })
    setIsDetailFormOpen(false)
    setEditingDetail(null)
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
      
      handleApproachFormClose()
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

  const handleApproachFormClose = () => {
    setApproachFormData({ title: '', description: '' })
    setIsApproachFormOpen(false)
    setEditingApproach(null)
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">Services Management</h2>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Services List */}
        <ServiceList
          services={services}
          selectedService={selectedService}
          onServiceSelect={setSelectedService}
          onAddService={() => setIsServiceFormOpen(true)}
        />

        {/* Service Management */}
        <div className="lg:col-span-3">
          {selectedService ? (
            <>
              {/* Tabs */}
              <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />

              {/* Tab Content */}
              {activeTab === 'service' && (
                <ServiceInfoTab
                  service={selectedService}
                  onEdit={handleServiceEdit}
                  onDelete={handleServiceDelete}
                />
              )}

              {activeTab === 'details' && (
                <ServiceDetailsTab
                  details={selectedService.details}
                  onAddDetail={() => setIsDetailFormOpen(true)}
                  onEditDetail={handleDetailEdit}
                  onDeleteDetail={handleDetailDelete}
                />
              )}

              {activeTab === 'approaches' && (
                <ServiceApproachesTab
                  approaches={selectedService.approaches}
                  onAddApproach={() => setIsApproachFormOpen(true)}
                  onEditApproach={handleApproachEdit}
                  onDeleteApproach={handleApproachDelete}
                />
              )}
            </>
          ) : (
            <div className="text-center py-12 text-gray-500">
              Select a service to manage its details and approaches
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <ServiceFormModal
        isOpen={isServiceFormOpen}
        isEditing={!!editingService}
        formData={serviceFormData}
        onFormDataChange={setServiceFormData}
        onSubmit={handleServiceSubmit}
        onClose={handleServiceFormClose}
        imageUploadType={imageUploadType}
        onImageUploadTypeChange={setImageUploadType}
        onImageFileChange={handleServiceImageFileChange}
        onImageUrlChange={handleServiceImageUrlChange}
        onClearImage={clearServiceImage}
        imagePreview={imagePreview}
        selectedImageFile={selectedImageFile}
      />

      <DetailFormModal
        isOpen={isDetailFormOpen}
        isEditing={!!editingDetail}
        formData={detailFormData}
        onFormDataChange={setDetailFormData}
        onSubmit={handleDetailSubmit}
        onClose={handleDetailFormClose}
      />

      <ApproachFormModal
        isOpen={isApproachFormOpen}
        isEditing={!!editingApproach}
        formData={approachFormData}
        onFormDataChange={setApproachFormData}
        onSubmit={handleApproachSubmit}
        onClose={handleApproachFormClose}
      />
    </motion.div>
  )
}
