'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-[#1A1A2E]/95 backdrop-blur-md border-b border-[#8B5CF6]/30 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo and Domain */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Card and Chip Icons */}
            <div className="flex items-center gap-2">
              {/* Playing Card */}
              <div className="w-10 h-14 md:w-12 md:h-16 bg-[#1A1A2E] border-2 border-[#8B5CF6] rounded-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#8B5CF6] text-xs md:text-sm font-bold">A</div>
                  <div className="text-[#06B6D4] text-lg md:text-xl">♠</div>
                </div>
              </div>
              
              {/* Casino Chip */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A1A2E] border-2 border-[#8B5CF6] flex items-center justify-center relative">
                <div className="w-full h-full rounded-full border border-[#06B6D4] flex items-center justify-center">
                  <span className="text-[#06B6D4] text-sm md:text-base font-bold">£</span>
                </div>
              </div>
            </div>
            
            {/* Domain Name */}
            <div className="hidden md:block">
              <div className="text-[#8B5CF6] font-bold text-lg md:text-xl">
                top10newcasinoss.com
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#CBD5E1] hover:text-[#8B5CF6] transition-all duration-300 hover:scale-105 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-[#CBD5E1] hover:text-[#8B5CF6] transition-all duration-300 hover:scale-105 font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-[#CBD5E1] hover:text-[#8B5CF6] transition-all duration-300 hover:scale-105 font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/privacy" className="text-[#CBD5E1] hover:text-[#8B5CF6] transition-all duration-300 hover:scale-105 font-medium relative group">
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/terms" className="text-[#CBD5E1] hover:text-[#8B5CF6] transition-all duration-300 hover:scale-105 font-medium relative group">
              Terms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* 18+ Badge and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* 18+ Badge */}
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] border-2 border-[#8B5CF6] shadow-lg shadow-[#8B5CF6]/50">
              <span className="text-white font-bold text-xs md:text-sm">18+</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-[#CBD5E1] hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/20 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1A1A2E] border-t border-[#8B5CF6]/30">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#CBD5E1] hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/20 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#CBD5E1] hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/20 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#CBD5E1] hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/20 rounded-lg transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#CBD5E1] hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/20 rounded-lg transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#CBD5E1] hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/20 rounded-lg transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
