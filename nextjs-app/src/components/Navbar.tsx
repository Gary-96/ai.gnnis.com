"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              GNNIS<span className="text-teal-500">AI</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">AI Tools</Link>
            <Link href="/prompts" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Prompts</Link>
            <Link href="/skills" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Skills</Link>
          </div>

          {/* Right side icons & language switch */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Icon */}
            <Link href="/search" className="text-gray-400 hover:text-white transition-colors" aria-label="Search">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
            </Link>
            {/* Language Switch Placeholder */}
            <div className="flex items-center">
              <button className="text-xs border border-gray-600 rounded-md px-2 py-1 text-gray-300 hover:bg-gray-800 transition-colors">
                EN / ZH
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">AI Tools</Link>
            <Link href="/prompts" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Prompts</Link>
            <Link href="/skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Skills</Link>
            
            <div className="pt-4 mt-4 border-t border-gray-800 flex items-center justify-between px-3">
               <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                 <svg width="20" height="20" className="mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
                 Search
               </button>
               <button className="text-sm border border-gray-600 rounded-md px-3 py-1 text-gray-300 hover:bg-gray-800 transition-colors">
                EN / ZH
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
