import Link from "next/link";

// Blog articles data
const featuredArticles = [
  {
    id: 1,
    title: "The Future of Strategic Leadership in a Digital-First World",
    excerpt: "How business leaders can adapt their strategic approach to thrive in an increasingly digital landscape.",
    category: "Leadership",
    image: "/resources/blog/strategic-leadership.jpg",
    author: {
      name: "Jane Smith",
      role: "CEO & Founder",
      avatar: "/team/jane-smith.jpg"
    },
    date: "June 15, 2023",
    readingTime: "8 min read",
    featured: true,
    slug: "future-strategic-leadership-digital-world"
  },
  {
    id: 2,
    title: "Implementing Agile Methodologies in Traditional Organizations",
    excerpt: "A step-by-step guide to successfully adopting agile practices within established corporate structures.",
    category: "Operations",
    image: "/resources/blog/agile-methodologies.jpg",
    author: {
      name: "Michael Chen",
      role: "Managing Director, Advisory",
      avatar: "/team/michael-chen.jpg"
    },
    date: "May 22, 2023",
    readingTime: "12 min read",
    featured: true,
    slug: "implementing-agile-methodologies-traditional-organizations"
  },
  {
    id: 3,
    title: "Digital Transformation: Beyond the Technology",
    excerpt: "Why successful digital transformation requires equal focus on people, processes, and organizational culture.",
    category: "Digital Transformation",
    image: "/resources/blog/digital-transformation.jpg",
    author: {
      name: "David Rodriguez",
      role: "Head of Digital Transformation",
      avatar: "/team/david-rodriguez.jpg"
    },
    date: "April 10, 2023",
    readingTime: "10 min read",
    featured: true,
    slug: "digital-transformation-beyond-technology"
  }
];

const recentArticles = [
  {
    id: 4,
    title: "Building Resilient Supply Chains in Uncertain Times",
    excerpt: "Strategies for creating adaptable supply chain networks that can withstand global disruptions.",
    category: "Operations",
    image: "/resources/blog/supply-chains.jpg",
    author: {
      name: "Amina Patel",
      role: "Chief Strategy Officer",
      avatar: "/team/amina-patel.jpg"
    },
    date: "July 5, 2023",
    readingTime: "9 min read",
    slug: "resilient-supply-chains-uncertain-times"
  },
  {
    id: 5,
    title: "The ROI of Leadership Development Programs",
    excerpt: "How to measure the tangible and intangible returns of investing in leadership capabilities.",
    category: "Leadership",
    image: "/resources/blog/leadership-development.jpg",
    author: {
      name: "Sarah Johnson",
      role: "Director, Vikasa Academy",
      avatar: "/team/sarah-johnson.jpg"
    },
    date: "July 1, 2023",
    readingTime: "7 min read",
    slug: "roi-leadership-development-programs"
  },
  {
    id: 6,
    title: "Ethical AI Implementation in Business Processes",
    excerpt: "Frameworks for ensuring artificial intelligence applications align with ethical standards and organizational values.",
    category: "Technology",
    image: "/resources/blog/ethical-ai.jpg",
    author: {
      name: "David Rodriguez",
      role: "Head of Digital Transformation",
      avatar: "/team/david-rodriguez.jpg"
    },
    date: "June 28, 2023",
    readingTime: "11 min read",
    slug: "ethical-ai-implementation-business"
  },
  {
    id: 7,
    title: "Sustainable Business Models for Long-Term Growth",
    excerpt: "Exploring how sustainability initiatives can drive innovation and create competitive advantage.",
    category: "Strategy",
    image: "/resources/blog/sustainable-business.jpg",
    author: {
      name: "Jane Smith",
      role: "CEO & Founder",
      avatar: "/team/jane-smith.jpg"
    },
    date: "June 20, 2023",
    readingTime: "8 min read",
    slug: "sustainable-business-models-growth"
  }
];

