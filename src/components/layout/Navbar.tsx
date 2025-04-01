"use client"

import Link from 'next/link';
import VikasaLogo from '../../assets/images/Vikasa Horizontal Logo_1@2x.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Close mobile menu when route changes or on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    setIsMenuOpen(false); // Close when route changes
    
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-vikasa-espresso flex items-center">
              <Image 
                src={VikasaLogo} 
                alt="Vikasa Logo" 
                width={160} 
                height={50} 
                className="h-12 w-auto" 
                priority
              />
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-8">
              <Link 
                href="/" 
                className="group relative px-3 py-2 text-sm font-medium text-vikasa-espresso hover:text-vikasa-latte transition-colors duration-300"
              >
                <span>Home</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-vikasa-gold transform origin-left transition-all duration-300 ease-out 
                  ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
                {isActive('/') && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-vikasa-gold rounded-full"></span>
                )}
              </Link>
              
              <Link 
                href="/about" 
                className="group relative px-3 py-2 text-sm font-medium text-vikasa-espresso hover:text-vikasa-latte transition-colors duration-300"
              >
                <span>About</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-vikasa-gold transform origin-left transition-all duration-300 ease-out 
                  ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
                {isActive('/about') && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-vikasa-gold rounded-full"></span>
                )}
              </Link>
              
              <Link 
                href="/service" 
                className="group relative px-3 py-2 text-sm font-medium text-vikasa-espresso hover:text-vikasa-latte transition-colors duration-300"
              >
                <span>Services</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-vikasa-gold transform origin-left transition-all duration-300 ease-out 
                  ${isActive('/service') ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
                {isActive('/service') && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-vikasa-gold rounded-full"></span>
                )}
              </Link>
              <Link 
                href="/resource" 
                className="group relative px-3 py-2 text-sm font-medium text-vikasa-espresso hover:text-vikasa-latte transition-colors duration-300"
              >
                <span>Resources</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-vikasa-gold transform origin-left transition-all duration-300 ease-out 
                  ${isActive('/resource') ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
                {isActive('/resource') && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-vikasa-gold rounded-full"></span>
                )}
              </Link>
              
              <Link 
                href="/contact" 
                className="relative overflow-hidden px-4 py-2 rounded-md text-sm font-medium bg-vikasa-espresso text-white transition-all duration-300 hover:bg-vikasa-latte shadow-sm hover:shadow group"
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-vikasa-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              type="button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-vikasa-espresso hover:text-vikasa-latte hover:bg-vikasa-gold/10 transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                // X icon when menu is open
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon when menu is closed
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          <Link 
            href="/" 
            className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
              isActive('/') 
                ? 'bg-gradient-to-r from-vikasa-gold/20 to-transparent text-vikasa-espresso border-l-4 border-vikasa-gold' 
                : 'text-vikasa-espresso hover:text-vikasa-latte hover:bg-vikasa-gold/5 border-l-4 border-transparent'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <span className={`mr-2 h-1.5 w-1.5 rounded-full ${isActive('/') ? 'bg-vikasa-gold' : 'bg-transparent'}`}></span>
              Home
            </div>
          </Link>
          <Link 
            href="/about" 
            className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
              isActive('/about') 
                ? 'bg-gradient-to-r from-vikasa-gold/20 to-transparent text-vikasa-espresso border-l-4 border-vikasa-gold' 
                : 'text-vikasa-espresso hover:text-vikasa-latte hover:bg-vikasa-gold/5 border-l-4 border-transparent'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <span className={`mr-2 h-1.5 w-1.5 rounded-full ${isActive('/about') ? 'bg-vikasa-gold' : 'bg-transparent'}`}></span>
              About
            </div>
          </Link>
          <Link 
            href="/projects" 
            className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
              isActive('/projects') 
                ? 'bg-gradient-to-r from-vikasa-gold/20 to-transparent text-vikasa-espresso border-l-4 border-vikasa-gold' 
                : 'text-vikasa-espresso hover:text-vikasa-latte hover:bg-vikasa-gold/5 border-l-4 border-transparent'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <span className={`mr-2 h-1.5 w-1.5 rounded-full ${isActive('/projects') ? 'bg-vikasa-gold' : 'bg-transparent'}`}></span>
              Projects
            </div>
          </Link>
          <Link 
            href="/contact" 
            className="block px-3 py-3 bg-vikasa-espresso text-white hover:bg-vikasa-latte rounded-md text-base font-medium transition-all duration-200 shadow-sm relative overflow-hidden group"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 bg-vikasa-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
} 