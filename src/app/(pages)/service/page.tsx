'use client'

import { useState } from 'react'
import {
  HeroSection,
  ServicesContent,
  ServiceDeliverySection,
  CTASection
} from '@/components/service'

export default function Services() {
  const [activeTab, setActiveTab] = useState('all') // 'all', 'advisory', 'academy', 'implementation'
  
  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <ServicesContent activeTab={activeTab} />
      <ServiceDeliverySection />
      <CTASection />
    </div>
  )
}
