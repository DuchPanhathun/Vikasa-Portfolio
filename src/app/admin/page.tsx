'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function AdminPage() {
  const { user, signOut, loading, isAdmin } = useAuth()
  const [activeTab, setActiveTab] = useState('content')
  const router = useRouter()

  // Redirect if not admin
  React.useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push('/login')
    }
  }, [user, isAdmin, loading, router])

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vikasa-espresso mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Show loading state while redirecting
  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vikasa-espresso mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting...</p>
        </div>
      </div>
    )
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm border-b"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div variants={fadeInUp}>
              <h1 className="text-2xl font-bold text-vikasa-espresso">Vikasa Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user.email}</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <button
                onClick={handleSignOut}
                className="bg-vikasa-espresso text-white px-4 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors"
              >
                Sign Out
              </button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Navigation Tabs */}
      <motion.nav 
        className="bg-white border-b"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('content')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'content'
                  ? 'border-vikasa-espresso text-vikasa-espresso'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Content Management
            </button>
            <button
              onClick={() => setActiveTab('uploads')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'uploads'
                  ? 'border-vikasa-espresso text-vikasa-espresso'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              File Uploads
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-vikasa-espresso text-vikasa-espresso'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Settings
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {activeTab === 'content' && (
            <motion.div variants={staggerItem}>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-vikasa-espresso">Content Management</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Service Content */}
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Service Content</h3>
                    <p className="text-sm text-gray-600 mb-4">Manage service descriptions and offerings</p>
                    <button className="w-full bg-vikasa-latte text-white py-2 px-4 rounded hover:bg-vikasa-latte/90 transition-colors">
                      Edit Services
                    </button>
                  </div>

                  {/* About Content */}
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">About Content</h3>
                    <p className="text-sm text-gray-600 mb-4">Update company information and team details</p>
                    <button className="w-full bg-vikasa-latte text-white py-2 px-4 rounded hover:bg-vikasa-latte/90 transition-colors">
                      Edit About
                    </button>
                  </div>

                  {/* Resource Content */}
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Resource Content</h3>
                    <p className="text-sm text-gray-600 mb-4">Manage blog posts and resources</p>
                    <button className="w-full bg-vikasa-latte text-white py-2 px-4 rounded hover:bg-vikasa-latte/90 transition-colors">
                      Edit Resources
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'uploads' && (
            <motion.div variants={staggerItem}>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-vikasa-espresso">File Uploads</h2>
                
                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="mt-4">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="mt-2 block text-sm font-medium text-gray-900">
                        Drop files here or click to upload
                      </span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                    </label>
                    <p className="mt-1 text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>

                {/* Recent Uploads */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Uploads</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-500 text-center">No files uploaded yet</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div variants={staggerItem}>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-vikasa-espresso">Settings</h2>
                
                <div className="space-y-6">
                  {/* Site Settings */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Site Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
                        <input 
                          type="text" 
                          defaultValue="Vikasa Portfolio"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                        <input 
                          type="email" 
                          defaultValue="contact@vikasa.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-vikasa-espresso focus:border-vikasa-espresso"
                        />
                      </div>
                    </div>
                  </div>

                  {/* User Management */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">User Management</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{user.email}</p>
                          <p className="text-sm text-gray-500">Administrator</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="pt-4">
                    <button className="bg-vikasa-espresso text-white px-6 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  )
}
