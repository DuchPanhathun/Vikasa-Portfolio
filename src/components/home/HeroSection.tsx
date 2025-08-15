"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-vikasa-espresso to-vikasa-latte text-white"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="absolute inset-0 opacity-20">
        {/* Background image would go here */}
        {/* <Image src="/hero-bg.jpg" alt="Background" fill style={{objectFit: "cover"}} /> */}
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
          variants={fadeInUp}
        >
          Transforming Businesses Through Expert Guidance
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
          variants={fadeInUp}
        >
          Comprehensive advisory services and specialized training programs to elevate your organization&apos;s performance.
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
      </div>
    </motion.section>
  );
}
