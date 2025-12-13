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
    <header className="bg-[#1A2332]/95 backdrop-blur-md border-b border-[#FFD700]/20 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-36 h-8 md:w-56 md:h-14">
              <Image
                src="/logos/premiumcasinos-logo.svg"
                alt={siteConfig.name}
                fill
                className="object-contain group-hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#B8C5D6] hover:text-[#FFD700] transition-all duration-300 hover:scale-105 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-[#B8C5D6] hover:text-[#FFD700] transition-all duration-300 hover:scale-105 font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-[#B8C5D6] hover:text-[#FFD700] transition-all duration-300 hover:scale-105 font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/privacy" className="text-[#B8C5D6] hover:text-[#FFD700] transition-all duration-300 hover:scale-105 font-medium relative group">
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/terms" className="text-[#B8C5D6] hover:text-[#FFD700] transition-all duration-300 hover:scale-105 font-medium relative group">
              Terms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* 18+ Badge and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* 18+ Badge */}
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC929] border-2 border-[#FFD700] shadow-lg shadow-[#FFD700]/50">
              <span className="text-[#1A2332] font-bold text-xs md:text-sm">18+</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-[#B8C5D6] hover:text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1A2332] border-t border-[#FFD700]/30">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#B8C5D6] hover:text-[#FFD700] hover:bg-[#FFD700]/20 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#B8C5D6] hover:text-[#FFD700] hover:bg-[#FFD700]/20 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#B8C5D6] hover:text-[#FFD700] hover:bg-[#FFD700]/20 rounded-lg transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#B8C5D6] hover:text-[#FFD700] hover:bg-[#FFD700]/20 rounded-lg transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={closeMenu}
                className="block px-3 py-2 text-[#B8C5D6] hover:text-[#FFD700] hover:bg-[#FFD700]/20 rounded-lg transition-colors"
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
