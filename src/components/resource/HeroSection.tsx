'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export default function HeroSection() {
  return (
    <motion.section 
      className="relative bg-gradient-to-r from-vikasa-espresso to-vikasa-latte py-20"
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      transition={fadeIn.transition}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resource Center</h1>
          <p className="text-xl mb-10">
            Insights, tools and expertise to help your organization thrive in today&apos;s complex business environment.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for resources by keyword" 
              className="w-full py-4 px-6 rounded-full text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-vikasa-gold placeholder-gray-400 placeholder-opacity-75 focus:placeholder-vikasa-latte"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-vikasa-gold hover:bg-vikasa-gold-dark text-white p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
