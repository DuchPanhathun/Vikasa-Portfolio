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

export default function FeaturedCaseStudy() {
  return (
    <motion.section 
      className="bg-vikasa-espresso-50 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-vikasa-espresso"
          variants={fadeInUp}
        >
          Client Success Story
        </motion.h2>
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div 
              className="p-8 lg:p-12 flex flex-col justify-center"
              variants={fadeInUp}
            >
              <div className="inline-block px-4 py-2 bg-vikasa-gold/20 text-vikasa-espresso font-medium rounded-full mb-6">Case Study</div>
              <h3 className="text-2xl font-bold mb-4 text-vikasa-espresso">Global Tech Enterprise</h3>
              <p className="text-lg text-black mb-6 font-medium">Challenge: Outdated systems and processes causing operational inefficiencies and declining market share.</p>
              <p className="mb-6 text-black">We implemented a comprehensive digital transformation strategy, modernizing core systems while training staff on new technologies.</p>
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-3 text-vikasa-espresso">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">42% increase in operational efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">28% revenue growth within 12 months</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">65% improvement in employee satisfaction</span>
                  </li>
                </ul>
              </div>
              <Link href="/case-studies" className="text-vikasa-latte font-semibold hover:text-vikasa-espresso inline-flex items-center">
                Read Full Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
            <motion.div 
              className="bg-vikasa-latte"
              variants={fadeInUp}
            >
              {/* Case study image would go here */}
              {/* <Image src="/case-study.jpg" alt="Case Study" width={600} height={800} className="w-full h-full object-cover" /> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
