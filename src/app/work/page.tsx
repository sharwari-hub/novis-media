import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { REAL_PORTFOLIO_ITEMS } from '@/data/portfolio';
import { InteriorRedesignCaseStudy } from '@/components/InteriorRedesignCaseStudy';
import { ConstructionCaseStudy } from '@/components/ConstructionCaseStudy';
import { KyaSceneCluster } from '@/components/KyaSceneCluster';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Work & Ad Portfolio | Novis Media',
  description:
    'Browse UGC and AI video ad concepts engineered by Novis Media for modern DTC brands and companies.',
  openGraph: {
    title: 'Work & Ad Portfolio | Novis Media',
    description: 'Explore high-converting UGC and AI ad creatives engineered for modern brands.',
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0A0C0A] py-16 md:py-24 border-b border-[#272E26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
              <span>Case Studies & Creative Directory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
              Ad campaigns engineered for algorithmic momentum.
            </h1>
            <p className="text-lg text-[#A5A79B]">
              Detailed breakdowns of our creative concepts, spec work, and production frameworks across UGC, AI video, web builds, and automated channel management.
            </p>
          </div>

          {/* Grid of Ad Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {REAL_PORTFOLIO_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-2xl bg-[#131711] border border-[#272E26] hover:border-[#3E7A5C] transition-all duration-300 p-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded bg-[#3E7A5C]/15 text-[#4E9672] border border-[#3E7A5C]/30">
                      {item.category === 'AI Ad' && <Sparkles className="w-3 h-3 text-[#3E7A5C]" />}
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-[#A5A79B]">
                      {item.aspectRatio}
                    </span>
                  </div>

                  <h2 className="text-xl font-display font-bold text-[#F3F1EA] group-hover:text-[#4E9672] transition-colors">
                    {item.title}
                  </h2>

                  <div className="p-3.5 rounded-xl bg-[#0A0C0A] border border-[#272E26]">
                    <div className="text-[11px] font-mono text-[#A5A79B] uppercase mb-1">
                      Production Note
                    </div>
                    <div className="text-base font-display font-bold text-[#3E7A5C]">
                      {item.metric}
                    </div>
                  </div>

                  <p className="text-xs text-[#A5A79B] line-clamp-3 italic">
                    {item.hook}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#272E26] mt-6 flex items-center justify-between">
                  <span className="text-xs text-[#A5A79B]">
                    Category: <strong className="text-[#F3F1EA]">{item.client}</strong>
                  </span>

                  {item.slug && (
                    <Link
                      href={`/work/${item.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#C6A15B] hover:text-[#D8B26B] transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Deep-Dive Case Study: Kya Scene Hai AI Avatar Channel Cluster */}
          <div className="mb-20">
            <KyaSceneCluster />
          </div>

          {/* Deep-Dive Case Study: Creative Minds Interior Redesign Before & After */}
          <div className="mb-20">
            <InteriorRedesignCaseStudy />
          </div>

          {/* Deep-Dive Case Study: Apex Construction Build + [Next project] Slot */}
          <div className="mb-20">
            <ConstructionCaseStudy />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}