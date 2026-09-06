import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-[#0A0C0A] border-b border-[#272E26] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-16 md:p-20 rounded-3xl bg-[#131711] border border-[#272E26] shadow-2xl relative space-y-8">
          {/* Section Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0C0A] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
            <span>Scale Your Creative Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#F3F1EA] tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to turn scroll fatigue into predictable ROAS?
          </h2>

          <p className="text-base sm:text-lg text-[#A5A79B] max-w-2xl mx-auto leading-relaxed">
            Send us your product URL and current ad performance bottlenecks. We will review your account and return 3 custom angle concepts before you commit a single dollar.
          </p>

          {/* ONE CLEAR GOLD CTA BUTTON (no competing links) */}
          <div className="pt-4 flex justify-center">
            <a
              href="https://www.instagram.com/novis.creativemedia"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-base sm:text-lg hover:bg-[#D8B26B] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] shadow-lg"
            >
              <span>DM Us on Instagram (@novis.creativemedia)</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <p className="text-xs text-[#A5A79B] font-mono pt-2">
            Direct founder responses within 4 hours. No sales reps, no pitches.
          </p>
        </div>
      </div>
    </section>
  );
}