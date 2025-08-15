'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

export default function CTASection() {
  return (
    <motion.section 
      className="py-16 bg-vikasa-espresso text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how our services can help you achieve your goals.
          </p>
          <Link 
            href="/contact" 
            className="bg-vikasa-gold text-vikasa-espresso hover:bg-white px-8 py-3 rounded-md text-lg font-medium inline-block transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
