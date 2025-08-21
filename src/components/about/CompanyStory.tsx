'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { journeyService, type Journey } from '@/lib/supabaseService'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function CompanyStory() {
  const [journeyData, setJourneyData] = useState<Journey[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchJourneyData = async () => {
      try {
        const data = await journeyService.getAll()
        // Sort by year in ascending order for timeline display
        const sortedData = data.sort((a, b) => a.year - b.year)
        setJourneyData(sortedData)
      } catch (error) {
        console.error('Failed to fetch journey data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchJourneyData()
  }, [])
  return (
    <motion.section 
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Journey</h2>
            
            {/* Dynamic Journey Content */}
            {isLoading ? (
              <div className="flex items-center py-4">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-vikasa-espresso mr-2"></div>
                <span className="text-gray-600">Loading our journey...</span>
              </div>
            ) : journeyData.length > 0 ? (
              <div className="space-y-6">
                {journeyData.slice(0, 3).map((milestone, index) => (
                  <div key={milestone.id} className="border-l-4 border-vikasa-gold pl-4">
                    <div className="flex items-center mb-2">
                      <span className="inline-block bg-vikasa-espresso text-white text-sm font-bold px-2 py-1 rounded mr-3">
                        {milestone.year}
                      </span>
                      <h3 className="font-semibold text-vikasa-espresso">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{milestone.detail}</p>
                  </div>
                ))}
                {journeyData.length > 3 && (
                  <p className="text-sm text-gray-500 italic">
                    ...and {journeyData.length - 3} more milestones in our journey.
                  </p>
                )}
              </div>
            ) : (
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Vikasa was born from a clear vision: to redefine business consulting by combining strategic insight with practical implementation. 
                  Our founder, Jane Smith, recognized that many organizations struggled with the gap between strategy development and execution.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Starting with a small team of experienced consultants, we set out to build a different kind of advisory firm—one that would 
                  stay with clients through the entire journey of transformation and capability building.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Today, Vikasa has evolved into a global consultancy with specialized practices in strategy, operations, leadership development, 
                  and digital transformation. Our integrated approach ensures we deliver solutions that drive real, measurable impact.
                </p>
              </div>
            )}
            
            <div className="flex gap-4 mt-8">
              <Link href="/contact" className="bg-vikasa-gold hover:bg-vikasa-gold-light text-vikasa-espresso font-semibold px-5 py-2 rounded-md transition-colors">
                Contact Us
              </Link>
              <Link href="/service" className="border border-vikasa-espresso text-vikasa-espresso hover:bg-vikasa-espresso hover:text-white font-semibold px-5 py-2 rounded-md transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="relative h-96 bg-vikasa-latte/30 rounded-lg overflow-hidden"
            variants={staggerItem}
          >
            {/* Display first milestone image if available */}
            {journeyData.length > 0 && journeyData[0].image ? (
              <div className="relative w-full h-full">
                <Image 
                  src={journeyData[0].image} 
                  alt={journeyData[0].title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-vikasa-latte text-lg font-medium">Company Founding Team Image</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
