'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { coreValueService, type CoreValue } from '@/lib/supabaseService'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// Fallback icons for when no core values exist
const defaultIcons = [
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
]

const fallbackCoreValues = [
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our interactions, ensuring transparency and honesty in every engagement.",
    icon: defaultIcons[0]
  },
  {
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in all our services, constantly raising the bar for ourselves and the industry.",
    icon: defaultIcons[1]
  },
  {
    title: "Innovation", 
    description: "We embrace creative thinking and pioneering approaches to solve complex business challenges with forward-looking solutions.",
    icon: defaultIcons[2]
  },
  {
    title: "Partnership",
    description: "We believe in building deep, collaborative relationships with our clients, becoming true partners in their success journey.",
    icon: defaultIcons[3]
  },
  {
    title: "Impact",
    description: "We measure our success by the meaningful and lasting difference we make in our clients' businesses and their stakeholders' lives.",
    icon: defaultIcons[4]
  }
]

export default function CoreValues() {
  const [coreValues, setCoreValues] = useState<CoreValue[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCoreValues = async () => {
      try {
        const data = await coreValueService.getAll()
        setCoreValues(data)
      } catch (error) {
        console.error('Failed to fetch core values:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCoreValues()
  }, [])

  // Use fetched data or fallback data
  const displayValues = coreValues.length > 0 ? coreValues : fallbackCoreValues

  const renderIcon = (value: CoreValue | typeof fallbackCoreValues[0], index: number) => {
    // If it's a CoreValue from database
    if ('icon' in value && typeof value.icon === 'string') {
      if (value.icon.startsWith('http')) {
        return (
          <Image 
            src={value.icon} 
            alt={value.title}
            width={40}
            height={40}
            className="object-contain"
          />
        )
      } else {
        return <div className="text-4xl">{value.icon}</div>
      }
    }
    // If it's a fallback value with JSX icon
    return value.icon
  }
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
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Core Values</h2>
          <p className="text-lg text-gray-700">
            These principles guide every aspect of our work, from how we engage with clients 
            to how we develop our team members and measure our success.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vikasa-espresso"></div>
          </div>
        ) : (
          <>
            {/* Dynamic grid layout based on number of values */}
            <motion.div 
              className={`grid gap-8 ${
                displayValues.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                displayValues.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
                displayValues.length === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                displayValues.length === 4 ? 'grid-cols-1 md:grid-cols-2 gap-8' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
              variants={staggerContainer}
            >
              {displayValues.slice(0, displayValues.length <= 4 ? displayValues.length : 3).map((value, index) => (
                <motion.div 
                  key={'id' in value ? value.id : `fallback-${index}`} 
                  className="bg-vikasa-espresso-50 p-8 rounded-lg"
                  variants={staggerItem}
                >
                  <div className="text-vikasa-gold mb-4">{renderIcon(value, index)}</div>
                  <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{value.title}</h3>
                  <p className="text-gray-700">
                    {'detail' in value ? value.detail : value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Second row for 4+ values */}
            {displayValues.length > 4 && (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
                variants={staggerContainer}
              >
                {displayValues.slice(3).map((value, index) => (
                  <motion.div 
                    key={'id' in value ? value.id : `fallback-${index + 3}`} 
                    className="bg-vikasa-espresso-50 p-8 rounded-lg"
                    variants={staggerItem}
                  >
                    <div className="text-vikasa-gold mb-4">{renderIcon(value, index + 3)}</div>
                    <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{value.title}</h3>
                    <p className="text-gray-700">
                      {'detail' in value ? value.detail : value.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Show message when using fallback values */}
            {coreValues.length === 0 && (
              <motion.div 
                className="text-center mt-8"
                variants={fadeInUp}
              >
                <p className="text-gray-500 text-sm">
                  Add core values in the admin panel to display your company's values here.
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </motion.section>
  )
}
