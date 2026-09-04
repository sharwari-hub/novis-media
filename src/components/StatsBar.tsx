import React from 'react';
import { STATS_DATA } from '@/data/portfolio';

export function StatsBar() {
  return (
    <section id="results" className="py-20 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section kicker in Emerald */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
            <span>Verifiable Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
            We don't sell vanity impressions. We scale cash collected.
          </h2>
          <p className="text-sm sm:text-base text-[#A5A79B]">
            Aggregated performance metrics across our DTC brand portfolio in paid Meta, TikTok, and Shorts campaigns.
          </p>
        </div>

        {/* 4 Large Emerald Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#131711] border border-[#272E26] hover:border-[#3E7A5C]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-display font-black text-[#3E7A5C] tracking-tight mb-2 group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-[#F3F1EA] mb-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs text-[#A5A79B] pt-4 border-t border-[#272E26] mt-4">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}