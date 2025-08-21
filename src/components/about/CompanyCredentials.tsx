'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { credentialService, type Credential } from '@/lib/supabaseService'
import RichTextViewer from '@/components/ui/RichTextViewer'
import { htmlToFormattedText } from '@/utils/htmlToText'

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

// Fallback credentials when none exist in database
const fallbackCredentials = [
  {
    category: "Certifications",
    items: [
      "ISO 9001:2015 Certified",
      "PMI Registered Education Provider",
      "ICF Accredited Coach Training Program",
      "SHRM Certified Professional Development"
    ]
  },
  {
    category: "Partnerships",
    items: [
      "World Economic Forum Partner",
      "Harvard Business School Executive Education",
      "MIT Sloan Management School Affiliate",
      "Global Leadership Network Member"
    ]
  },
  {
    category: "Awards",
    items: [
      "Forbes Top 50 Consulting Firms (2022)",
      "Brandon Hall Excellence in Leadership Development",
      "Training Industry Top 20 Leadership Training Provider",
      "Global Business Excellence Award"
    ]
  },
  {
    category: "Memberships",
    items: [
      "International Coach Federation",
      "Association for Talent Development",
      "Society for Human Resource Management",
      "Digital Transformation Alliance"
    ]
  }
]

export default function CompanyCredentials() {
  const [credentials, setCredentials] = useState<Credential[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const data = await credentialService.getAll()
        setCredentials(data)
      } catch (error) {
        console.error('Failed to fetch credentials:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCredentials()
  }, [])
  return (
    <motion.section 
      className="py-16 bg-vikasa-espresso-50"
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
          <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Credentials</h2>
          <p className="text-lg text-gray-700">
            Vikasa maintains the highest standards of professional excellence through industry certifications, partnerships, and recognitions.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vikasa-espresso"></div>
          </div>
        ) : credentials.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {credentials.map((credential, index) => (
              <motion.div 
                key={credential.id} 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={staggerItem}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-3 text-vikasa-espresso">
                      {credential.title}
                    </h3>
                    <div className="text-gray-700 leading-relaxed">
                      <RichTextViewer 
                        content={credential.details} 
                        className="prose prose-sm max-w-none prose-headings:text-vikasa-espresso prose-strong:text-gray-800" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {fallbackCredentials.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md"
                variants={staggerItem}
              >
                <h3 className="text-xl font-bold mb-6 text-vikasa-espresso border-b border-vikasa-gold pb-2">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Show message when using fallback credentials */}
        {credentials.length === 0 && !isLoading && (
          <motion.div 
            className="text-center mt-8"
            variants={fadeInUp}
          >
            <p className="text-gray-500 text-sm">
              Add company credentials in the admin panel to display your achievements here.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
