import Link from "next/link";
import Image from "next/image";

// Company timeline data
const timelineEvents = [
  {
    year: "2003",
    title: "Foundation",
    description: "Vikasa was founded with a vision to transform business consulting through holistic approaches."
  },
  {
    year: "2007",
    title: "International Expansion",
    description: "Opened our first international office in Singapore, expanding our reach across Asia."
  },
  {
    year: "2012",
    title: "Vikasa Academy Launch",
    description: "Launched our education division offering specialized executive training programs."
  },
  {
    year: "2015",
    title: "Digital Transformation Practice",
    description: "Established our digital transformation practice to help businesses navigate technological change."
  },
  {
    year: "2018",
    title: "100th Enterprise Client",
    description: "Milestone achievement of serving our 100th enterprise-level client."
  },
  {
    year: "2020",
    title: "Virtual Learning Platform",
    description: "Launched our proprietary virtual learning platform for remote training excellence."
  },
  {
    year: "2023",
    title: "20 Years of Excellence",
    description: "Celebrating two decades of transformative business consulting and leadership development."
  }
];

// Core values data
const coreValues = [
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our interactions, ensuring transparency and honesty in every engagement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in all our services, constantly raising the bar for ourselves and the industry.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Innovation",
    description: "We embrace creative thinking and pioneering approaches to solve complex business challenges with forward-looking solutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Partnership",
    description: "We believe in building deep, collaborative relationships with our clients, becoming true partners in their success journey.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Impact",
    description: "We measure our success by the meaningful and lasting difference we make in our clients' businesses and their stakeholders' lives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

// Add team members data 
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
];

// Add company credentials data
const credentials = [
  {
    category: "Certifications",
    items: [
      "ISO 9001:2015 Certified",
      "PMI Registered Education Provider",
      "ICF Accredited Coach Training Program",
      "SHRM Certified Professional Development"
    ]
  },
  {
    category: "Partnerships",
    items: [
      "World Economic Forum Partner",
      "Harvard Business School Executive Education",
      "MIT Sloan Management School Affiliate",
      "Global Leadership Network Member"
    ]
  },
  {
    category: "Awards",
    items: [
      "Forbes Top 50 Consulting Firms (2022)",
      "Brandon Hall Excellence in Leadership Development",
      "Training Industry Top 20 Leadership Training Provider",
      "Global Business Excellence Award"
    ]
  },
  {
    category: "Memberships",
    items: [
      "International Coach Federation",
      "Association for Talent Development",
      "Society for Human Resource Management",
      "Digital Transformation Alliance"
    ]
  }
];

// Add impact metrics data
const impactMetrics = [
  { number: "500+", label: "Clients Served", description: "Organizations transformed across 6 continents" },
  { number: "15,000+", label: "Professionals Trained", description: "Through our executive education programs" },
  { number: "92%", label: "Client Retention", description: "Partners who continue working with us year after year" },
  { number: "$2.5B+", label: "Client Value Created", description: "Measurable revenue and efficiency impact" }
];

// Add FAQ data
const faqs = [
  {
    question: "What industries does Vikasa specialize in?",
    answer: "Vikasa works across multiple industries including technology, finance, healthcare, manufacturing, and professional services. Our methodology adapts to each sector's unique challenges while applying cross-industry best practices."
  },
  {
    question: "How does Vikasa measure the success of its engagements?",
    answer: "We establish clear, measurable KPIs at the beginning of each engagement, tailored to your specific objectives. These typically include financial metrics, operational improvements, leadership capability development, and employee engagement measures."
  },
  {
    question: "What makes Vikasa's approach to consulting different?",
    answer: "Our integrated approach combines strategic advisory with hands-on implementation support and capability building. We don't just deliver recommendations - we partner with you to build the skills and systems needed for sustainable transformation."
  },
  {
    question: "How long is a typical engagement with Vikasa?",
    answer: "Engagement lengths vary based on client needs and project scope. Strategic advisory projects typically range from 3-6 months, while comprehensive transformation initiatives may extend 12-18 months. We also offer ongoing advisory relationships."
  },
  {
    question: "What qualifications do Vikasa consultants have?",
    answer: "Our consultants have a minimum of 10+ years of industry and consulting experience, advanced degrees from leading institutions, and specialized expertise in their practice areas. Many hold professional certifications relevant to their field."
  },
  {
    question: "Does Vikasa work with startups and small businesses?",
    answer: "Yes, we have specialized offerings for growth-stage companies and SMEs. Our scalable approach allows us to tailor our services to organizations of various sizes while delivering meaningful impact aligned with your budget."
  }
];

