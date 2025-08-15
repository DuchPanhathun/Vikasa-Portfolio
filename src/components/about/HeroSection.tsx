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

export default function HeroSection() {
  return (
    <motion.section 
      className="relative bg-vikasa-espresso-50 py-20"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vikasa-espresso">Our Story</h1>
          <p className="text-xl text-gray-700 mb-8">Transforming businesses through expertise, innovation, and partnership since 2005.</p>
          <div className="w-32 h-1 bg-vikasa-gold mx-auto"></div>
        </motion.div>
      </div>
    </motion.section>
  )
}
