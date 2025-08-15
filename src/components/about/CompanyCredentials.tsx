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

const credentials = [
  {
    category: "Certifications",
    items: [
      "ISO 9001:2015 Certified",
      "PMI Registered Education Provider",
      "ICF Accredited Coach Training Program",
      "SHRM Certified Professional Development"
    ]
  },
  {
    category: "Partnerships",
    items: [
      "World Economic Forum Partner",
      "Harvard Business School Executive Education",
      "MIT Sloan Management School Affiliate",
      "Global Leadership Network Member"
    ]
  },
  {
    category: "Awards",
    items: [
      "Forbes Top 50 Consulting Firms (2022)",
      "Brandon Hall Excellence in Leadership Development",
      "Training Industry Top 20 Leadership Training Provider",
      "Global Business Excellence Award"
    ]
  },
  {
    category: "Memberships",
    items: [
      "International Coach Federation",
      "Association for Talent Development",
      "Society for Human Resource Management",
      "Digital Transformation Alliance"
    ]
  }
]

export default function CompanyCredentials() {
  return (
    <motion.section 
      className="py-16 bg-vikasa-espresso-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Credentials</h2>
          <p className="text-lg text-gray-700">
            Vikasa maintains the highest standards of professional excellence through industry certifications, partnerships, and recognitions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {credentials.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={staggerItem}
            >
              <h3 className="text-xl font-bold mb-6 text-vikasa-espresso border-b border-vikasa-gold pb-2">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
