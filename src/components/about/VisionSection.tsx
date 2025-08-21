'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { visionService, type Vision } from '@/lib/supabaseService'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

export default function VisionSection() {
  const [visions, setVisions] = useState<Vision[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchVisions = async () => {
      try {
        const data = await visionService.getAll()
        setVisions(data)
      } catch (error) {
        console.error('Failed to fetch visions:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchVisions()
  }, [])
  return (
    <motion.section 
      className="py-16 bg-gradient-to-r from-vikasa-espresso to-vikasa-latte text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-8">Our Vision for the Future</h2>
          
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          ) : visions.length > 0 ? (
            <div className="space-y-6">
              {visions.map((vision, index) => (
                <p key={vision.id} className="text-xl max-w-3xl mx-auto leading-relaxed">
                  {vision.detail}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-xl max-w-3xl mx-auto mb-10">
              We envision a business world where organizations thrive through authentic leadership, 
              strategic innovation, and sustainable practices. Vikasa will continue to be at the 
              forefront of this transformation, guiding leaders to create enduring value while 
              developing their people and serving their communities.
            </p>
          )}
          
          <div className="w-24 h-1 bg-vikasa-gold mx-auto mt-10"></div>
        </motion.div>
      </div>
    </motion.section>
  )
}
