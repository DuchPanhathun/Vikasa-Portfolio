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

// Example testimonials - replace with actual testimonials
const testimonials = [
  {
    quote: "Vikasa helped us transform our business strategy and increase revenue by 45% in just six months.",
    author: "Jane Smith",
    position: "CEO, Tech Innovators",
    company: "Tech Innovators",
    image: "/testimonial1.jpg",
    rating: 5,
  },
  {
    quote: "The academy programs provided our team with invaluable skills that immediately improved our operational efficiency.",
    author: "John Davis",
    position: "Operations Director",
    company: "Global Solutions Inc.",
    image: "/testimonial2.jpg",
    rating: 5,
  },
  {
    quote: "Working with Vikasa was a game-changer for our startup. Their strategic guidance was exactly what we needed.",
    author: "Sarah Johnson",
    position: "Founder",
    company: "Innovate Labs",
    image: "/testimonial3.jpg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
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
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={staggerItem}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-6">{testimonial.quote}</blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-vikasa-latte/30 mr-4">
                  {/* Testimonial image would go here */}
                  {/* <Image src={testimonial.image} alt={testimonial.author} width={48} height={48} className="rounded-full" /> */}
                </div>
                <div>
                  <h4 className="font-bold text-vikasa-espresso">{testimonial.author}</h4>
                  <p className="text-sm text-vikasa-latte">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
