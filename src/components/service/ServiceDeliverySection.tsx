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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ServiceDeliverySection() {
  return (
    <motion.section 
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-vikasa-espresso"
            variants={fadeInUp}
          >
            Our Service Delivery Approach
          </motion.h2>
          
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center"
              variants={staggerItem}
            >
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-vikasa-espresso text-white flex items-center justify-center text-2xl font-bold">1</div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-vikasa-espresso">Discovery & Assessment</h3>
                <p className="text-gray-600">
                  We begin with a comprehensive analysis of your current situation, challenges, and objectives to develop a clear understanding of your needs.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center"
              variants={staggerItem}
            >
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-vikasa-latte text-white flex items-center justify-center text-2xl font-bold">2</div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-vikasa-espresso">Strategic Planning</h3>
                <p className="text-gray-600">
                  Our team develops a tailored solution and implementation roadmap designed to address your specific challenges and achieve your goals.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center"
              variants={staggerItem}
            >
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-vikasa-gold text-vikasa-espresso flex items-center justify-center text-2xl font-bold">3</div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-vikasa-espresso">Implementation & Support</h3>
                <p className="text-gray-600">
                  We work collaboratively with your team to implement solutions, providing guidance, training, and support throughout the process.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center"
              variants={staggerItem}
            >
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-vikasa-espresso text-white flex items-center justify-center text-2xl font-bold">4</div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-vikasa-espresso">Measurement & Optimization</h3>
                <p className="text-gray-600">
                  We track progress against key metrics, making adjustments as needed to ensure optimal results and sustained success.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
