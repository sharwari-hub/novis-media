import React from 'react';
import { ArrowUpRight, Lock, Sparkles } from 'lucide-react';

export function ScarcitySection() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#131711] border border-[#272E26] relative overflow-hidden">
          {/* Subtle Emerald hairline accent on top */}
          <div className="absolute top-0 inset-x-0 h-1 bg-[#3E7A5C]" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0C0A] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#3E7A5C] animate-pulse" />
                <span>Production Capacity Strict Policy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
                We only partner with 4 brands each month.
              </h2>

              <p className="text-sm sm:text-base text-[#A5A79B] leading-relaxed">
                To protect creative caliber and ensure direct founder-level optimization on every hook, we cap our active intake. We do not operate a cookie-cutter assembly line.
              </p>

              {/* Slot Tracker Bar in Emerald */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#F3F1EA] font-semibold">Active Cohort Allocation</span>
                  <span className="text-[#3E7A5C] font-bold">2 of 4 Spots Remaining</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#0A0C0A] border border-[#272E26] overflow-hidden">
                  <div className="h-full bg-[#3E7A5C] rounded-full w-1/2" />
                </div>
              </div>
            </div>

            {/* The single Gold "act now" CTA button for this section */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <a
                href="https://www.instagram.com/novis.creativemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-sm sm:text-base hover:bg-[#D8B26B] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] shadow-sm"
              >
                <span>Apply for Cohort Access</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="text-[11px] text-[#A5A79B] text-center sm:text-left mt-2 font-mono">
                Average approval & review time: ~4 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}