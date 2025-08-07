'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  industryService, 
  organizationTypeService, 
  clientSupportApproachService,
  type Industry, 
  type OrganizationType, 
  type ClientSupportApproach 
} from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function WhoWeServeManager() {
  const [activeSection, setActiveSection] = useState<'industries' | 'organization-types' | 'support-approaches'>('industries')
  
  // Industries state
  const [industries, setIndustries] = useState<Industry[]>([])
  const [industryFormData, setIndustryFormData] = useState({ name: '', description: '' })
  const [editingIndustry, setEditingIndustry] = useState<Industry | null>(null)
  const [isIndustryFormOpen, setIsIndustryFormOpen] = useState(false)

  // Organization types state
  const [organizationTypes, setOrganizationTypes] = useState<OrganizationType[]>([])
  const [orgTypeFormData, setOrgTypeFormData] = useState({ name: '', description: '' })
  const [editingOrgType, setEditingOrgType] = useState<OrganizationType | null>(null)
  const [isOrgTypeFormOpen, setIsOrgTypeFormOpen] = useState(false)

  // Support approaches state
  const [supportApproaches, setSupportApproaches] = useState<ClientSupportApproach[]>([])
  const [supportFormData, setSupportFormData] = useState({ name: '', description: '' })
  const [editingSupportApproach, setEditingSupportApproach] = useState<ClientSupportApproach | null>(null)
  const [isSupportFormOpen, setIsSupportFormOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    try {
      setIsLoading(true)
      const [industriesData, orgTypesData, supportData] = await Promise.all([
        industryService.getAll(),
        organizationTypeService.getAll(),
        clientSupportApproachService.getAll()
      ])
      
      setIndustries(industriesData)
      setOrganizationTypes(orgTypesData)
      setSupportApproaches(supportData)
    } catch (err) {
      setError('Failed to load data')
      console.error('Load data error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  // Industry handlers
  const handleIndustrySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingIndustry) {
        const updated = await industryService.update(editingIndustry.id, industryFormData)
        setIndustries(industries.map(i => i.id === updated.id ? updated : i))
      } else {
        const newIndustry = await industryService.create(industryFormData)
        setIndustries([newIndustry, ...industries])
      }
      
      setIndustryFormData({ name: '', description: '' })
      setIsIndustryFormOpen(false)
      setEditingIndustry(null)
      setError(null)
    } catch (err) {
      setError('Failed to save industry')
      console.error('Save industry error:', err)
    }
  }

  const handleIndustryEdit = (industry: Industry) => {
    setEditingIndustry(industry)
    setIndustryFormData({ name: industry.name, description: industry.description })
    setIsIndustryFormOpen(true)
  }

  const handleIndustryDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this industry?')) return
    
    try {
      await industryService.delete(id)
      setIndustries(industries.filter(i => i.id !== id))
    } catch (err) {
      setError('Failed to delete industry')
      console.error('Delete industry error:', err)
    }
  }

  // Organization type handlers
  const handleOrgTypeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingOrgType) {
        const updated = await organizationTypeService.update(editingOrgType.id, orgTypeFormData)
        setOrganizationTypes(organizationTypes.map(o => o.id === updated.id ? updated : o))
      } else {
        const newOrgType = await organizationTypeService.create(orgTypeFormData)
        setOrganizationTypes([newOrgType, ...organizationTypes])
      }
      
      setOrgTypeFormData({ name: '', description: '' })
      setIsOrgTypeFormOpen(false)
      setEditingOrgType(null)
      setError(null)
    } catch (err) {
      setError('Failed to save organization type')
      console.error('Save org type error:', err)
    }
  }

  const handleOrgTypeEdit = (orgType: OrganizationType) => {
    setEditingOrgType(orgType)
    setOrgTypeFormData({ name: orgType.name, description: orgType.description })
    setIsOrgTypeFormOpen(true)
  }

  const handleOrgTypeDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this organization type?')) return
    
    try {
      await organizationTypeService.delete(id)
      setOrganizationTypes(organizationTypes.filter(o => o.id !== id))
    } catch (err) {
      setError('Failed to delete organization type')
      console.error('Delete org type error:', err)
    }
  }

  // Support approach handlers
  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingSupportApproach) {
        const updated = await clientSupportApproachService.update(editingSupportApproach.id, supportFormData)
        setSupportApproaches(supportApproaches.map(s => s.id === updated.id ? updated : s))
      } else {
        const newApproach = await clientSupportApproachService.create(supportFormData)
        setSupportApproaches([newApproach, ...supportApproaches])
      }
      
      setSupportFormData({ name: '', description: '' })
      setIsSupportFormOpen(false)
      setEditingSupportApproach(null)
      setError(null)
    } catch (err) {
      setError('Failed to save support approach')
      console.error('Save support approach error:', err)
    }
  }

  const handleSupportEdit = (approach: ClientSupportApproach) => {
    setEditingSupportApproach(approach)
    setSupportFormData({ name: approach.name, description: approach.description })
    setIsSupportFormOpen(true)
  }

  const handleSupportDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this support approach?')) return
    
    try {
      await clientSupportApproachService.delete(id)
      setSupportApproaches(supportApproaches.filter(s => s.id !== id))
    } catch (err) {
      setError('Failed to delete support approach')
      console.error('Delete support approach error:', err)
    }
  }

  const sections = [
    { id: 'industries' as const, label: 'Industries' },
    { id: 'organization-types' as const, label: 'Organization Types' },
    { id: 'support-approaches' as const, label: 'Client Support Approaches' }
  ]

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

  const renderForm = () => {
    const isIndustries = activeSection === 'industries'
    const isOrgTypes = activeSection === 'organization-types'
    const isSupport = activeSection === 'support-approaches'

    const formData = isIndustries ? industryFormData : isOrgTypes ? orgTypeFormData : supportFormData
    const setFormData = isIndustries ? setIndustryFormData : isOrgTypes ? setOrgTypeFormData : setSupportFormData
    const isFormOpen = isIndustries ? isIndustryFormOpen : isOrgTypes ? isOrgTypeFormOpen : isSupportFormOpen
    const setIsFormOpen = isIndustries ? setIsIndustryFormOpen : isOrgTypes ? setIsOrgTypeFormOpen : setIsSupportFormOpen
    const editing = isIndustries ? editingIndustry : isOrgTypes ? editingOrgType : editingSupportApproach
    const handleSubmit = isIndustries ? handleIndustrySubmit : isOrgTypes ? handleOrgTypeSubmit : handleSupportSubmit
    const resetForm = () => {
      setFormData({ name: '', description: '' })
      setIsFormOpen(false)
      if (isIndustries) setEditingIndustry(null)
      if (isOrgTypes) setEditingOrgType(null)
      if (isSupport) setEditingSupportApproach(null)
    }

    if (!isFormOpen) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">
            {editing ? 'Edit' : 'Add New'} {
              isIndustries ? 'Industry' : 
              isOrgTypes ? 'Organization Type' : 
              'Support Approach'
            }
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                placeholder="Enter name..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                placeholder="Enter description..."
                required
              />
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
              >
                {editing ? 'Update' : 'Create'}
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
    )
  }

  const renderList = () => {
    let data: any[] = []
    let handleEdit: (item: any) => void = () => {}
    let handleDelete: (id: string) => void = () => {}

    if (activeSection === 'industries') {
      data = industries
      handleEdit = handleIndustryEdit
      handleDelete = handleIndustryDelete
    } else if (activeSection === 'organization-types') {
      data = organizationTypes
      handleEdit = handleOrgTypeEdit
      handleDelete = handleOrgTypeDelete
    } else {
      data = supportApproaches
      handleEdit = handleSupportEdit
      handleDelete = handleSupportDelete
    }

    if (data.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          No {activeSection.replace('-', ' ')} found. Add your first item to get started.
        </div>
      )
    }

    return (
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition duration-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Created: {new Date(item.created_at).toLocaleDateString()}
                </p>
              </div>
              
              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:text-red-800 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
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
        <h2 className="text-2xl font-bold text-vikasa-espresso">Who We Serve Management</h2>
        <button
          onClick={() => {
            if (activeSection === 'industries') setIsIndustryFormOpen(true)
            if (activeSection === 'organization-types') setIsOrgTypeFormOpen(true)
            if (activeSection === 'support-approaches') setIsSupportFormOpen(true)
          }}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add {activeSection === 'industries' ? 'Industry' : 
               activeSection === 'organization-types' ? 'Organization Type' : 
               'Support Approach'}
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Section Tabs */}
      <div className="border-b">
        <div className="flex space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeSection === section.id
                  ? 'border-vikasa-espresso text-vikasa-espresso'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Form Modal */}
      {renderForm()}

      {/* Content */}
      {renderList()}
    </motion.div>
  )
}