// Resource categories
const resourceCategories = [
  { name: "All Resources", count: 127, icon: "📚", slug: "all" },
  { name: "Leadership", count: 42, icon: "👥", slug: "leadership" },
  { name: "Strategy", count: 35, icon: "🎯", slug: "strategy" },
  { name: "Operations", count: 28, icon: "⚙️", slug: "operations" },
  { name: "Digital Transformation", count: 32, icon: "💻", slug: "digital-transformation" },
  { name: "Talent Management", count: 19, icon: "🌟", slug: "talent-management" },
  { name: "Financial Excellence", count: 15, icon: "📊", slug: "financial-excellence" },
  { name: "Innovation", count: 24, icon: "💡", slug: "innovation" }
];

// White papers data
const whitePapers = [
  {
    id: 1,
    title: "The State of Digital Transformation in Financial Services 2023",
    excerpt: "Comprehensive analysis of digital adoption trends, challenges, and opportunities in the financial services sector.",
    image: "/resources/whitepapers/financial-digital-transformation.jpg",
    category: "Digital Transformation",
    publishDate: "July 2023",
    pages: 48,
    slug: "financial-services-digital-transformation-2023"
  },
  {
    id: 2,
    title: "Building High-Performance Teams in Hybrid Work Environments",
    excerpt: "Research-backed strategies for developing effective teams in the era of distributed and hybrid working arrangements.",
    image: "/resources/whitepapers/hybrid-teams.jpg",
    category: "Leadership",
    publishDate: "May 2023",
    pages: 36,
    slug: "high-performance-teams-hybrid-work"
  },
  {
    id: 3,
    title: "Supply Chain Resilience: Lessons from Global Disruptions",
    excerpt: "Analysis of how leading organizations have adapted their supply chains to manage increasing volatility and uncertainty.",
    image: "/resources/whitepapers/supply-chain.jpg",
    category: "Operations",
    publishDate: "April 2023",
    pages: 42,
    slug: "supply-chain-resilience-lessons"
  }
];

// Add tools and templates data
const toolsAndTemplates = [
  {
    id: 1,
    title: "Strategic Planning Canvas",
    description: "A comprehensive framework for developing and documenting your organization's strategic plan.",
    category: "Strategy",
    image: "/resources/tools/strategic-canvas.jpg",
    fileType: "PDF + PPTX",
    downloads: 3800,
    slug: "strategic-planning-canvas"
  },
  {
    id: 2,
    title: "Digital Transformation Readiness Assessment",
    description: "Interactive tool to evaluate your organization's digital maturity and identify key opportunity areas.",
    category: "Digital Transformation",
    image: "/resources/tools/digital-readiness.jpg",
    fileType: "XLSX",
    downloads: 2450,
    slug: "digital-transformation-assessment"
  },
  {
    id: 3,
    title: "Team Performance Dashboard Template",
    description: "Pre-built dashboard for tracking team KPIs, productivity metrics, and performance indicators.",
    category: "Leadership",
    image: "/resources/tools/team-dashboard.jpg",
    fileType: "XLSX",
    downloads: 1980,
    slug: "team-performance-dashboard"
  },
  {
    id: 4,
    title: "Process Documentation Framework",
    description: "Standardized templates for mapping and documenting business processes across your organization.",
    category: "Operations",
    image: "/resources/tools/process-documentation.jpg",
    fileType: "DOCX + VSDX",
    downloads: 3100,
    slug: "process-documentation-framework"
  }
];

// Add webinars data
const webinars = [
  {
    id: 1,
    title: "Leading Through Disruption: Strategies for Uncertain Times",
    description: "Expert panel discussion on resilient leadership approaches during market volatility and organizational change.",
    image: "/resources/webinars/leadership-disruption.jpg",
    date: "Recorded June 28, 2023",
    duration: "58 min",
    speakers: ["Jane Smith", "Dr. Robert Chen", "Amira Hassan"],
    views: 1240,
    slug: "leading-through-disruption"
  },
  {
    id: 2,
    title: "The AI Revolution in Business Operations",
    description: "Practical insights on implementing AI solutions to optimize core business processes and decision-making.",
    image: "/resources/webinars/ai-operations.jpg",
    date: "Recorded May 17, 2023",
    duration: "45 min",
    speakers: ["David Rodriguez", "Sarah Johnson"],
    views: 1880,
    slug: "ai-revolution-business-operations"
  },
  {
    id: 3,
    title: "Building a Culture of Innovation",
    description: "Learn how to foster organizational conditions that drive creative thinking and continuous improvement.",
    image: "/resources/webinars/innovation-culture.jpg",
    date: "Recorded April 5, 2023",
    duration: "52 min",
    speakers: ["Thomas Wilson", "Emma Richards"],
    views: 956,
    slug: "building-innovation-culture"
  }
];

