'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function ResourceNavigation() {
  return (
    <motion.section 
      className="py-10 bg-vikasa-espresso-50"
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      transition={fadeIn.transition}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={staggerContainer.initial}
          whileInView={staggerContainer.whileInView}
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem}>
            <Link href="/resource/blog" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">Blog & Articles</span>
            </Link>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Link href="/resource/whitepapers" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">White Papers & Research</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
