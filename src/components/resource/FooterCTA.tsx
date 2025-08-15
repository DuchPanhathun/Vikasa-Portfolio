'use client'

import Link from 'next/link'
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

export default function FooterCTA() {
  return (
    <motion.section 
      className="py-16 bg-vikasa-espresso text-white"
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      transition={fadeIn.transition}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Need Personalized Guidance?</h2>
          <p className="text-vikasa-espresso-100 max-w-3xl mx-auto mb-8">
            Our team of expert consultants is ready to help you navigate your specific business challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-vikasa-espresso font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border border-white hover:bg-white hover:text-vikasa-espresso text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
