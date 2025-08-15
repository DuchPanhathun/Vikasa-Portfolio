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

export default function SecondaryCTA() {
  return (
    <motion.section 
      className="bg-vikasa-espresso text-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl text-white md:text-4xl font-bold mb-6"
          variants={fadeInUp}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p 
          className="text-xl mb-10 max-w-3xl mx-auto text-white"
          variants={fadeInUp}
        >
          Join hundreds of organizations that have accelerated their growth with our proven methodologies.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Link href="/contact" className="bg-vikasa-gold text-vikasa-espresso hover:bg-white font-bold px-8 py-4 rounded-lg text-lg inline-block transition-colors">
            Schedule a Strategy Call
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
