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

interface ServicesContentProps {
  activeTab: string
}

export default function ServicesContent({ activeTab }: ServicesContentProps) {
  return (
    <motion.section 
      className="py-16"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-vikasa-espresso"
          variants={fadeInUp}
        >
          {activeTab === 'all' && 'Our Complete Service Offerings'}
          {activeTab === 'advisory' && 'Advisory Services'}
          {activeTab === 'academy' && 'Academy Programs'}
          {activeTab === 'implementation' && 'Implementation Services'}
        </motion.h2>
        
        {/* Advisory Services */}
        {(activeTab === 'all' || activeTab === 'advisory') && (
          <motion.div 
            key={`advisory-${activeTab}`}
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {activeTab === 'all' && (
              <h3 className="text-2xl font-bold mb-6 text-vikasa-latte">Advisory Services</h3>
            )}
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Business Strategy Card */}
              <motion.div 
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md"
                variants={staggerItem}
              >
                <div className="h-3 bg-vikasa-espresso"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-vikasa-espresso/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vikasa-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-vikasa-espresso">Business Strategy Consulting</h4>
                  <p className="text-black mb-4">
                    Develop a clear roadmap for sustainable growth and competitive advantage in your market.
                  </p>
                  
                  <h5 className="text-sm font-bold text-vikasa-gold mb-2">KEY BENEFITS</h5>
                  <ul className="space-y-1 mb-4 text-sm">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Clear strategic direction</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Competitive market positioning</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Measurable business objectives</span>
                    </li>
                  </ul>
                  
                  <h5 className="text-sm font-bold text-vikasa-gold mb-2">EXAMPLE OUTCOME</h5>
                  <p className="text-sm text-black italic mb-4">
                    &quot;Achieved 35% revenue growth within 12 months through strategic market repositioning and customer segmentation.&quot;
                  </p>
                  
                  <Link href="/contact" className="text-vikasa-espresso hover:text-vikasa-latte font-medium text-sm inline-flex items-center transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
              
              {/* Process Optimization Card */}
              <motion.div 
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md"
                variants={staggerItem}
              >
                <div className="h-3 bg-vikasa-latte"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-vikasa-latte/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vikasa-latte" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-vikasa-espresso">Process Optimization</h4>
                  <p className="text-black mb-4">
                    Streamline operations, eliminate inefficiencies, and implement best practices across your organization.
                  </p>
                  
                  <h5 className="text-sm font-bold text-vikasa-gold mb-2">KEY BENEFITS</h5>
                  <ul className="space-y-1 mb-4 text-sm">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Increased operational efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Reduced operational costs</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Improved quality and consistency</span>
                    </li>
                  </ul>
                  
                  <h5 className="text-sm font-bold text-vikasa-gold mb-2">EXAMPLE OUTCOME</h5>
                  <p className="text-sm text-black italic mb-4">
                    &quot;Reduced processing time by 42% and operational costs by 28% through workflow optimization and automation.&quot;
                  </p>
                  
                  <Link href="/contact" className="text-vikasa-espresso hover:text-vikasa-latte font-medium text-sm inline-flex items-center transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
              
              {/* Digital Transformation Card */}
              <motion.div 
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md"
                variants={staggerItem}
              >
                <div className="h-3 bg-vikasa-gold"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-vikasa-gold/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-vikasa-espresso">Digital Transformation</h4>
                  <p className="text-black mb-4">
                    Leverage technology to reimagine your business model, customer experience, and operational processes.
                  </p>
                  
                  <h5 className="text-sm font-bold text-vikasa-gold mb-2">KEY BENEFITS</h5>
                  <ul className="space-y-1 mb-4 text-sm">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Enhanced digital capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Improved customer experiences</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Data-driven decision making</span>
                    </li>
                  </ul>
                  
                  <h5 className="text-sm font-bold text-vikasa-gold mb-2">EXAMPLE OUTCOME</h5>
                  <p className="text-sm text-gray-600 italic mb-4">
                    &quot;Increased digital sales by 156% and customer satisfaction by 48% through implementation of new digital channels and systems.&quot;
                  </p>
                  
                  <Link href="/contact" className="text-vikasa-espresso hover:text-vikasa-latte font-medium text-sm inline-flex items-center transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Academy Programs */}
        {(activeTab === 'all' || activeTab === 'academy') && (
          <motion.div 
            key={`academy-${activeTab}`}
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {activeTab === 'all' && (
              <h3 className="text-2xl font-bold mb-6 text-vikasa-gold">Academy Programs</h3>
            )}
            
            <div className="p-12 bg-white rounded-lg shadow-sm text-center">
              <p className="text-lg text-gray-600">
                Academy Program details will be added in the next implementation phase.
              </p>
            </div>
          </motion.div>
        )}

        {/* Implementation Services */}
        {(activeTab === 'all' || activeTab === 'implementation') && (
          <motion.div 
            key={`implementation-${activeTab}`}
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {activeTab === 'all' && (
              <h3 className="text-2xl font-bold mb-6 text-vikasa-latte">Implementation Services</h3>
            )}
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Project Management Card */}
              <motion.div 
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md"
                variants={staggerItem}
              >
                <div className="h-3 bg-vikasa-latte"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-vikasa-latte/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vikasa-latte" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-vikasa-espresso">Project Management Excellence</h4>
                  <p className="text-black mb-4">
                    Comprehensive project oversight ensuring on-time, on-budget delivery of strategic initiatives with measurable outcomes.
                  </p>
                  
                  <h5 className="text-sm font-bold text-vikasa-gold mb-2">KEY BENEFITS</h5>
                  <ul className="space-y-1 mb-4 text-sm">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Structured project delivery</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Risk mitigation strategies</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">Stakeholder alignment</span>
                    </li>
                  </ul>
                  
                  <Link href="/contact" className="text-vikasa-espresso hover:text-vikasa-latte font-medium text-sm inline-flex items-center transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
