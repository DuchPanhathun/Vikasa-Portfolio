'use client'

import { motion } from 'framer-motion'

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

const teamMembers = [
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
  },
  {
    name: "David Rodriguez",
    position: "Head of Digital Transformation",
    bio: "David brings 15+ years of technology leadership experience, specializing in guiding organizations through complex digital transformations and innovation initiatives.",
    image: "/team/david-rodriguez.jpg",
    linkedin: "https://linkedin.com/in/davidrodriguez"
  },
  {
    name: "Amina Patel",
    position: "Chief Strategy Officer",
    bio: "Former tech executive with expertise in market expansion and strategic growth. MBA from INSEAD with a focus on emerging markets and sustainable business models.",
    image: "/team/amina-patel.jpg",
    linkedin: "https://linkedin.com/in/aminapatel"
  },
  {
    name: "Thomas Wilson",
    position: "Senior Leadership Coach",
    bio: "Executive coach with background in psychology and 20+ years working with C-suite leaders across industries on leadership effectiveness and team dynamics.",
    image: "/team/thomas-wilson.jpg",
    linkedin: "https://linkedin.com/in/thomaswilson"
  }
]

export default function TeamProfiles() {
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
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              variants={staggerItem}
            >
              <div className="h-64 bg-vikasa-latte-50 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-vikasa-latte text-lg font-medium">{member.name}</p>
                </div>
                {/* <Image src={member.image} alt={member.name} fill style={{objectFit: "cover"}} /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vikasa-espresso">{member.name}</h3>
                <p className="text-vikasa-gold font-medium mb-4">{member.position}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-vikasa-latte hover:text-vikasa-espresso"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
