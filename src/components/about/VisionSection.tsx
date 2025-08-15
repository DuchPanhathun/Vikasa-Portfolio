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

export default function VisionSection() {
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
          <p className="text-xl max-w-3xl mx-auto mb-10">
            We envision a business world where organizations thrive through authentic leadership, 
            strategic innovation, and sustainable practices. Vikasa will continue to be at the 
            forefront of this transformation, guiding leaders to create enduring value while 
            developing their people and serving their communities.
          </p>
          <div className="w-24 h-1 bg-vikasa-gold mx-auto"></div>
        </motion.div>
      </div>
    </motion.section>
  )
}
