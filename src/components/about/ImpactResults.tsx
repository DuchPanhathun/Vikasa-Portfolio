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

const impactMetrics = [
  { number: "500+", label: "Clients Served", description: "Organizations transformed across 6 continents" },
  { number: "15,000+", label: "Professionals Trained", description: "Through our executive education programs" },
  { number: "92%", label: "Client Retention", description: "Partners who continue working with us year after year" },
  { number: "$2.5B+", label: "Client Value Created", description: "Measurable revenue and efficiency impact" }
]

export default function ImpactResults() {
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
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Impact</h2>
          <p className="text-lg text-gray-700">
            We measure our success through the tangible results we deliver and the lasting difference we make for our clients.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
        >
          {impactMetrics.map((metric, index) => (
            <motion.div 
              key={index} 
              className="bg-vikasa-espresso-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              variants={staggerItem}
            >
              <div className="text-4xl font-bold text-vikasa-gold mb-2">{metric.number}</div>
              <h3 className="text-xl font-bold text-vikasa-espresso mb-2">{metric.label}</h3>
              <p className="text-gray-700">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Social Impact */}
        <motion.div 
          className="bg-vikasa-gold-light p-8 rounded-lg"
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-vikasa-espresso">Social Impact Initiatives</h3>
              <p className="text-gray-800 mb-4">
                Beyond our client work, Vikasa is committed to creating positive social impact through:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-vikasa-espresso/10 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-espresso" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800"><strong>Pro Bono Consulting:</strong> Annual commitment of 1,000+ hours to nonprofit and social enterprises</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vikasa-espresso/10 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-espresso" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800"><strong>Leadership Scholarships:</strong> Funding for underrepresented leaders to access our training programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vikasa-espresso/10 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-espresso" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800"><strong>Sustainability Initiatives:</strong> Carbon-neutral operations and environmental consulting practice</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 bg-vikasa-gold-50 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-vikasa-gold-dark text-lg font-medium">Social Impact Image</p>
              </div>
              {/* <Image src="/images/about/social-impact.jpg" alt="Social Impact Initiatives" fill style={{objectFit: "cover"}} /> */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
