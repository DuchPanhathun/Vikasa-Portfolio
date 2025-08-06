"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Blog articles data
const featuredArticles = [
  {
    id: 1,
    title: "The Future of Strategic Leadership in a Digital-First World",
    excerpt: "How business leaders can adapt their strategic approach to thrive in an increasingly digital landscape.",
    category: "Leadership",
    image: "/resources/blog/strategic-leadership.jpg",
    author: {
      name: "Jane Smith",
      role: "CEO & Founder",
      avatar: "/team/jane-smith.jpg"
    },
    date: "June 15, 2023",
    readingTime: "8 min read",
    featured: true,
    slug: "future-strategic-leadership-digital-world"
  },
  {
    id: 2,
    title: "Implementing Agile Methodologies in Traditional Organizations",
    excerpt: "A step-by-step guide to successfully adopting agile practices within established corporate structures.",
    category: "Operations",
    image: "/resources/blog/agile-methodologies.jpg",
    author: {
      name: "Michael Chen",
      role: "Managing Director, Advisory",
      avatar: "/team/michael-chen.jpg"
    },
    date: "May 22, 2023",
    readingTime: "12 min read",
    featured: true,
    slug: "implementing-agile-methodologies-traditional-organizations"
  },
  {
    id: 3,
    title: "Digital Transformation: Beyond the Technology",
    excerpt: "Why successful digital transformation requires equal focus on people, processes, and organizational culture.",
    category: "Digital Transformation",
    image: "/resources/blog/digital-transformation.jpg",
    author: {
      name: "David Rodriguez",
      role: "Head of Digital Transformation",
      avatar: "/team/david-rodriguez.jpg"
    },
    date: "April 10, 2023",
    readingTime: "10 min read",
    featured: true,
    slug: "digital-transformation-beyond-technology"
  }
];

const recentArticles = [
  {
    id: 4,
    title: "Building Resilient Supply Chains in Uncertain Times",
    excerpt: "Strategies for creating adaptable supply chain networks that can withstand global disruptions.",
    category: "Operations",
    image: "/resources/blog/supply-chains.jpg",
    author: {
      name: "Amina Patel",
      role: "Chief Strategy Officer",
      avatar: "/team/amina-patel.jpg"
    },
    date: "July 5, 2023",
    readingTime: "9 min read",
    slug: "resilient-supply-chains-uncertain-times"
  },
  {
    id: 5,
    title: "The ROI of Leadership Development Programs",
    excerpt: "How to measure the tangible and intangible returns of investing in leadership capabilities.",
    category: "Leadership",
    image: "/resources/blog/leadership-development.jpg",
    author: {
      name: "Sarah Johnson",
      role: "Director, Vikasa Academy",
      avatar: "/team/sarah-johnson.jpg"
    },
    date: "July 1, 2023",
    readingTime: "7 min read",
    slug: "roi-leadership-development-programs"
  },
  {
    id: 6,
    title: "Ethical AI Implementation in Business Processes",
    excerpt: "Frameworks for ensuring artificial intelligence applications align with ethical standards and organizational values.",
    category: "Technology",
    image: "/resources/blog/ethical-ai.jpg",
    author: {
      name: "David Rodriguez",
      role: "Head of Digital Transformation",
      avatar: "/team/david-rodriguez.jpg"
    },
    date: "June 28, 2023",
    readingTime: "11 min read",
    slug: "ethical-ai-implementation-business"
  },
  {
    id: 7,
    title: "Sustainable Business Models for Long-Term Growth",
    excerpt: "Exploring how sustainability initiatives can drive innovation and create competitive advantage.",
    category: "Strategy",
    image: "/resources/blog/sustainable-business.jpg",
    author: {
      name: "Jane Smith",
      role: "CEO & Founder",
      avatar: "/team/jane-smith.jpg"
    },
    date: "June 20, 2023",
    readingTime: "8 min read",
    slug: "sustainable-business-models-growth"
  }
];

// Resource categories
const resourceCategories = [
  { name: "All Resources", count: 127, icon: "📚", slug: "all" },
  { name: "Leadership", count: 42, icon: "👥", slug: "leadership" },
  { name: "Strategy", count: 35, icon: "🎯", slug: "strategy" },
  { name: "Operations", count: 28, icon: "⚙️", slug: "operations" },
  { name: "Digital Transformation", count: 32, icon: "💻", slug: "digital-transformation" },
  { name: "Talent Management", count: 19, icon: "🌟", slug: "talent-management" },
  { name: "Financial Excellence", count: 15, icon: "📊", slug: "financial-excellence" },
  { name: "Innovation", count: 24, icon: "💡", slug: "innovation" }
];

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
];


