import React from 'react';
import { TESTIMONIALS } from '@/data/portfolio';
import { Quote, Sparkles } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
            <span>Partner Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
            Loved by founders who care about unit economics.
          </h2>
          <p className="text-base sm:text-lg text-[#A5A79B]">
            Real feedback from CMOs and growth leaders running 7-figure and 8-figure monthly ad spend.
          </p>
        </div>

        {/* Testimonials Grid (Emerald Accent Borders, No Carousel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-[#131711] border border-[#3E7A5C]/40 hover:border-[#3E7A5C] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#3E7A5C]/15 text-[#4E9672] border border-[#3E7A5C]/30">
                    {item.category}
                  </span>
                  <Quote className="w-6 h-6 text-[#3E7A5C]/40 group-hover:text-[#3E7A5C] transition-colors" />
                </div>

                <p className="text-base text-[#F3F1EA] leading-relaxed font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#272E26] mt-8 flex items-center justify-between">
                <div>
                  <div className="text-sm font-display font-bold text-[#F3F1EA]">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#A5A79B]">
                    {item.role}, <span className="text-[#F3F1EA]/80">{item.company}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-[#3E7A5C] px-2.5 py-1 rounded bg-[#0A0C0A] border border-[#3E7A5C]/30">
                    {item.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}