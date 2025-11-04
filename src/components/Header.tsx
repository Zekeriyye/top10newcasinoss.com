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
    <header className="bg-gradient-to-r from-[#1E293B] to-[#111827] border-b border-[#1E3A8A]/30 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-48 h-12">
              <Image
                src="/logos/winfastcasinos-new-logo.svg"
                alt={siteConfig.name}
                fill
                className="object-contain group-hover:opacity-90 transition-opacity"
              />
            </div>
            {/* 18+ Badge */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] border-2 border-[#3B82F6] shadow-lg">
              <span className="text-white font-bold text-sm">18+</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 font-medium">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 font-medium">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 font-medium">
              Terms
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#D4AF37] hover:bg-[#1E3A8A]/20 transition-colors"
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1E293B] border-t border-[#1E3A8A]/30">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-[#D4AF37] hover:bg-[#1E3A8A]/20 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-[#D4AF37] hover:bg-[#1E3A8A]/20 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-[#D4AF37] hover:bg-[#1E3A8A]/20 rounded-lg transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-[#D4AF37] hover:bg-[#1E3A8A]/20 rounded-lg transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-[#D4AF37] hover:bg-[#1E3A8A]/20 rounded-lg transition-colors"
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
