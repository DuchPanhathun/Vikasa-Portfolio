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

export default function CompanyCulture() {
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
          <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Culture</h2>
          <p className="text-lg text-gray-700">
            The Vikasa work environment is built on collaboration, continuous learning, and meaningful connection.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
        >
          <motion.div 
            className="relative h-64 bg-vikasa-latte-100 rounded-lg overflow-hidden"
            variants={staggerItem}
          >
            {/* Replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-vikasa-latte text-lg font-medium">Team Collaboration</p>
            </div>
            {/* <Image src="/images/about/culture-1.jpg" alt="Team Collaboration" fill style={{objectFit: "cover"}} /> */}
          </motion.div>
          <motion.div 
            className="relative h-64 bg-vikasa-latte-100 rounded-lg overflow-hidden"
            variants={staggerItem}
          >
            {/* Replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-vikasa-latte text-lg font-medium">Office Environment</p>
            </div>
            {/* <Image src="/images/about/culture-2.jpg" alt="Office Environment" fill style={{objectFit: "cover"}} /> */}
          </motion.div>
          <motion.div 
            className="relative h-64 bg-vikasa-latte-100 rounded-lg overflow-hidden"
            variants={staggerItem}
          >
            {/* Replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-vikasa-latte text-lg font-medium">Team Building</p>
            </div>
            {/* <Image src="/images/about/culture-3.jpg" alt="Team Building" fill style={{objectFit: "cover"}} /> */}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-md"
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-vikasa-espresso">Life at Vikasa</h3>
              <p className="text-gray-700 mb-4">
                Our workplace culture emphasizes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong>Continuous Learning:</strong> Regular knowledge sharing sessions, learning allowances, and development opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong>Collaborative Leadership:</strong> Flat hierarchy that encourages diverse perspectives and idea sharing</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong>Work-Life Integration:</strong> Flexible arrangements that support both exceptional client service and personal well-being</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong>Team Connection:</strong> Regular team events, retreats, and celebrations that strengthen our community</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <div className="bg-vikasa-latte-50 h-full flex items-center justify-center">
                <p className="text-vikasa-latte text-lg font-medium">Video: Life at Vikasa</p>
              </div>
              {/* Replace with actual video embed
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="Life at Vikasa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
