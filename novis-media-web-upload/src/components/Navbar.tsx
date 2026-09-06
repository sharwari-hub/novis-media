'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NovisLogo } from './NovisLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A0C0A]/85 backdrop-blur-md border-b border-[#272E26] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo paired with wordmark */}
        <NovisLogo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A5A79B]">
          <Link
            href="/#work"
            className="hover:text-[#F3F1EA] transition-colors focus:outline-none focus-visible:text-[#3E7A5C]"
          >
            Work
          </Link>
          <Link
            href="/#process"
            className="hover:text-[#F3F1EA] transition-colors focus:outline-none focus-visible:text-[#3E7A5C]"
          >
            Process
          </Link>
          <Link
            href="/#proof"
            className="hover:text-[#F3F1EA] transition-colors focus:outline-none focus-visible:text-[#3E7A5C]"
          >
            Proof
          </Link>
          <Link
            href="/services"
            className="hover:text-[#F3F1EA] transition-colors focus:outline-none focus-visible:text-[#3E7A5C]"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="hover:text-[#F3F1EA] transition-colors focus:outline-none focus-visible:text-[#3E7A5C]"
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="hover:text-[#F3F1EA] transition-colors focus:outline-none focus-visible:text-[#3E7A5C]"
          >
            About
          </Link>
        </nav>

        {/* Action Button (Gold CTA strictly reserved for action) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://www.instagram.com/novis.creativemedia"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C6A15B] text-[#0A0C0A] font-semibold text-sm hover:bg-[#D8B26B] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0C0A] shadow-sm"
          >
            <span>DM on Instagram</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-[#F3F1EA] hover:bg-[#131711] border border-[#272E26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E7A5C]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#272E26] bg-[#0A0C0A]/95 backdrop-blur-xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3.5 text-base font-medium text-[#A5A79B]">
            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3F1EA] py-1 transition-colors"
            >
              Work & Portfolio
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3F1EA] py-1 transition-colors"
            >
              Our Process
            </Link>
            <Link
              href="/#proof"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3F1EA] py-1 transition-colors"
            >
              Proof & Standards
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3F1EA] py-1 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3F1EA] py-1 transition-colors"
            >
              SEO Guides & Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3F1EA] py-1 transition-colors"
            >
              About Novis Media
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#272E26] flex flex-col gap-3">
            <a
              href="https://www.instagram.com/novis.creativemedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-semibold text-sm hover:bg-[#D8B26B] transition-colors"
            >
              DM @novis.creativemedia
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-[#131711] text-[#F3F1EA] border border-[#272E26] font-medium text-sm hover:border-[#3E7A5C] transition-colors"
            >
              Submit Project Brief
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}