// Add upcoming webinars
const upcomingWebinars = [
  {
    id: 1,
    title: "Sustainable Business Strategies for 2024",
    date: "August 24, 2023",
    time: "11:00 AM EDT",
    speakers: ["Jane Smith", "Michael Chen"],
    slug: "sustainable-business-strategies-2024"
  },
  {
    id: 2,
    title: "Mastering Remote Team Management",
    date: "September 12, 2023",
    time: "2:00 PM EDT",
    speakers: ["Sarah Johnson", "Thomas Wilson"],
    slug: "mastering-remote-team-management"
  }
];

// Add E-Books and Guides data
const eBooksAndGuides = [
  {
    id: 1,
    title: "The Future of Work: Navigating Remote & Hybrid Environments",
    description: "Strategic insights for leaders managing distributed teams and creating effective hybrid work models.",
    image: "/resources/ebooks/future-of-work.jpg",
    category: "Leadership",
    pages: 45,
    publishDate: "July 2023",
    slug: "future-of-work-guide"
  },
  {
    id: 2,
    title: "Digital Transformation Roadmap",
    description: "A comprehensive guide to planning and executing successful digital transformation initiatives.",
    image: "/resources/ebooks/digital-transformation.jpg",
    category: "Strategy",
    pages: 68,
    publishDate: "May 2023",
    slug: "digital-transformation-roadmap"
  },
  {
    id: 3,
    title: "Sustainable Business Practices",
    description: "Practical approaches to embedding sustainability into operations and creating long-term business value.",
    image: "/resources/ebooks/sustainability.jpg",
    category: "Operations",
    pages: 52,
    publishDate: "April 2023",
    slug: "sustainable-business-practices"
  }
];

// Add resource categories and topics data
const resourceTopics = [
  { name: "Strategy & Planning", count: 45 },
  { name: "Digital Transformation", count: 37 },
  { name: "Leadership & Talent", count: 39 },
  { name: "Operations Excellence", count: 28 },
  { name: "Financial Performance", count: 24 },
  { name: "Change Management", count: 32 },
  { name: "Innovation", count: 29 },
  { name: "Market Analysis", count: 22 },
  { name: "Customer Experience", count: 26 },
  { name: "Sustainability", count: 18 }
];

const resourceTypes = [
  { name: "Articles", count: 94 },
  { name: "White Papers", count: 32 },
  { name: "Case Studies", count: 48 },
  { name: "Webinars", count: 26 },
  { name: "E-Books", count: 18 },
  { name: "Tools & Templates", count: 29 },
  { name: "Infographics", count: 21 },
  { name: "Newsletters", count: 36 }
];

// Add newsletter data
const newsletters = [
  {
    id: 1,
    title: "Q2 2023 Market Insights",
    description: "Analysis of emerging industry trends and market conditions affecting strategic decision-making.",
    date: "June 2023",
    slug: "q2-2023-market-insights"
  },
  {
    id: 2,
    title: "The Innovation Spotlight",
    description: "Highlighting breakthrough approaches and technologies transforming the business landscape.",
    date: "May 2023",
    slug: "innovation-spotlight-may-2023"
  },
  {
    id: 3,
    title: "Leadership Perspectives",
    description: "Executive insights on navigating complex organizational challenges and opportunities.",
    date: "April 2023",
    slug: "leadership-perspectives-april-2023"
  },
  {
    id: 4,
    title: "Digital Transformation Digest",
    description: "Updates on digital trends, implementation strategies, and transformation success stories.",
    date: "March 2023",
    slug: "digital-transformation-digest-march-2023"
  }
];

