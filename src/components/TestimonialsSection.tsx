import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="proof" className="py-20 md:py-28 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#131711] border border-[#3E7A5C]/40 relative overflow-hidden shadow-xl text-center space-y-6">
          {/* Section Pill in Emerald */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0C0A] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
            <HeartHandshake className="w-3.5 h-3.5 text-[#3E7A5C]" />
            <span>A Note on Proof & Partnerships</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-[#F3F1EA] tracking-tight max-w-2xl mx-auto leading-snug">
            "We're a new studio building our first client roster — the work above is real, the results are still being written."
          </h2>

          <p className="text-sm sm:text-base text-[#A5A79B] max-w-xl mx-auto leading-relaxed">
            We don't believe in fabricated case studies or invented quotes. Every piece of work on this site reflects our real creative caliber, production quality, and storytelling standards. Reach out today and be one of our founding partners.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/novis.creativemedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-sm hover:bg-[#D8B26B] transition-colors shadow-sm"
            >
              <span>Partner With Us on Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-6 border-t border-[#272E26] flex items-center justify-center gap-6 text-xs text-[#A5A79B]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3E7A5C]" />
              <span>Direct Founder Collaboration</span>
            </span>
            <span className="text-[#272E26]">|</span>
            <span>No Account Layers</span>
            <span className="text-[#272E26]">|</span>
            <span>Full Creative Transparency</span>
          </div>
        </div>
      </div>
    </section>
  );
}