"use client";

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

// Example client logos - replace with actual images
const clientLogos = [
  { name: "Microsoft", logo: "/logos/microsoft.svg", type: "client" },
  { name: "Google", logo: "/logos/google.svg", type: "client" },
  { name: "Amazon", logo: "/logos/amazon.svg", type: "client" },
  { name: "IBM", logo: "/logos/ibm.svg", type: "client" },
  { name: "Salesforce", logo: "/logos/salesforce.svg", type: "client" },
  { name: "Oracle", logo: "/logos/oracle.svg", type: "client" },
];

// Add awards and certifications
const awardsAndCertifications = [
  { name: "Forbes Top Consultants", logo: "/logos/forbes.svg", type: "award" },
  { name: "ISO 9001 Certified", logo: "/logos/iso.svg", type: "certification" },
  { name: "PMP Certified Consultants", logo: "/logos/pmp.svg", type: "certification" },
  { name: "SHRM Certified", logo: "/logos/shrm.svg", type: "certification" },
];

export default function TrustSignalsSection() {
  return (
    <motion.section 
      className="py-16 bg-vikasa-gold-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4 text-vikasa-espresso">Trusted By Industry Leaders</h2>
          <p className="text-lg text-gray-600">Join the ranks of elite organizations that rely on our expertise</p>
        </motion.div>
        
        {/* Client logos */}
        <motion.div 
          className="mb-12"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold mb-8 text-center text-vikasa-latte">Our Clients</h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
            variants={staggerContainer}
          >
            {clientLogos.map((client, index) => (
              <motion.div 
                key={index} 
                className="grayscale hover:grayscale-0 transition-all duration-300"
                variants={staggerItem}
              >
                <div className="h-20 w-40 bg-white flex items-center justify-center rounded shadow-sm border border-gray-200 hover:border-vikasa-gold hover:shadow-md transition-all duration-300">
                  {/* Replace with actual logos when available */}
                  {/* <Image src={client.logo} alt={client.name} width={120} height={60} /> */}
                  <span className="text-gray-500 font-medium">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Awards and certifications */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-xl font-semibold mb-8 text-center text-vikasa-latte">Awards & Certifications</h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
            variants={staggerContainer}
          >
            {awardsAndCertifications.map((item, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={staggerItem}
              >
                <div className="h-24 w-48 bg-white flex flex-col items-center justify-center rounded-lg shadow-sm border border-gray-200 hover:border-vikasa-gold hover:shadow-md transition-all duration-300 p-4">
                  {/* Replace with actual logos when available */}
                  {/* <Image src={item.logo} alt={item.name} width={60} height={60} className="mb-2" /> */}
                  <div className="w-12 h-12 rounded-full bg-vikasa-gold/20 flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-center text-sm">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center"
            variants={staggerItem}
          >
            <div className="w-14 h-14 rounded-full bg-vikasa-gold/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 text-vikasa-espresso">Data Security</h4>
            <p className="text-gray-600">Enterprise-grade security protocols and compliance with industry standards</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center"
            variants={staggerItem}
          >
            <div className="w-14 h-14 rounded-full bg-vikasa-gold/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 text-vikasa-espresso">100% Satisfaction</h4>
            <p className="text-gray-600">Our commitment to excellence and client satisfaction guarantee</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center"
            variants={staggerItem}
          >
            <div className="w-14 h-14 rounded-full bg-vikasa-gold/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 text-vikasa-espresso">Expert Team</h4>
            <p className="text-gray-600">Industry veterans with proven track records of success</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
