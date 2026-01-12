'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/95 backdrop-blur-md shadow-2xl shadow-primary-600/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Logo size="md" variant="icon" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#problem" className="text-gray-300 hover:text-primary-400 transition-colors font-medium">
              Problem
            </a>
            <a href="#vision" className="text-gray-300 hover:text-primary-400 transition-colors font-medium">
              Vision
            </a>
            <a href="#engine" className="text-gray-300 hover:text-primary-400 transition-colors font-medium">
              Engine
            </a>
            <a href="#impact" className="text-gray-300 hover:text-primary-400 transition-colors font-medium">
              Impact
            </a>
            {/* <a
              href="#contact"
              className="bg-gradient-primary text-white px-6 py-2.5 rounded-lg hover:shadow-glow-primary hover:scale-105 transition-all font-semibold"
            >
              Get Started
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
