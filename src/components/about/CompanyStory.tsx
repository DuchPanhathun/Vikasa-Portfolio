'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function CompanyStory() {
  return (
    <motion.section 
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Journey</h2>
            <p className="text-lg text-gray-700 mb-6">
              Vikasa was born from a clear vision: to redefine business consulting by combining strategic insight with practical implementation. 
              Our founder, Jane Smith, recognized that many organizations struggled with the gap between strategy development and execution.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Starting with a small team of experienced consultants, we set out to build a different kind of advisory firm—one that would 
              stay with clients through the entire journey of transformation and capability building.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Today, Vikasa has evolved into a global consultancy with specialized practices in strategy, operations, leadership development, 
              and digital transformation. Our integrated approach ensures we deliver solutions that drive real, measurable impact.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="/contact" className="bg-vikasa-gold hover:bg-vikasa-gold-light text-vikasa-espresso font-semibold px-5 py-2 rounded-md transition-colors">
                Contact Us
              </Link>
              <Link href="/service" className="border border-vikasa-espresso text-vikasa-espresso hover:bg-vikasa-espresso hover:text-white font-semibold px-5 py-2 rounded-md transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="relative h-96 bg-vikasa-latte/30 rounded-lg overflow-hidden"
            variants={staggerItem}
          >
            {/* Replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-vikasa-latte text-lg font-medium">Company Founding Team Image</p>
            </div>
            {/* <Image src="/images/about/founding-team.jpg" alt="Vikasa Founding Team" fill style={{objectFit: "cover"}} /> */}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