export default function Resources() {
  return (
    <main className="font-montserrat">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-vikasa-espresso to-vikasa-latte py-20"
        initial={fadeIn.initial}
        whileInView={fadeIn.whileInView}
        transition={fadeIn.transition}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            transition={fadeInUp.transition}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resource Center</h1>
            <p className="text-xl mb-10">
              Insights, tools and expertise to help your organization thrive in today&apos;s complex business environment.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for resources by keyword" 
                className="w-full py-4 px-6 rounded-full text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-vikasa-gold placeholder-gray-400 placeholder-opacity-75 focus:placeholder-vikasa-latte"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-vikasa-gold hover:bg-vikasa-gold-dark text-white p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Resource Navigation */}
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
            <motion.div variants={staggerItem}>
              <Link href="/resource/tools" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-vikasa-espresso font-semibold">Free Tools & Templates</span>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link href="/resource/webinars" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-vikasa-espresso font-semibold">Webinars & Videos</span>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link href="/resource/ebooks" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-vikasa-espresso font-semibold">E-Books & Guides</span>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link href="/resource/library" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-vikasa-espresso font-semibold">Resource Library</span>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link href="/resource/newsletter" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-vikasa-espresso font-semibold">Newsletter Archive</span>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link href="/resource/community" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-vikasa-espresso font-semibold">Community Forum</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* 1. Blog/Articles Section */}
      <motion.section 
        className="py-16 bg-vikasa-gold-50"
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
            <h2 className="text-3xl font-bold text-vikasa-espresso">Latest Insights & Articles</h2>
            <Link href="/resource/blog" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold flex items-center">
              View All Articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
          
          {/* Featured Articles */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={staggerContainer.initial}
            whileInView={staggerContainer.whileInView}
            viewport={{ once: true }}
          >
            {featuredArticles.map((article) => (
              <motion.div key={article.id} variants={staggerItem}>
                <Link href={`/resource/blog/${article.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all group-hover:shadow-lg">
                  <div className="h-48 bg-vikasa-latte-50 relative">
                    {/* Replace with actual image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-vikasa-latte text-lg font-medium">Article Image</p>
                    </div>
                    {/* <Image src={article.image} alt={article.title} fill style={{objectFit: "cover"}} /> */}
                    <div className="absolute top-4 left-4 bg-vikasa-gold text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-vikasa-espresso group-hover:text-vikasa-latte transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-5 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-vikasa-latte-50 mr-3">
                          {/* <Image src={article.author.avatar} alt={article.author.name} width={40} height={40} className="rounded-full" /> */}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-vikasa-espresso">{article.author.name}</p>
                          <p className="text-xs text-gray-500">{article.date}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{article.readingTime}</span>
                    </div>
                  </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>          {/* Recent Articles */}
          <motion.div 
            className="mb-12"
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            transition={fadeIn.transition}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-vikasa-espresso">Recent Articles</h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={staggerContainer.initial}
              whileInView={staggerContainer.whileInView}
              viewport={{ once: true }}
            >
              {recentArticles.map((article) => (
                <motion.div key={article.id} variants={staggerItem}>
                  <Link href={`/resource/blog/${article.slug}`} className="group">
                  <div className="flex bg-white rounded-lg shadow-sm overflow-hidden transition-all group-hover:shadow-md">
                    <div className="w-1/3 bg-vikasa-latte-50 relative">
                      {/* Replace with actual image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-vikasa-latte text-sm font-medium">Image</p>
                      </div>
                      {/* <Image src={article.image} alt={article.title} fill style={{objectFit: "cover"}} /> */}
                    </div>
                    <div className="w-2/3 p-5">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-vikasa-espresso-50 text-vikasa-espresso text-xs font-semibold px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readingTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-vikasa-espresso group-hover:text-vikasa-latte transition-colors line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center text-xs">
                        <p className="text-gray-500">By <span className="text-vikasa-espresso font-semibold">{article.author.name}</span></p>
                        <span className="mx-2">•</span>
                        <p className="text-gray-500">{article.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Topics/Categories */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            transition={fadeIn.transition}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-vikasa-espresso">Browse by Topic</h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={staggerContainer.initial}
              whileInView={staggerContainer.whileInView}
              viewport={{ once: true }}
            >
              {resourceCategories.map((category) => (
                <motion.div key={category.slug} variants={staggerItem}>
                  <Link href={`/resource/blog/category/${category.slug}`} className="group">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center transition-all hover:shadow-md hover:border-vikasa-gold-light">
                      <div className="text-2xl mb-2">{category.icon}</div>
                      <h4 className="font-semibold text-vikasa-espresso group-hover:text-vikasa-latte transition-colors">{category.name}</h4>
                      <p className="text-sm text-gray-500">{category.count} articles</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* 2. White Papers & Research Section */}
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
      </motion.section>      {/* Footer CTA */}
            
      {/* Footer CTA */}
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
    </main>
  );
}
