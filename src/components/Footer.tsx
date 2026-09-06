import React from 'react';
import Link from 'next/link';
import { NovisLogo } from './NovisLogo';

export function Footer() {
  return (
    <footer className="bg-[#0A0C0A] border-t border-[#272E26] py-16 text-[#A5A79B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#272E26]">
          {/* Brand Column: Logo mark with tagline directly under it */}
          <div className="md:col-span-5 space-y-4">
            <NovisLogo size="lg" showTagline={true} />

            <p className="text-sm text-[#A5A79B] max-w-sm pt-2 leading-relaxed">
              Performance video creative engine for DTC brands, e-commerce, and high-growth modern products. We engineer high-retention UGC and hyper-realistic AI ads.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#F3F1EA]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
                <span>Onboarding Q3 Cohort</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-[#F3F1EA]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#work" className="hover:text-[#F3F1EA] transition-colors">
                  Video Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-[#F3F1EA] transition-colors">
                  Production Process
                </Link>
              </li>
              <li>
                <Link href="/#proof" className="hover:text-[#F3F1EA] transition-colors">
                  Proof & Standards
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F3F1EA] transition-colors">
                  Agency Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F3F1EA] transition-colors">
                  SEO Resource Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F3F1EA] transition-colors">
                  About Novis Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Direct Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-[#F3F1EA]">
              Direct Inquiries
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="block text-xs text-[#A5A79B]">Primary Contact Channel:</span>
                <a
                  href="https://www.instagram.com/novis.creativemedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#F3F1EA] hover:text-[#4E9672] transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram DM (@novis.creativemedia)</span>
                </a>
              </li>
              <li className="text-xs text-[#A5A79B] pt-1 leading-relaxed">
                Founder-monitored inbox for briefs, audits, and partnership discussions. Guaranteed reply within 4 hours.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A79B]">
          <p>© {new Date().getFullYear()} Novis Media Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#3E7A5C]">Black, Gold & Emerald</span>
            <span>UGC & AI Video Production</span>
          </div>
        </div>
      </div>
    </footer>
  );
}