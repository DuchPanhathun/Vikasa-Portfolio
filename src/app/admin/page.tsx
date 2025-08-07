'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import BannerManager from '@/components/admin/BannerManager'
import ExperienceManager from '@/components/admin/ExperienceManager'
import ClientManager from '@/components/admin/ClientManager'
import AwardManager from '@/components/admin/AwardManager'
import JourneyManager from '@/components/admin/JourneyManager'
import VisionManager from '@/components/admin/VisionManager'
import CoreValueManager from '@/components/admin/CoreValueManager'
import StaffManager from '@/components/admin/StaffManager'
import CredentialManager from '@/components/admin/CredentialManager'
import ImpactManager from '@/components/admin/ImpactManager'
import SocialImpactManager from '@/components/admin/SocialImpactManager'
import CultureManager from '@/components/admin/CultureManager'
import LifeAtVikasaManager from '@/components/admin/LifeAtVikasaManager'
import WhoWeServeManager from '@/components/admin/WhoWeServeManager'
import FAQManager from '@/components/admin/FAQManager'
import ServicesManager from '@/components/admin/ServicesManager'
import ArticleManager from '@/components/admin/ArticleManager'
import WhitePaperManager from '@/components/admin/WhitePaperManager'

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
  const [activeTab, setActiveTab] = useState('banner')
  const [sidebarOpen, setSidebarOpen] = useState(false)
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

  const tabs = [
    { id: 'banner', label: 'Banner', icon: '🖼️' },
    { id: 'experience', label: 'Experience', icon: '⭐' },
    { id: 'clients', label: 'Clients', icon: '👥' },
    { id: 'awards', label: 'Awards & Certificates', icon: '🏆' },
    { id: 'journey', label: 'Our Journey', icon: '🛤️' },
    { id: 'vision', label: 'Vision', icon: '👁️' },
    { id: 'core-values', label: 'Core Values', icon: '💎' },
    { id: 'staff', label: 'Staff', icon: '👨‍💼' },
    { id: 'credentials', label: 'Our Credentials', icon: '📜' },
    { id: 'impact', label: 'Our Impact', icon: '📊' },
    { id: 'social-impact', label: 'Social Impact', icon: '🌍' },
    { id: 'culture', label: 'Our Culture', icon: '🎭' },
    { id: 'life-at-vikasa', label: 'Life at Vikasa', icon: '🏢' },
    { id: 'who-we-serve', label: 'Who We Serve', icon: '🤝' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
    { id: 'services', label: 'Services', icon: '🔧' },
    { id: 'articles', label: 'Articles', icon: '📝' },
    { id: 'white-papers', label: 'White Papers', icon: '📄' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-vikasa-espresso rounded-lg flex items-center justify-center text-white font-bold text-sm">
                V
              </div>
              <span className="ml-2 text-lg font-semibold text-vikasa-espresso">Admin</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setSidebarOpen(false) // Close mobile sidebar when item is selected
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-vikasa-espresso text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3 text-lg">{tab.icon}</span>
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* User Info & Sign Out */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-700 rounded-lg hover:bg-red-50 transition-colors"
            >
              <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <motion.header 
          className="bg-white shadow-sm border-b lg:hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h1 className="ml-4 text-xl font-semibold text-vikasa-espresso">
                  {tabs.find(tab => tab.id === activeTab)?.label || 'Admin Dashboard'}
                </h1>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Desktop Header */}
        <motion.header 
          className="hidden lg:block bg-white shadow-sm border-b"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div>
                <h1 className="text-2xl font-bold text-vikasa-espresso">
                  {tabs.find(tab => tab.id === activeTab)?.label || 'Admin Dashboard'}
                </h1>
                <p className="text-sm text-gray-600">Welcome back, {user.email}</p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                {activeTab === 'banner' && <BannerManager />}
                {activeTab === 'experience' && <ExperienceManager />}
                {activeTab === 'clients' && <ClientManager />}
                {activeTab === 'awards' && <AwardManager />}
                {activeTab === 'journey' && <JourneyManager />}
                {activeTab === 'vision' && <VisionManager />}
                {activeTab === 'core-values' && <CoreValueManager />}
                {activeTab === 'staff' && <StaffManager />}
                {activeTab === 'credentials' && <CredentialManager />}
                {activeTab === 'impact' && <ImpactManager />}
                {activeTab === 'social-impact' && <SocialImpactManager />}
                {activeTab === 'culture' && <CultureManager />}
                {activeTab === 'life-at-vikasa' && <LifeAtVikasaManager />}
                {activeTab === 'who-we-serve' && <WhoWeServeManager />}
                {activeTab === 'faq' && <FAQManager />}
                {activeTab === 'services' && <ServicesManager />}
                {activeTab === 'articles' && <ArticleManager />}
                {activeTab === 'white-papers' && <WhitePaperManager />}
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
