"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { bannerService, type Banner } from "@/lib/supabaseService";

// Animation variants for fade-in effects
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function HeroSection() {
  const [banners, setBanners] = useState<Banner[]>([])
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await bannerService.getAll()
        setBanners(data)
      } catch (error) {
        console.error('Failed to fetch banners:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBanners()
  }, [])

  // Auto-rotate banners every 5 seconds if there are multiple
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentBannerIndex((prevIndex) => 
          (prevIndex + 1) % banners.length
        )
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [banners.length])

  // Default fallback content
  const defaultBanner = {
    title: "Transforming Businesses Through Expert Guidance",
    description: "Comprehensive advisory services and specialized training programs to elevate your organization's performance.",
    background_image: null
  }

  const currentBanner = banners.length > 0 ? banners[currentBannerIndex] : defaultBanner

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-vikasa-espresso to-vikasa-latte">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    )
  }
  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-vikasa-espresso to-vikasa-latte text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Background Image */}
      {currentBanner.background_image && (
        <div className="absolute inset-0">
          <Image 
            src={currentBanner.background_image} 
            alt={currentBanner.title}
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vikasa-espresso/60 to-vikasa-latte/60"></div>
        </div>
      )}
      
      {!currentBanner.background_image && (
        <div className="absolute inset-0 opacity-20">
          {/* Fallback gradient background */}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          key={`title-${currentBannerIndex}`}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {currentBanner.title}
        </motion.h1>
        <motion.p 
          key={`description-${currentBannerIndex}`}
          className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {currentBanner.description}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          variants={fadeInUp}
        >
          <Link href="/contact" className="bg-vikasa-gold hover:bg-vikasa-latte text-vikasa-espresso font-semibold px-6 sm:px-8 py-3 rounded-md transition-colors text-base sm:text-lg w-full sm:w-auto text-center">
            Book a Consultation
          </Link>
          <Link href="/resource" className="bg-white hover:bg-gray-100 text-vikasa-espresso font-semibold px-6 sm:px-8 py-3 rounded-md transition-colors text-base sm:text-lg w-full sm:w-auto text-center">
            Explore Courses
          </Link>
        </motion.div>

        {/* Banner Indicators */}
        {banners.length > 1 && (
          <motion.div 
            className="flex justify-center space-x-2 mt-8"
            variants={fadeInUp}
          >
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentBannerIndex 
                    ? 'bg-vikasa-gold' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