export default function About() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative bg-vikasa-espresso-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vikasa-espresso">Our Story</h1>
            <p className="text-xl text-gray-700 mb-8">Transforming businesses through expertise, innovation, and partnership since 2003.</p>
            <div className="w-32 h-1 bg-vikasa-gold mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* 1. Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Journey</h2>
              <p className="text-lg text-gray-700 mb-6">
                Vikasa was born from a clear vision: to redefine business consulting by combining strategic insight with practical implementation. 
                Our founder, Jane Smith, recognized that many organizations struggled with the gap between strategy development and execution.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Starting with a small team of experienced consultants, we set out to build a different kind of advisory firm—one that would 
                stay with clients through the entire journey of transformation and capability building.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, Vikasa has evolved into a global consultancy with specialized practices in strategy, operations, leadership development, 
                and digital transformation. Our integrated approach ensures we deliver solutions that drive real, measurable impact.
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="/contact" className="bg-vikasa-gold hover:bg-vikasa-gold-light text-vikasa-espresso font-semibold px-5 py-2 rounded-md transition-colors">
                  Contact Us
                </Link>
                <Link href="/services" className="border border-vikasa-espresso text-vikasa-espresso hover:bg-vikasa-espresso hover:text-white font-semibold px-5 py-2 rounded-md transition-colors">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative h-96 bg-vikasa-latte-50 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-vikasa-latte text-lg font-medium">Company Founding Team Image</p>
              </div>
              {/* <Image src="/images/about/founding-team.jpg" alt="Vikasa Founding Team" fill style={{objectFit: "cover"}} /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-vikasa-espresso-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-vikasa-espresso">Our Growth Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-vikasa-gold-light"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-vikasa-gold z-10"></div>
                  
                  {/* Content */}
                  <div className="w-5/12"></div>
                  <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
                    <span className="text-vikasa-gold font-bold text-xl">{event.year}</span>
                    <h3 className="text-xl font-bold mb-2 text-vikasa-espresso">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision for the future */}
      <section className="py-16 bg-gradient-to-r from-vikasa-espresso to-vikasa-latte text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Vision for the Future</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            We envision a business world where organizations thrive through authentic leadership, 
            strategic innovation, and sustainable practices. Vikasa will continue to be at the 
            forefront of this transformation, guiding leaders to create enduring value while 
            developing their people and serving their communities.
          </p>
          <div className="w-24 h-1 bg-vikasa-gold mx-auto"></div>
        </div>
      </section>
      
      {/* 2. Core Values & Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Core Values</h2>
            <p className="text-lg text-gray-700">
              These principles guide every aspect of our work, from how we engage with clients 
              to how we develop our team members and measure our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.slice(0, 3).map((value, index) => (
              <div key={index} className="bg-vikasa-espresso-50 p-8 rounded-lg">
                <div className="text-vikasa-gold mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {coreValues.slice(3).map((value, index) => (
              <div key={index} className="bg-vikasa-espresso-50 p-8 rounded-lg">
                <div className="text-vikasa-gold mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Methodology */}
      <section className="py-16 bg-vikasa-gold-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Methodology</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Vikasa approach combines deep expertise with collaborative implementation, ensuring 
                our solutions are both innovative and practical. We believe in:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-vikasa-espresso mb-1">Deep Understanding</h3>
                    <p className="text-gray-700">We begin by thoroughly understanding your unique challenges, context, and aspirations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-vikasa-espresso mb-1">Collaborative Design</h3>
                    <p className="text-gray-700">We co-create solutions with your team, ensuring alignment and ownership from the start.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-vikasa-espresso mb-1">Capability Building</h3>
                    <p className="text-gray-700">We transfer knowledge and skills to your team, ensuring sustainable impact beyond our engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-vikasa-espresso mb-1">Measurable Results</h3>
                    <p className="text-gray-700">We define clear success metrics and rigorously track progress to ensure tangible outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-96 bg-vikasa-latte-50 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-vikasa-latte text-lg font-medium">Methodology Image</p>
              </div>
              {/* <Image src="/images/about/methodology.jpg" alt="Vikasa Methodology" fill style={{objectFit: "cover"}} /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. Team Profiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Meet the experienced professionals who guide our organization and bring their expertise to every client engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
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
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. Company Credentials */}
      <section className="py-16 bg-vikasa-espresso-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Credentials</h2>
            <p className="text-lg text-gray-700">
              Vikasa maintains the highest standards of professional excellence through industry certifications, partnerships, and recognitions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-vikasa-espresso border-b border-vikasa-gold pb-2">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 5. Impact & Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Impact</h2>
            <p className="text-lg text-gray-700">
              We measure our success through the tangible results we deliver and the lasting difference we make for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-vikasa-espresso-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-vikasa-gold mb-2">{metric.number}</div>
                <h3 className="text-xl font-bold text-vikasa-espresso mb-2">{metric.label}</h3>
                <p className="text-gray-700">{metric.description}</p>
              </div>
            ))}
          </div>
          
          {/* Social Impact */}
          <div className="bg-vikasa-gold-light p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-vikasa-espresso">Social Impact Initiatives</h3>
                <p className="text-gray-800 mb-4">
                  Beyond our client work, Vikasa is committed to creating positive social impact through:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-vikasa-espresso/10 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-espresso" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800"><strong>Pro Bono Consulting:</strong> Annual commitment of 1,000+ hours to nonprofit and social enterprises</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-vikasa-espresso/10 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-espresso" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800"><strong>Leadership Scholarships:</strong> Funding for underrepresented leaders to access our training programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-vikasa-espresso/10 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-espresso" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800"><strong>Sustainability Initiatives:</strong> Carbon-neutral operations and environmental consulting practice</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 bg-vikasa-gold-50 rounded-lg overflow-hidden">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-vikasa-gold-dark text-lg font-medium">Social Impact Image</p>
                </div>
                {/* <Image src="/images/about/social-impact.jpg" alt="Social Impact Initiatives" fill style={{objectFit: "cover"}} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 6. Company Culture */}
      <section className="py-16 bg-vikasa-espresso-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Our Culture</h2>
            <p className="text-lg text-gray-700">
              The Vikasa work environment is built on collaboration, continuous learning, and meaningful connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 bg-vikasa-latte-50 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-vikasa-latte text-lg font-medium">Team Collaboration</p>
              </div>
              {/* <Image src="/images/about/culture-1.jpg" alt="Team Collaboration" fill style={{objectFit: "cover"}} /> */}
            </div>
            <div className="relative h-64 bg-vikasa-latte-50 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-vikasa-latte text-lg font-medium">Office Environment</p>
              </div>
              {/* <Image src="/images/about/culture-2.jpg" alt="Office Environment" fill style={{objectFit: "cover"}} /> */}
            </div>
            <div className="relative h-64 bg-vikasa-latte-50 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-vikasa-latte text-lg font-medium">Team Building</p>
              </div>
              {/* <Image src="/images/about/culture-3.jpg" alt="Team Building" fill style={{objectFit: "cover"}} /> */}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-vikasa-espresso">Life at Vikasa</h3>
                <p className="text-gray-700 mb-4">
                  Our workplace culture emphasizes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Continuous Learning:</strong> Regular knowledge sharing sessions, learning allowances, and development opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Collaborative Leadership:</strong> Flat hierarchy that encourages diverse perspectives and idea sharing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Work-Life Integration:</strong> Flexible arrangements that support both exceptional client service and personal well-being</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Team Connection:</strong> Regular team events, retreats, and celebrations that strengthen our community</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <div className="bg-vikasa-latte-50 h-full flex items-center justify-center">
                  <p className="text-vikasa-latte text-lg font-medium">Video: Life at Vikasa</p>
                </div>
                {/* Replace with actual video embed
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Life at Vikasa"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 7. Client Relationships */}
      <section className="py-16 bg-vikasa-gold-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Who We Serve</h2>
            <p className="text-lg text-gray-700">
              We work with forward-thinking organizations committed to transformation and sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-vikasa-espresso border-b border-vikasa-gold pb-2">Industries</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Technology & Software</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Financial Services</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Healthcare & Life Sciences</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Manufacturing</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Professional Services</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Retail & Consumer Goods</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Education</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Nonprofit & Social Enterprise</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-vikasa-espresso border-b border-vikasa-gold pb-2">Organization Types</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Global Enterprises</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Mid-Market Companies</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Fast-Growing Startups</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Family-Owned Businesses</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Public Sector Institutions</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Educational Institutions</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Nonprofit Organizations</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-vikasa-gold rounded-full mr-2"></div>Industry Associations</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-vikasa-espresso border-b border-vikasa-gold pb-2">Client Support Approach</h3>
              <p className="text-gray-700 mb-4">Our commitment to clients includes:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Dedicated client success teams</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Regular progress reviews</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Knowledge transfer protocols</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Post-engagement follow-up</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vikasa-gold/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Alumni network for continued learning</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Client logos */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-8 text-center text-vikasa-espresso">Our Clients Include</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all h-16 w-32 bg-gray-100 flex items-center justify-center rounded">
                  <p className="text-gray-400 text-sm">Client Logo</p>
                  {/* <Image src={`/client-logos/client-${index + 1}.svg`} alt={`Client ${index + 1}`} width={100} height={40} /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 8. FAQ About the Company */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-vikasa-espresso">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Common questions about our company, approach, and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-vikasa-espresso-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg mb-6">Have more questions about how we can help your organization?</p>
              <Link href="/contact" className="bg-vikasa-gold hover:bg-vikasa-gold-light text-vikasa-espresso font-semibold px-6 py-3 rounded-md transition-colors inline-block">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 