// Add forum discussions data
const forumDiscussions = [
  {
    id: 1,
    title: "Balancing Innovation and Operational Stability",
    category: "Strategy",
    author: "Michael Chen",
    replies: 24,
    views: 342,
    lastActive: "2 hours ago",
    slug: "balancing-innovation-stability"
  },
  {
    id: 2,
    title: "Measuring ROI on Digital Transformation Initiatives",
    category: "Digital",
    author: "Sarah Johnson",
    replies: 18,
    views: 276,
    lastActive: "5 hours ago",
    slug: "measuring-digital-transformation-roi"
  },
  {
    id: 3,
    title: "Building Resilient Supply Chains Post-Pandemic",
    category: "Operations",
    author: "David Rodriguez",
    replies: 32,
    views: 418,
    lastActive: "1 day ago",
    slug: "resilient-supply-chains-post-pandemic"
  },
  {
    id: 4,
    title: "Effective Change Management Strategies",
    category: "Leadership",
    author: "Amina Patel",
    replies: 27,
    views: 305,
    lastActive: "2 days ago",
    slug: "effective-change-management-strategies"
  }
];

export default function Resources() {
  return (
    <main className="font-montserrat">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-vikasa-espresso to-vikasa-latte py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resource Center</h1>
            <p className="text-xl mb-10">
              Insights, tools and expertise to help your organization thrive in today&apos;s complex business environment.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for resources..." 
                className="w-full py-4 px-6 rounded-full text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-vikasa-gold"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-vikasa-gold hover:bg-vikasa-gold-dark text-white p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resource Navigation */}
      <section className="py-10 bg-vikasa-espresso-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/resource/blog" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">Blog & Articles</span>
            </Link>
            <Link href="/resource/whitepapers" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">White Papers & Research</span>
            </Link>
            <Link href="/resource/tools" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">Free Tools & Templates</span>
            </Link>
            <Link href="/resource/webinars" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">Webinars & Videos</span>
            </Link>
            <Link href="/resource/ebooks" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">E-Books & Guides</span>
            </Link>
            <Link href="/resource/library" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">Resource Library</span>
            </Link>
            <Link href="/resource/newsletter" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">Newsletter Archive</span>
            </Link>
            <Link href="/resource/community" className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-vikasa-espresso font-semibold">Community Forum</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 1. Blog/Articles Section */}
      <section className="py-16 bg-vikasa-gold-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-vikasa-espresso">Latest Insights & Articles</h2>
            <Link href="/resource/blog" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold flex items-center">
              View All Articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {/* Featured Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <Link href={`/resource/blog/${article.slug}`} key={article.id} className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all group-hover:shadow-lg">
                  <div className="h-48 bg-vikasa-latte-50 relative">
                    {/* Replace with actual image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-vikasa-latte text-lg font-medium">Article Image</p>
                    </div>
                    {/* <Image src={article.image} alt={article.title} fill style={{objectFit: "cover"}} /> */}
                    <div className="absolute top-4 left-4 bg-vikasa-gold text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-vikasa-espresso group-hover:text-vikasa-latte transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-5 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-vikasa-latte-50 mr-3">
                          {/* <Image src={article.author.avatar} alt={article.author.name} width={40} height={40} className="rounded-full" /> */}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-vikasa-espresso">{article.author.name}</p>
                          <p className="text-xs text-gray-500">{article.date}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{article.readingTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Recent Articles */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-vikasa-espresso">Recent Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentArticles.map((article) => (
                <Link href={`/resource/blog/${article.slug}`} key={article.id} className="group">
                  <div className="flex bg-white rounded-lg shadow-sm overflow-hidden transition-all group-hover:shadow-md">
                    <div className="w-1/3 bg-vikasa-latte-50 relative">
                      {/* Replace with actual image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-vikasa-latte text-sm font-medium">Image</p>
                      </div>
                      {/* <Image src={article.image} alt={article.title} fill style={{objectFit: "cover"}} /> */}
                    </div>
                    <div className="w-2/3 p-5">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-vikasa-espresso-50 text-vikasa-espresso text-xs font-semibold px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readingTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-vikasa-espresso group-hover:text-vikasa-latte transition-colors line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center text-xs">
                        <p className="text-gray-500">By <span className="text-vikasa-espresso font-semibold">{article.author.name}</span></p>
                        <span className="mx-2">•</span>
                        <p className="text-gray-500">{article.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Topics/Categories */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-vikasa-espresso">Browse by Topic</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {resourceCategories.map((category) => (
                <Link href={`/resource/blog/category/${category.slug}`} key={category.slug} className="group">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center transition-all hover:shadow-md hover:border-vikasa-gold-light">
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <h4 className="font-semibold text-vikasa-espresso group-hover:text-vikasa-latte transition-colors">{category.name}</h4>
                    <p className="text-sm text-gray-500">{category.count} articles</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. White Papers & Research Section */}
      <section className="py-16 bg-vikasa-espresso-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-vikasa-espresso">White Papers & Research</h2>
            <Link href="/resource/whitepapers" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold flex items-center">
              View All White Papers
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitePapers.map((paper) => (
              <div key={paper.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-vikasa-latte-50 relative">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-vikasa-latte text-lg font-medium">White Paper Cover</p>
                  </div>
                  {/* <Image src={paper.image} alt={paper.title} fill style={{objectFit: "cover"}} /> */}
                  <div className="absolute top-4 left-4 bg-vikasa-latte text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {paper.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{paper.title}</h3>
                  <p className="text-gray-600 mb-5">{paper.excerpt}</p>
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {paper.publishDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      {paper.pages} pages
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link href={`/resource/whitepapers/${paper.slug}`} className="text-vikasa-latte hover:text-vikasa-espresso font-semibold text-sm">
                      View Summary
                    </Link>
                    <button className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. Free Tools & Templates Section */}
      <section className="py-16 bg-vikasa-gold-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-vikasa-espresso">Free Tools & Templates</h2>
            <Link href="/resource/tools" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold flex items-center">
              View All Tools
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toolsAndTemplates.map((tool) => (
              <div key={tool.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg hover:border-vikasa-gold-light">
                <div className="h-40 bg-vikasa-espresso-50 relative">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-vikasa-espresso text-lg font-medium">Tool Preview</p>
                  </div>
                  {/* <Image src={tool.image} alt={tool.title} fill style={{objectFit: "cover"}} /> */}
                  <div className="absolute top-4 left-4 bg-vikasa-espresso text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {tool.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-vikasa-espresso">{tool.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tool.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-500 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {tool.fileType}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {tool.downloads.toLocaleString()} downloads
                    </span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link 
                      href={`/resource/tools/${tool.slug}`} 
                      className="text-sm text-vikasa-latte hover:text-vikasa-espresso font-semibold"
                    >
                      View Details
                    </Link>
                    <button className="w-full bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. Webinars & Videos Section */}
      <section className="py-16 bg-vikasa-espresso-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-vikasa-espresso">Webinars & Videos</h2>
            <Link href="/resource/webinars" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold flex items-center">
              View All Webinars
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {/* Recorded Webinars */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-vikasa-espresso">Featured Webinars</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webinars.map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-vikasa-latte-50 relative">
                      {/* Replace with actual image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-vikasa-latte text-lg font-medium">Webinar Thumbnail</p>
                      </div>
                      {/* <Image src={webinar.image} alt={webinar.title} fill style={{objectFit: "cover"}} /> */}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-vikasa-espresso bg-opacity-70 rounded-full p-4 hover:bg-vikasa-gold transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-gray-500">{webinar.date}</span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {webinar.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-vikasa-espresso">{webinar.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{webinar.description}</p>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Featuring:</p>
                      <div className="flex flex-wrap gap-1">
                        {webinar.speakers.map((speaker, idx) => (
                          <span key={idx} className="bg-vikasa-espresso-50 text-vikasa-espresso text-xs px-2 py-1 rounded">
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link href={`/resource/webinars/${webinar.slug}`} className="text-vikasa-latte hover:text-vikasa-espresso font-semibold text-sm inline-flex items-center">
                      Watch Webinar
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Upcoming Webinars */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-vikasa-espresso">Upcoming Live Webinars</h3>
            <div className="space-y-6">
              {upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-100 pb-6">
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-bold text-vikasa-espresso mb-2">{webinar.title}</h4>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {webinar.speakers.map((speaker, idx) => (
                        <span key={idx} className="bg-vikasa-espresso-50 text-vikasa-espresso text-xs px-2 py-1 rounded">
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-700 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {webinar.time}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Link 
                      href={`/resource/webinars/register/${webinar.slug}`}
                      className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors w-full text-center"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/resource/webinars/upcoming" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold">
                View Full Webinar Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. E-Books & Guides Section */}
      <section className="py-16 bg-vikasa-gold-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-vikasa-espresso">E-Books & Guides</h2>
            <Link href="/resource/ebooks" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold flex items-center">
              View All E-Books
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eBooksAndGuides.map((ebook) => (
              <div key={ebook.id} className="rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg hover:border-vikasa-gold-light flex flex-col">
                <div className="h-48 bg-vikasa-espresso-50 relative">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-vikasa-espresso text-lg font-medium">E-Book Cover</p>
                  </div>
                  {/* <Image src={ebook.image} alt={ebook.title} fill style={{objectFit: "cover"}} /> */}
                  <div className="absolute top-4 right-4 bg-vikasa-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {ebook.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-vikasa-espresso">{ebook.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{ebook.description}</p>
                  <div className="flex justify-between items-center mb-6 text-xs text-gray-500">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {ebook.pages} pages
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {ebook.publishDate}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Link 
                      href={`/resource/ebooks/${ebook.slug}`}
                      className="text-vikasa-latte bg-white border border-vikasa-latte hover:bg-vikasa-latte-50 hover:text-vikasa-espresso font-semibold px-4 py-2 rounded-md text-sm transition-colors flex-1 text-center"
                    >
                      Read More
                    </Link>
                    <button className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 6. Resource Library Section */}
      <section className="py-16 bg-vikasa-espresso-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-vikasa-espresso mb-4">Resource Library</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of business resources organized by topic, industry, and content type.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="bg-vikasa-espresso-100 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-vikasa-espresso mb-4">Search Our Resources</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search for resources by keyword" 
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold"
                    />
                  </div>
                  <select className="py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold text-gray-700">
                    <option value="">All Resource Types</option>
                    {resourceTypes.map((type, idx) => (
                      <option key={idx} value={type.name.toLowerCase()}>{type.name}</option>
                    ))}
                  </select>
                  <select className="py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold text-gray-700">
                    <option value="">All Topics</option>
                    {resourceTopics.map((topic, idx) => (
                      <option key={idx} value={topic.name.toLowerCase()}>{topic.name}</option>
                    ))}
                  </select>
                  <button className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-8 py-3 rounded-md transition-colors">
                    Search
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-vikasa-espresso mb-6">Browse by Topic</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {resourceTopics.map((topic, idx) => (
                      <Link key={idx} href={`/resource/topics/${topic.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex justify-between items-center p-3 border border-gray-100 rounded-md hover:bg-vikasa-espresso-50 transition-colors">
                        <span className="font-medium text-vikasa-espresso">{topic.name}</span>
                        <span className="bg-vikasa-espresso-100 text-vikasa-espresso text-xs px-2 py-1 rounded-full">
                          {topic.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-vikasa-espresso mb-6">Browse by Content Type</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {resourceTypes.map((type, idx) => (
                      <Link key={idx} href={`/resource/types/${type.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex justify-between items-center p-3 border border-gray-100 rounded-md hover:bg-vikasa-espresso-50 transition-colors">
                        <span className="font-medium text-vikasa-espresso">{type.name}</span>
                        <span className="bg-vikasa-espresso-100 text-vikasa-espresso text-xs px-2 py-1 rounded-full">
                          {type.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-100 p-8 bg-vikasa-espresso-50">
              <h3 className="text-xl font-bold text-vikasa-espresso mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Strategy', 'Innovation', 'Digital Transformation', 'Data Analytics', 
                  'Change Management', 'Process Optimization', 'Talent Development', 'Customer Experience', 
                  'Market Trends', 'Financial Planning', 'Technology', 'Remote Work', 'Sustainability', 
                  'Business Growth', 'Risk Management', 'Crisis Leadership'].map((tag, idx) => (
                  <Link 
                    key={idx} 
                    href={`/resource/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white text-vikasa-espresso text-sm px-4 py-2 rounded-full border border-gray-200 hover:bg-vikasa-gold hover:text-white hover:border-vikasa-gold transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 7. Newsletter Archive Section */}
      <section className="py-16 bg-vikasa-gold-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Newsletter Archive Column */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-vikasa-espresso">Newsletter Archive</h2>
                <Link href="/resource/newsletters" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold flex items-center">
                  View All Issues
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              <div className="space-y-4">
                {newsletters.map((newsletter) => (
                  <div key={newsletter.id} className="border border-gray-200 rounded-lg p-5 hover:border-vikasa-gold bg-white transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-vikasa-espresso">{newsletter.title}</h3>
                      <span className="text-xs text-gray-500 bg-vikasa-espresso-50 px-3 py-1 rounded-full">
                        {newsletter.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{newsletter.description}</p>
                    <div className="flex space-x-4">
                      <Link 
                        href={`/resource/newsletters/${newsletter.slug}`}
                        className="text-vikasa-latte hover:text-vikasa-espresso font-semibold text-sm flex items-center"
                      >
                        Read Online
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      <Link 
                        href={`/resource/newsletters/${newsletter.slug}/pdf`}
                        className="text-vikasa-latte hover:text-vikasa-espresso font-semibold text-sm flex items-center"
                      >
                        Download PDF
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-vikasa-gold-50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-vikasa-espresso mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-700 mb-6">
                  Stay informed with our latest insights, resources, and industry updates delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 border border-gray-300 text-vikasa-espresso rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold"
                  />
                  <button className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-6 py-3 rounded-md transition-colors">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  By subscribing, you agree to receive our newsletter and marketing communications. You can unsubscribe at any time.
                </p>
              </div>
            </div>
            
            {/* Community Forum Column */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-vikasa-espresso">Community Forum</h2>
                <Link href="/resource/forum" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold flex items-center">
                  Visit Forum
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-vikasa-espresso mb-2">Active Discussions</h3>
                  <p className="text-gray-600">
                    Join the conversation with fellow professionals and industry experts.
                  </p>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {forumDiscussions.map((discussion) => (
                    <div key={discussion.id} className="p-5 hover:bg-vikasa-espresso-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-vikasa-espresso mb-1">
                            <Link href={`/resource/forum/discussion/${discussion.slug}`} className="hover:text-vikasa-latte">
                              {discussion.title}
                            </Link>
                          </h4>
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <span className="bg-vikasa-espresso text-white px-2 py-1 rounded-full">
                              {discussion.category}
                            </span>
                            <span>Started by {discussion.author}</span>
                            <span>Last active {discussion.lastActive}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                          {discussion.replies} replies
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {discussion.views} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-vikasa-espresso-50 flex flex-col sm:flex-row justify-between items-center">
                  <div className="mb-4 sm:mb-0">
                    <Link 
                      href="/resource/forum/categories" 
                      className="text-vikasa-latte hover:text-vikasa-espresso font-semibold text-sm mr-6"
                    >
                      Browse Categories
                    </Link>
                    <Link 
                      href="/resource/forum/recent" 
                      className="text-vikasa-latte hover:text-vikasa-espresso font-semibold text-sm"
                    >
                      Recent Activity
                    </Link>
                  </div>
                  <Link
                    href="/resource/forum/new-discussion"
                    className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-6 py-2 rounded-md text-sm transition-colors whitespace-nowrap"
                  >
                    Start New Discussion
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-vikasa-espresso mb-4">Join Our Community</h3>
                <p className="text-gray-600 mb-4">
                  Connect with over 10,000 professionals, share insights, ask questions, and collaborate on solutions.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <div className="bg-vikasa-espresso-100 rounded-full w-10 h-10 flex items-center justify-center text-vikasa-espresso font-bold">
                      10K+
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Members</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-vikasa-espresso-100 rounded-full w-10 h-10 flex items-center justify-center text-vikasa-espresso font-bold">
                      500+
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Monthly Discussions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-vikasa-espresso-100 rounded-full w-10 h-10 flex items-center justify-center text-vikasa-espresso font-bold">
                      15+
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Categories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-16 bg-vikasa-espresso text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Personalized Guidance?</h2>
          <p className="text-vikasa-espresso-100 max-w-3xl mx-auto mb-8">
            Our team of expert consultants is ready to help you navigate your specific business challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border border-white hover:bg-white hover:text-vikasa-espresso text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
