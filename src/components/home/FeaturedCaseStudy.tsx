"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { successStoryService, type SuccessStory } from "@/lib/supabaseService";
import { htmlToFormattedText } from "@/utils/htmlToText";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function FeaturedCaseStudy() {
  const [successStory, setSuccessStory] = useState<SuccessStory | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedStory = async () => {
      try {
        const stories = await successStoryService.getAll()
        // Get the most recent success story
        if (stories.length > 0) {
          const sortedStories = stories.sort((a, b) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          )
          setSuccessStory(sortedStories[0])
        }
      } catch (error) {
        console.error('Failed to fetch success stories:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeaturedStory()
  }, [])

  // If loading, show loading state
  if (isLoading) {
    return (
      <section className="bg-vikasa-espresso-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-vikasa-espresso">
            Client Success Story
          </h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vikasa-espresso"></div>
          </div>
        </div>
      </section>
    )
  }

  // If no success story, show fallback content
  if (!successStory) {
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
                <p className="text-center text-gray-500 text-sm">
                  Add success stories in the admin panel to display them here.
                </p>
              </motion.div>
              <motion.div 
                className="bg-vikasa-latte"
                variants={fadeInUp}
              >
                {/* Fallback background */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    )
  }
  // Display the real success story
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
              <div className="inline-block px-4 py-2 bg-vikasa-gold/20 text-vikasa-espresso font-medium rounded-full mb-6">Success Story</div>
              
              {/* Client Information */}
              <div className="mb-4">
                {successStory.client && (
                  <div className="flex items-center space-x-3 mb-4">
                    {successStory.client.profile_image && (
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={successStory.client.profile_image}
                          alt={successStory.client.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-vikasa-espresso">{successStory.client.name}</h4>
                      {successStory.client.position && successStory.client.company && (
                        <p className="text-sm text-gray-600">
                          {successStory.client.position} at {successStory.client.company}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Story Title */}
              <h3 className="text-2xl font-bold mb-6 text-vikasa-espresso">{successStory.title}</h3>
              
              {/* Story Description */}
              <div className="mb-8 text-black leading-relaxed">
                {htmlToFormattedText(successStory.description).split('\n').map((paragraph, index) => (
                  paragraph.trim() ? (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ) : null
                ))}
              </div>

              {/* Call to Action */}
              <div className="flex space-x-4">
                <Link href="/about" className="text-vikasa-latte font-semibold hover:text-vikasa-espresso inline-flex items-center">
                  View More Stories
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="/contact" className="text-vikasa-espresso font-semibold hover:text-vikasa-latte inline-flex items-center border-b border-transparent hover:border-vikasa-latte">
                  Start Your Success Story
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-vikasa-latte relative min-h-[400px]"
              variants={fadeInUp}
            >
              {successStory.image ? (
                <Image
                  src={successStory.image}
                  alt={successStory.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-vikasa-espresso">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <p className="text-lg font-medium opacity-70">Success Story</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
