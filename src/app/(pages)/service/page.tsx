"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'advisory', 'academy'
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section with Overview */}
      <section className="bg-vikasa-espresso-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-vikasa-espresso">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Comprehensive solutions to transform your business through expert guidance and specialized training programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-vikasa-espresso text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Services
              </button>
              <button 
                onClick={() => setActiveTab('advisory')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'advisory' 
                    ? 'bg-vikasa-espresso text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Advisory Services
              </button>
              <button 
                onClick={() => setActiveTab('academy')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'academy' 
                    ? 'bg-vikasa-espresso text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Academy Programs
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-vikasa-espresso/5 p-8 rounded-xl border border-vikasa-espresso">
                <div className="w-16 h-16 bg-vikasa-espresso/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-vikasa-espresso">Advisory Services</h2>
                <p className="text-black mb-6">
                  Expert guidance to optimize your business strategy, streamline operations, and accelerate growth. Our advisors bring decades of experience to help you navigate complex challenges.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-latte mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">Tailored strategic solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-latte mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">Expert industry insights</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-latte mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">Measurable business outcomes</span>
                  </li>
                </ul>
                <button
                  onClick={() => setActiveTab('advisory')}
                  className="text-vikasa-latte hover:text-vikasa-latte font-medium inline-flex items-center transition-colors"
                >
                  Explore Advisory Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <div className="bg-vikasa-gold/5 p-8 rounded-xl border border-vikasa-gold">
                <div className="w-16 h-16 bg-vikasa-gold/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-vikasa-espresso">Academy Programs</h2>
                <p className="text-black mb-6">
                  Specialized training programs designed to elevate your team's skills and capabilities. Our academy offers practical, results-oriented learning experiences.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">Industry-leading instructors</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">Practical, hands-on learning</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vikasa-gold mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">Recognized certifications</span>
                  </li>
                </ul>
                <button
                  onClick={() => setActiveTab('academy')}
                  className="text-vikasa-latte hover:text-vikasa-latte font-medium inline-flex items-center transition-colors"
                >
                  Explore Academy Programs
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* This is a placeholder for services content - we'll add more in subsequent edits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-vikasa-espresso">
            {activeTab === 'all' && 'Our Complete Service Offerings'}
            {activeTab === 'advisory' && 'Advisory Services'}
            {activeTab === 'academy' && 'Academy Programs'}
          </h2>
          
          {/* Advisory Services */}
          {(activeTab === 'all' || activeTab === 'advisory') && (
            <div className="mb-16">
              {activeTab === 'all' && (
                <h3 className="text-2xl font-bold mb-6 text-vikasa-latte">Advisory Services</h3>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Business Strategy Card */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
                  <div className="h-3 bg-vikasa-espresso"></div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-vikasa-espresso/10 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vikasa-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-vikasa-espresso">Business Strategy Consulting</h4>
                    <p className="text-black mb-4">
                      Develop a clear roadmap for sustainable growth and competitive advantage in your market.
                    </p>
                    
                    <h5 className="text-sm font-bold text-vikasa-gold mb-2">KEY BENEFITS</h5>
                    <ul className="space-y-1 mb-4 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black">Clear strategic direction</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black">Competitive market positioning</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black">Measurable business objectives</span>
                      </li>
                    </ul>
                    
                    <h5 className="text-sm font-bold text-vikasa-gold mb-2">EXAMPLE OUTCOME</h5>
                    <p className="text-sm text-black italic mb-4">
                      "Achieved 35% revenue growth within 12 months through strategic market repositioning and customer segmentation."
                    </p>
                    
                    <Link href="/contact" className="text-vikasa-espresso hover:text-vikasa-latte font-medium text-sm inline-flex items-center transition-colors">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Process Optimization Card */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
                  <div className="h-3 bg-vikasa-latte"></div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-vikasa-latte/10 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vikasa-latte" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-vikasa-espresso">Process Optimization</h4>
                    <p className="text-black mb-4">
                      Streamline operations, eliminate inefficiencies, and implement best practices across your organization.
                    </p>
                    
                    <h5 className="text-sm font-bold text-vikasa-gold mb-2">KEY BENEFITS</h5>
                    <ul className="space-y-1 mb-4 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black">Increased operational efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black">Reduced operational costs</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black">Improved quality and consistency</span>
                      </li>
                    </ul>
                    
                    <h5 className="text-sm font-bold text-vikasa-gold mb-2">EXAMPLE OUTCOME</h5>
                    <p className="text-sm text-black italic mb-4">
                      "Reduced processing time by 42% and operational costs by 28% through workflow optimization and automation."
                    </p>
                    
                    <Link href="/contact" className="text-vikasa-espresso hover:text-vikasa-latte font-medium text-sm inline-flex items-center transition-colors">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Digital Transformation Card */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
                  <div className="h-3 bg-vikasa-gold"></div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-vikasa-gold/10 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-vikasa-espresso">Digital Transformation</h4>
                    <p className="text-black mb-4">
                      Leverage technology to reimagine your business model, customer experience, and operational processes.
                    </p>
                    
                    <h5 className="text-sm font-bold text-vikasa-gold mb-2">KEY BENEFITS</h5>
                    <ul className="space-y-1 mb-4 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black">Enhanced digital capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black">Improved customer experiences</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vikasa-gold mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black">Data-driven decision making</span>
                      </li>
                    </ul>
                    
                    <h5 className="text-sm font-bold text-vikasa-gold mb-2">EXAMPLE OUTCOME</h5>
                    <p className="text-sm text-gray-600 italic mb-4">
                      "Increased digital sales by 156% and customer satisfaction by 48% through implementation of new digital channels and systems."
                    </p>
                    
                    <Link href="/contact" className="text-vikasa-espresso hover:text-vikasa-latte font-medium text-sm inline-flex items-center transition-colors">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Academy Programs - placeholder for now */}
          {(activeTab === 'all' || activeTab === 'academy') && (
            <div>
              {activeTab === 'all' && (
                <h3 className="text-2xl font-bold mb-6 text-vikasa-gold">Academy Programs</h3>
              )}
              
              <div className="p-12 bg-white rounded-lg shadow-sm text-center">
                <p className="text-lg text-gray-600">
                  Academy Program details will be added in the next implementation phase.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Service Delivery Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-vikasa-espresso">Our Service Delivery Approach</h2>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-vikasa-espresso text-white flex items-center justify-center text-2xl font-bold">1</div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-bold mb-2 text-vikasa-espresso">Discovery & Assessment</h3>
                  <p className="text-gray-600">
                    We begin with a comprehensive analysis of your current situation, challenges, and objectives to develop a clear understanding of your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-vikasa-latte text-white flex items-center justify-center text-2xl font-bold">2</div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-bold mb-2 text-vikasa-espresso">Strategic Planning</h3>
                  <p className="text-gray-600">
                    Our team develops a tailored solution and implementation roadmap designed to address your specific challenges and achieve your goals.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-vikasa-gold text-vikasa-espresso flex items-center justify-center text-2xl font-bold">3</div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-bold mb-2 text-vikasa-espresso">Implementation & Support</h3>
                  <p className="text-gray-600">
                    We work collaboratively with your team to implement solutions, providing guidance, training, and support throughout the process.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-vikasa-espresso text-white flex items-center justify-center text-2xl font-bold">4</div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-bold mb-2 text-vikasa-espresso">Measurement & Optimization</h3>
                  <p className="text-gray-600">
                    We track progress against key metrics, making adjustments as needed to ensure optimal results and sustained success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-vikasa-espresso text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how our services can help you achieve your goals.
          </p>
          <Link 
            href="/contact" 
            className="bg-vikasa-gold text-vikasa-espresso hover:bg-white px-8 py-3 rounded-md text-lg font-medium inline-block transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}