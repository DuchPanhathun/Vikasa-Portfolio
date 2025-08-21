"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { feedbackService, type Feedback } from "@/lib/supabaseService";

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

export default function TestimonialsSection() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const data = await feedbackService.getAll()
        // Sort by rating (highest first) and then by creation date (newest first)
        const sortedFeedbacks = data.sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating
          }
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        })
        // Take only the top 6 feedbacks for display
        setFeedbacks(sortedFeedbacks.slice(0, 6))
      } catch (error) {
        console.error('Failed to fetch feedbacks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeedbacks()
  }, [])

  // Loading state
  if (isLoading) {
    return (
      <section className="py-20 bg-vikasa-gold-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-vikasa-espresso">
            What Our Clients Say
          </h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vikasa-espresso"></div>
          </div>
        </div>
      </section>
    )
  }

  // Fallback testimonials when no feedbacks exist
  const fallbackTestimonials = [
    {
      quote: "Vikasa helped us transform our business strategy and increase revenue by 45% in just six months.",
      author: "Jane Smith",
      position: "CEO",
      company: "Tech Innovators",
      rating: 5,
    },
    {
      quote: "The academy programs provided our team with invaluable skills that immediately improved our operational efficiency.",
      author: "John Davis",
      position: "Operations Director",
      company: "Global Solutions Inc.",
      rating: 5,
    },
    {
      quote: "Working with Vikasa was a game-changer for our startup. Their strategic guidance was exactly what we needed.",
      author: "Sarah Johnson",
      position: "Founder",
      company: "Innovate Labs",
      rating: 5,
    },
  ]

  const displayTestimonials = feedbacks.length > 0 ? feedbacks : fallbackTestimonials
  return (
    <motion.section 
      className="py-20 bg-vikasa-gold-50"
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
          What Our Clients Say
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {displayTestimonials.map((item, index) => {
            // Handle both Feedback type (from database) and fallback testimonial type
            const isRealFeedback = 'client' in item
            
            if (isRealFeedback) {
              // Transform Feedback to testimonial format
              const feedback = item as Feedback
              return (
                <motion.div 
                  key={feedback.id} 
                  className="bg-white p-8 rounded-lg shadow-lg"
                  variants={staggerItem}
                >
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${i < feedback.rating ? 'text-vikasa-gold' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-6">
                    "{feedback.feedback}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-vikasa-latte/30 mr-4 flex items-center justify-center overflow-hidden">
                      {feedback.client?.profile_image ? (
                        <Image 
                          src={feedback.client.profile_image} 
                          alt={feedback.client.name || 'Client'} 
                          width={48} 
                          height={48} 
                          className="rounded-full object-cover w-full h-full" 
                        />
                      ) : (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-6 w-6 text-vikasa-espresso/50" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-vikasa-espresso">
                        {feedback.client?.name || 'Anonymous Client'}
                      </h4>
                      <p className="text-sm text-vikasa-latte">
                        {feedback.client?.position && feedback.client?.company 
                          ? `${feedback.client.position}, ${feedback.client.company}`
                          : feedback.client?.position || feedback.client?.company || 'Valued Client'
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            } else {
              // Render fallback testimonial
              const testimonial = item as {
                quote: string
                author: string
                position: string
                company: string
                rating: number
              }
              
              return (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-lg"
                  variants={staggerItem}
                >
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-vikasa-gold' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-vikasa-latte/30 mr-4 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-vikasa-espresso/50" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-vikasa-espresso">{testimonial.author}</h4>
                      <p className="text-sm text-vikasa-latte">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            }
          })}
        </motion.div>

        {/* Show message when using fallback testimonials */}
        {feedbacks.length === 0 && (
          <motion.div 
            className="text-center mt-8"
            variants={fadeInUp}
          >
            <p className="text-gray-500 text-sm">
              Add client feedbacks in the admin panel to display real testimonials here.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
