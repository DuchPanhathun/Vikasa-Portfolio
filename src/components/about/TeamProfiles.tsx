'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { staffService, type Staff } from '@/lib/supabaseService'

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

// Fallback team members when no staff exist
const fallbackTeamMembers = [
  {
    name: "Jane Smith",
    position: "Founder & CEO",
    bio: "With over 25 years of experience in strategic consulting, Jane founded Vikasa with a vision to bridge strategy and execution. Former Partner at McKinsey with MBA from Harvard.",
    image: "/team/jane-smith.jpg",
    linkedin: "https://linkedin.com/in/janesmith"
  },
  {
    name: "Michael Chen",
    position: "Managing Director, Advisory",
    bio: "Michael leads our advisory practice, bringing 18 years of experience in operations and organizational transformation across technology and manufacturing sectors.",
    image: "/team/michael-chen.jpg",
    linkedin: "https://linkedin.com/in/michaelchen"
  },
  {
    name: "Sarah Johnson",
    position: "Director, Vikasa Academy",
    bio: "Sarah heads our education division with deep expertise in leadership development and a background in organizational psychology from Stanford University.",
    image: "/team/sarah-johnson.jpg",
    linkedin: "https://linkedin.com/in/sarahjohnson"
  }
]

export default function TeamProfiles() {
  const [staff, setStaff] = useState<Staff[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const data = await staffService.getAll()
        setStaff(data)
      } catch (error) {
        console.error('Failed to fetch staff:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStaff()
  }, [])

  // Use fetched staff data or fallback data
  const displayMembers = staff.length > 0 ? staff : fallbackTeamMembers
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
          <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Leadership Team</h2>
          <p className="text-lg text-gray-700">
            Meet the experienced professionals who guide our organization and bring their expertise to every client engagement.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vikasa-espresso"></div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {displayMembers.map((member, index) => {
              // Handle both Staff type (from database) and fallback type
              const isRealStaff = 'id' in member
              const teamMember = isRealStaff ? {
                name: member.name,
                position: member.role,
                bio: member.description,
                image: member.image,
                profileUrl: member.profile_url
              } : {
                name: member.name,
                position: member.position,
                bio: member.bio,
                image: member.image,
                profileUrl: member.linkedin
              }

              return (
                <motion.div 
                  key={isRealStaff ? member.id : index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                  variants={staggerItem}
                >
                  <div className="h-64 bg-vikasa-latte-50 relative">
                    {teamMember.image ? (
                      <Image 
                        src={teamMember.image} 
                        alt={teamMember.name} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-vikasa-latte/30 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-10 w-10 text-vikasa-espresso/50" 
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
                          <p className="text-vikasa-latte text-sm font-medium">{teamMember.name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-vikasa-espresso">{teamMember.name}</h3>
                    <p className="text-vikasa-gold font-medium mb-4">{teamMember.position}</p>
                    <p className="text-gray-700 mb-4">{teamMember.bio}</p>
                    {teamMember.profileUrl && (
                      <a 
                        href={teamMember.profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-vikasa-latte hover:text-vikasa-espresso transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        {isRealStaff ? 'View Profile' : 'LinkedIn Profile'}
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Show message when using fallback team members */}
        {staff.length === 0 && !isLoading && (
          <motion.div 
            className="text-center mt-8"
            variants={fadeInUp}
          >
            <p className="text-gray-500 text-sm">
              Add team members in the admin panel to display your actual staff here.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
