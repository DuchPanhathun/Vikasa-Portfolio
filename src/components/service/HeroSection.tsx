'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

interface HeroSectionProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function HeroSection({ activeTab, setActiveTab }: HeroSectionProps) {
  return (
    <motion.section 
      className="bg-vikasa-espresso-50 py-16 md:py-24"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-vikasa-espresso">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Comprehensive solutions to transform your business through expert guidance and specialized training programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'all' 
                  ? 'bg-vikasa-espresso text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Services
            </button>
            <button 
              onClick={() => setActiveTab('advisory')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'advisory' 
                  ? 'bg-vikasa-espresso text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Advisory Services
            </button>
            <button 
              onClick={() => setActiveTab('academy')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'academy' 
                  ? 'bg-vikasa-espresso text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Academy Programs
            </button>
            <button 
              onClick={() => setActiveTab('implementation')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'implementation' 
                  ? 'bg-vikasa-espresso text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Implementation Services
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
