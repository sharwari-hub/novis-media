'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2, HardHat, PlusCircle, ExternalLink } from 'lucide-react';

export function ConstructionCaseStudy() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
            <span>High-Ticket Contractor Funnels</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
            Commercial & Residential Construction Platforms
          </h2>

          <p className="text-base sm:text-lg text-[#A5A79B] leading-relaxed">
            High-ticket contractors lose 7-figure deals when their online presence looks like a 2012 DIY brochure. We engineer enterprise-level web platforms that win commercial bids.
          </p>
        </div>

        {/* Case Studies Grid: Apex Build + [Next project] Slot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Active Card: Apex Construction */}
          <div className="rounded-3xl bg-[#131711] border border-[#272E26] hover:border-[#3E7A5C] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#3E7A5C]/20 text-[#4E9672] border border-[#3E7A5C]/40">
                  <HardHat className="w-3.5 h-3.5" />
                  <span>Web Build & Funnel</span>
                </span>
                <span className="text-xs font-mono text-[#A5A79B]">
                  apex.co
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-[#F3F1EA] group-hover:text-[#4E9672] transition-colors">
                  Apex — Enterprise Construction Web Platform
                </h3>
                <p className="text-sm text-[#A5A79B] mt-2 leading-relaxed">
                  Engineered to showcase commercial and residential craftsmanship through interactive project galleries, frictionless quote request flows, and localized service area mapping.
                </p>
              </div>

              {/* Walkthrough Video Embed (9:16 Vertical) — Always on while scrolling */}
              <div className="relative aspect-[9/16] w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden bg-[#0A0C0A] border border-[#272E26]">
                <iframe
                  src="https://www.youtube.com/embed/AoSk_ffPJ5s?autoplay=1&mute=1&loop=1&playlist=AoSk_ffPJ5s&controls=1&modestbranding=1&rel=0&playsinline=1"
                  title="Apex Construction Walkthrough"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Directly Clickable Live Link */}
              <a
                href="https://gleeful-longma-6f4d23.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-[#0A0C0A] border border-[#3E7A5C]/60 hover:border-[#3E7A5C] text-xs font-mono text-[#F3F1EA] transition-all group"
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#3E7A5C] font-bold">Live Site:</span>
                  <span className="text-[#F3F1EA] underline underline-offset-2 truncate">gleeful-longma-6f4d23.netlify.app</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#3E7A5C] group-hover:text-[#4E9672] flex-shrink-0 ml-2" />
              </a>

              <div className="p-4 rounded-xl bg-[#0A0C0A] border border-[#272E26] space-y-2">
                <div className="text-xs font-semibold text-[#F3F1EA]">
                  Platform Capabilities Built:
                </div>
                <div className="text-xs text-[#A5A79B] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E7A5C]" />
                    <span>Dynamic multi-stage project portfolio galleries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E7A5C]" />
                    <span>Direct commercial RFQ (Request for Quote) funnel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E7A5C]" />
                    <span>Sub-second mobile loading speed on job sites</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#272E26] mt-6 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#3E7A5C]">
                Custom Web Platform & RFQ Architecture
              </span>
              <a
                href="https://www.instagram.com/novis.creativemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C6A15B] hover:text-[#D8B26B] transition-colors"
              >
                <span>Inquire For Contractor Sites</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Reserved Slot Card: [Next project] */}
          <div className="rounded-3xl bg-[#131711]/40 border border-dashed border-[#272E26] hover:border-[#3E7A5C] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded bg-[#272E26]/60 text-[#A5A79B] border border-transparent group-hover:border-[#3E7A5C]/40 transition-colors">
                  [Next project]
                </span>
                <span className="text-xs font-mono text-[#A5A79B]">
                  In Development
                </span>
              </div>

              <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#181E16] border border-[#272E26] group-hover:border-[#3E7A5C] group-hover:scale-110 flex items-center justify-center transition-all">
                  <PlusCircle className="w-8 h-8 text-[#A5A79B] group-hover:text-[#3E7A5C] transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#F3F1EA] group-hover:text-[#4E9672] transition-colors">
                  Second Construction Site Build
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A79B] max-w-sm leading-relaxed">
                  Reserved case-study slot for our upcoming luxury residential builder platform. Currently undergoing final QA, mobile speed benchmarking, and client approval.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0C0A]/60 border border-[#272E26]/60 space-y-1.5 text-xs text-[#A5A79B]">
                <div className="font-mono text-[#F3F1EA] font-semibold uppercase text-[11px]">
                  Upcoming Release Features:
                </div>
                <p>Interactive 3D blueprint walkthroughs and client portal integration.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#272E26]/60 mt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-[#A5A79B]">
                Status: Final Build Stage
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A5A79B] group-hover:text-[#F3F1EA] transition-colors"
              >
                <span>Reserve Your Brand Slot</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}