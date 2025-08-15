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
]

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
]

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
]

export default function BlogArticlesSection() {
  return (
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
        </motion.div>
        
        {/* Recent Articles */}
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
  )
}
