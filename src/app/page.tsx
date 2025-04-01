import Link from "next/link";
import Image from "next/image";

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

// Example blog posts - replace with actual content
const blogPosts = [
  {
    title: "5 Strategies for Digital Transformation Success",
    excerpt: "Learn the key factors that drive successful digital transformation initiatives...",
    image: "/blog1.jpg",
    date: "June 15, 2023",
    slug: "digital-transformation-strategies",
  },
  {
    title: "Building Resilient Teams in Uncertain Times",
    excerpt: "Discover proven methods to develop team resilience and maintain productivity...",
    image: "/blog2.jpg",
    date: "May 22, 2023",
    slug: "resilient-teams",
  },
  {
    title: "The Future of Leadership Development",
    excerpt: "Explore emerging trends in leadership training and development for 2023 and beyond...",
    image: "/blog3.jpg",
    date: "April 10, 2023",
    slug: "future-leadership-development",
  },
];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-vikasa-espresso to-vikasa-latte text-white">
        <div className="absolute inset-0 opacity-20">
          {/* Background image would go here */}
          {/* <Image src="/hero-bg.jpg" alt="Background" fill style={{objectFit: "cover"}} /> */}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Businesses Through Expert Guidance
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Comprehensive advisory services and specialized training programs to elevate your organization's performance.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-vikasa-gold hover:bg-vikasa-latte text-vikasa-espresso font-semibold px-8 py-3 rounded-md transition-colors text-lg">
              Book a Consultation
            </Link>
            <Link href="/courses" className="bg-white hover:bg-gray-100 text-vikasa-espresso font-semibold px-8 py-3 rounded-md transition-colors text-lg">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Benefits Bar */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-vikasa-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-vikasa-espresso">95% Client Satisfaction</h3>
              <p>Consistently delivering exceptional results for our clients.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-vikasa-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-vikasa-espresso">20+ Years Experience</h3>
              <p>Extensive expertise across multiple industries and disciplines.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-vikasa-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-vikasa-espresso">200+ Projects Completed</h3>
              <p>Proven track record of successful engagements worldwide.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-vikasa-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-vikasa-espresso">Global Presence</h3>
              <p>Serving clients across 20+ countries with tailored solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-20 bg-vikasa-espresso">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-vikasa-latte flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-vikasa-espresso">Strategic Advisory</h3>
                <p className="text-black mb-4">Expert guidance to optimize your business strategy, operations, and growth initiatives.</p>
                <Link href="/services/strategic-advisory" className="text-vikasa-latte font-semibold hover:text-vikasa-espresso inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-vikasa-latte flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-vikasa-espresso">Executive Training</h3>
                <p className="text-black mb-4">Specialized leadership development programs for senior executives and management teams.</p>
                <Link href="/services/executive-training" className="text-vikasa-latte font-semibold hover:text-vikasa-espresso inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-vikasa-latte flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-vikasa-espresso">Digital Transformation</h3>
                <p className="text-black mb-4">Comprehensive solutions to modernize your technology infrastructure and digital capabilities.</p>
                <Link href="/services/digital-transformation" className="text-vikasa-latte font-semibold hover:text-vikasa-espresso inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Case Study */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-vikasa-espresso">Client Success Story</h2>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
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
              </div>
              <div className="bg-vikasa-latte">
                {/* Case study image would go here */}
                {/* <Image src="/case-study.jpg" alt="Case Study" width={600} height={800} className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonial Slider */}
      <section className="py-20 bg-vikasa-espresso">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Latest Resources */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vikasa-espresso">Latest Resources</h2>
            <Link href="/resources" className="mt-4 md:mt-0 text-vikasa-latte font-semibold hover:text-vikasa-espresso inline-flex items-center">
              View All Resources
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300">
                  {/* Blog post image would go here */}
                  {/* <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-full object-cover" /> */}
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-vikasa-latte font-semibold hover:text-vikasa-espresso">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-vikasa-espresso text-white rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="mb-0">Get weekly insights on business strategy, leadership, and industry trends.</p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-5 py-3 rounded-md text-gray-900 focus:outline-none bg-white"
                  />
                  <button type="submit" className="bg-vikasa-gold hover:bg-vikasa-latte text-vikasa-espresso px-6 py-3 rounded-md transition-colors font-semibold whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Trust Signals */}
      <section className="py-16 bg-vikasa-gold-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-vikasa-espresso">Trusted By Industry Leaders</h2>
            <p className="text-lg text-gray-600">Join the ranks of elite organizations that rely on our expertise</p>
          </div>
          
          {/* Client logos */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-8 text-center text-vikasa-latte">Our Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {clientLogos.map((client, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="h-20 w-40 bg-gray-50 flex items-center justify-center rounded shadow-sm border border-gray-100 hover:border-vikasa-gold hover:shadow-md transition-all duration-300">
                    {/* Replace with actual logos when available */}
                    {/* <Image src={client.logo} alt={client.name} width={120} height={60} /> */}
                    <span className="text-gray-500 font-medium">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Awards and certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center text-vikasa-latte">Awards & Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {awardsAndCertifications.map((item, index) => (
                <div key={index} className="group">
                  <div className="h-24 w-48 bg-gray-50 flex flex-col items-center justify-center rounded-lg shadow-sm border border-gray-100 hover:border-vikasa-gold hover:shadow-md transition-all duration-300 p-4">
                    {/* Replace with actual logos when available */}
                    {/* <Image src={item.logo} alt={item.name} width={60} height={60} className="mb-2" /> */}
                    <div className="w-12 h-12 rounded-full bg-vikasa-gold/20 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-center text-sm">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-vikasa-gold/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2 text-vikasa-espresso">Data Security</h4>
              <p className="text-gray-600">Enterprise-grade security protocols and compliance with industry standards</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-vikasa-gold/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2 text-vikasa-espresso">100% Satisfaction</h4>
              <p className="text-gray-600">Our commitment to excellence and client satisfaction guarantee</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-vikasa-gold/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2 text-vikasa-espresso">Expert Team</h4>
              <p className="text-gray-600">Industry veterans with proven track records of success</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Secondary CTA */}
      <section className="bg-vikasa-espresso text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-white">
            Join hundreds of organizations that have accelerated their growth with our proven methodologies.
          </p>
          <Link href="/contact" className="bg-vikasa-gold text-vikasa-espresso hover:bg-white font-bold px-8 py-4 rounded-lg text-lg inline-block transition-colors">
            Schedule a Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
