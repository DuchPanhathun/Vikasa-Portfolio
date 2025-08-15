"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Example blog posts - replace with actual content
const blogPosts = [
  {
    title: "5 Strategies for Digital Transformation Success",
    excerpt: "Learn the key factors that drive successful digital transformation initiatives...",
    image: "/blog1.jpg",
    date: "June 15, 2023",
    slug: "digital-transformation-strategies",
  },
  {
    title: "Building Resilient Teams in Uncertain Times",
    excerpt: "Discover proven methods to develop team resilience and maintain productivity...",
    image: "/blog2.jpg",
    date: "May 22, 2023",
    slug: "resilient-teams",
  },
  {
    title: "The Future of Leadership Development",
    excerpt: "Explore emerging trends in leadership training and development for 2023 and beyond...",
    image: "/blog3.jpg",
    date: "April 10, 2023",
    slug: "future-leadership-development",
  },
];

export default function LatestResourcesSection() {
  return (
    <motion.section 
      className="bg-vikasa-espresso-50 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vikasa-espresso">Latest Resources</h2>
          <Link href="/resources" className="mt-4 md:mt-0 text-vikasa-latte font-semibold hover:text-vikasa-espresso inline-flex items-center">
            View All Resources
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
        >
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={staggerItem}
            >
              <div className="h-48 bg-vikasa-latte/30">
                {/* Blog post image would go here */}
                {/* <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-full object-cover" /> */}
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-vikasa-latte font-semibold hover:text-vikasa-espresso">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-vikasa-espresso text-white rounded-xl p-8 md:p-12"
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
              <p className="mb-0">Get weekly insights on business strategy, leadership, and industry trends.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-5 py-3 rounded-md text-stone-50 focus:outline-none border border-gray-200"
                />
                <button type="submit" className="bg-vikasa-gold hover:bg-vikasa-latte text-vikasa-espresso px-6 py-3 rounded-md transition-colors font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
