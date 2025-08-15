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

// White papers data
const whitePapers = [
  {
    id: 1,
    title: "The State of Digital Transformation in Financial Services 2023",
    excerpt: "Comprehensive analysis of digital adoption trends, challenges, and opportunities in the financial services sector.",
    image: "/resources/whitepapers/financial-digital-transformation.jpg",
    category: "Digital Transformation",
    publishDate: "July 2023",
    pages: 48,
    slug: "financial-services-digital-transformation-2023"
  },
  {
    id: 2,
    title: "Building High-Performance Teams in Hybrid Work Environments",
    excerpt: "Research-backed strategies for developing effective teams in the era of distributed and hybrid working arrangements.",
    image: "/resources/whitepapers/hybrid-teams.jpg",
    category: "Leadership",
    publishDate: "May 2023",
    pages: 36,
    slug: "high-performance-teams-hybrid-work"
  },
  {
    id: 3,
    title: "Supply Chain Resilience: Lessons from Global Disruptions",
    excerpt: "Analysis of how leading organizations have adapted their supply chains to manage increasing volatility and uncertainty.",
    image: "/resources/whitepapers/supply-chain.jpg",
    category: "Operations",
    publishDate: "April 2023",
    pages: 42,
    slug: "supply-chain-resilience-lessons"
  }
]

export default function WhitePapersSection() {
  return (
    <motion.section 
      className="py-16 bg-vikasa-espresso-50"
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      transition={fadeIn.transition}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex justify-between items-center mb-12"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-vikasa-espresso">White Papers & Research</h2>
          <Link href="/resource/whitepapers" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold flex items-center">
            View All White Papers
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={staggerContainer.initial}
          whileInView={staggerContainer.whileInView}
          viewport={{ once: true }}
        >
          {whitePapers.map((paper) => (
            <motion.div key={paper.id} variants={staggerItem}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-vikasa-latte-50 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-vikasa-latte text-lg font-medium">White Paper Cover</p>
                </div>
                {/* <Image src={paper.image} alt={paper.title} fill style={{objectFit: "cover"}} /> */}
                <div className="absolute top-4 left-4 bg-vikasa-latte text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {paper.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{paper.title}</h3>
                <p className="text-gray-600 mb-5">{paper.excerpt}</p>
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {paper.publishDate}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    {paper.pages} pages
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Link href={`/resource/whitepapers/${paper.slug}`} className="text-vikasa-latte hover:text-vikasa-espresso font-semibold text-sm">
                    View Summary
                  </Link>
                  <button className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </button>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
