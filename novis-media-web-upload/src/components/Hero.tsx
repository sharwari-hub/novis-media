'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export function Hero() {

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Outcome Copy & Conversion Moment */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8">
            {/* Section kicker / label in Emerald */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-[#3E7A5C] animate-pulse" />
              <span>Performance UGC & AI Ads Agency</span>
            </div>

            {/* Exactly One H1 for the homepage */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F3F1EA] tracking-tight leading-[1.08]">
              We engineer scroll-stopping short-form ads that <span className="text-[#F3F1EA] border-b-2 border-[#3E7A5C]">print ROAS</span>.
            </h1>

            {/* Tagline as secondary line in hero without overuse */}
            <p className="text-lg sm:text-xl text-[#A5A79B] max-w-2xl font-normal leading-relaxed">
              <span className="text-[#F3F1EA] font-medium">Small spark, big reach.</span> We synthesize raw, native UGC hooks with hyper-realistic AI video generation to build high-converting creative engines for internet-native DTC brands.
            </p>

            {/* Value Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#F3F1EA]">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E7A5C]" />
                <span>Sub-1s hook retention frameworks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E7A5C]" />
                <span>Zero bloated agency overhead</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E7A5C]" />
                <span>10-14 day rapid creative turnaround</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E7A5C]" />
                <span>Direct founder-level creative oversight</span>
              </div>
            </div>

            {/* The single Gold "act now" CTA moment for the hero */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://www.instagram.com/novis.creativemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-base hover:bg-[#D8B26B] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0C0A]"
              >
                <span>Claim Your Creative Batch</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="#work"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-[#131711] text-[#F3F1EA] border border-[#272E26] hover:border-[#3E7A5C] text-sm font-medium transition-colors"
              >
                Explore Proven Work ↓
              </Link>
            </div>

            {/* Social proof whisper */}
            <div className="flex items-center gap-3 pt-2 text-xs text-[#A5A79B]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3E7A5C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3E7A5C]" />
              </span>
              <span>Now taking on our founding cohort of brand partners.</span>
            </div>
          </div>

          {/* Right Column: Very First Video (from Kya Scene Hai) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-[#131711] border border-[#272E26] rounded-3xl p-3 shadow-2xl transition-all duration-300 hover:border-[#3E7A5C]/60">
              {/* Top pill inside card */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#272E26] mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3E7A5C] animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5A79B]">
                    Live Hook Engine
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#3E7A5C]/20 text-[#4E9672] border border-[#3E7A5C]/40 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>AI Reel</span>
                </span>
              </div>

              {/* Vertical Video Viewport — Kya Scene Hai Top Viral Reel */}
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#0A0C0A] border border-[#272E26]">
                <iframe
                  src="https://www.youtube.com/embed/Xe2K1i3mSjM?autoplay=1&mute=1&loop=1&playlist=Xe2K1i3mSjM&controls=1&modestbranding=1&rel=0&playsinline=1"
                  title="Featured AI Production Reel"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Floating Metric Badge */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0A0C0A]/95 via-[#0A0C0A]/50 to-transparent pointer-events-none">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[#F3F1EA] line-clamp-1">
                      Viral Retention & Pattern Interrupt
                    </p>
                    <p className="text-[11px] font-mono text-[#3E7A5C] font-bold">
                      Sub-1s Hook Architecture
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] text-[#A5A79B]">
                <span>Tested on Meta & TikTok Reels</span>
                <span className="font-mono text-[#F3F1EA]">9:16 Native Format</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}