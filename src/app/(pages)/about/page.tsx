'use client'

import {
  HeroSection,
  CompanyStory,
  VisionSection,
  CoreValues,
  TeamProfiles,
  CompanyCredentials,
  ImpactResults,
  CompanyCulture
} from '@/components/about'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

export default function About() {
  return (
    <div className="min-h-screen font-montserrat">
      <HeroSection />
      <CompanyStory />
      <VisionSection />
      <CoreValues />
      <TeamProfiles />
      <CompanyCredentials />
      <ImpactResults />
      <CompanyCulture />
      
      {/* Call to Action */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-vikasa-espresso to-vikasa-latte text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div className="max-w-3xl mx-auto" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-xl mb-8">
              Let's discuss how Vikasa can help you achieve your goals and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-vikasa-gold text-vikasa-espresso px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors">
                Schedule a Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-vikasa-espresso transition-colors">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
