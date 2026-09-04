'use client';

import React from 'react';
import { ArrowUpRight, AlertCircle, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

export function InteriorRedesignCaseStudy() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
              <span>Concept / Spec Redesign</span>
            </span>
            <span className="text-xs font-mono text-[#A5A79B] border border-[#272E26] px-2.5 py-0.5 rounded">
              Speculative Brand Audit
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
            Creative Minds Interior Designer — Concept Redesign
          </h2>

          <p className="text-lg sm:text-xl text-[#F3F1EA] font-medium leading-relaxed">
            "12+ years of real client trust, undersold by a generic auto-generated website — here's what it could look like instead."
          </p>

          <p className="text-sm text-[#A5A79B]">
            A direct contrast between an auto-templated presence and an elevated, luxury-grade web funnel engineered to match real-world craftsmanship.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards (Videos always on while scrolling + clickable links) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* BEFORE CARD */}
          <div className="rounded-3xl bg-[#131711] border border-[#272E26] p-6 sm:p-8 space-y-6 transition-all">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-md bg-[#272E26] text-[#A5A79B] text-xs font-mono font-bold uppercase tracking-wider">
                BEFORE — Existing Site
              </span>
              <span className="text-[11px] font-mono text-amber-500">
                Low-Converting
              </span>
            </div>

            {/* Video Walkthrough (Always on / autoplays on scroll) */}
            <div className="relative aspect-[9/16] w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden bg-[#0A0C0A] border border-[#272E26]">
              <iframe
                src="https://www.youtube.com/embed/sn-m60UAYBU?autoplay=1&mute=1&loop=1&playlist=sn-m60UAYBU&controls=1&modestbranding=1&rel=0&playsinline=1"
                title="Creative Minds Interior - Before Walkthrough"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2.5 text-xs text-[#A5A79B] bg-[#0A0C0A] p-4 rounded-xl border border-[#272E26]">
                <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>
                  Current site is an auto-generated template on a free subdomain with keyword-spam service listings and unedited Google Business photos.
                </span>
              </div>

              {/* Clickable Original Link */}
              <a
                href="https://creative-minds-interior.grexa.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-[#0A0C0A] border border-[#272E26] hover:border-[#3E7A5C] text-xs font-mono text-[#F3F1EA] transition-all group"
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#A5A79B]">Link:</span>
                  <span className="text-[#F3F1EA] underline underline-offset-2 truncate">creative-minds-interior.grexa.site</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#A5A79B] group-hover:text-[#F3F1EA] flex-shrink-0 ml-2" />
              </a>
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="rounded-3xl bg-[#131711] border border-[#3E7A5C] ring-1 ring-[#3E7A5C]/40 p-6 sm:p-8 space-y-6 transition-all shadow-xl">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#3E7A5C]/25 text-[#4E9672] text-xs font-mono font-bold uppercase tracking-wider border border-[#3E7A5C]/40">
                <Sparkles className="w-3 h-3 text-[#3E7A5C]" />
                <span>AFTER — Novis Concept Redesign</span>
              </span>
              <span className="text-[11px] font-mono text-[#3E7A5C] font-semibold">
                Luxury Editorial UX
              </span>
            </div>

            {/* Video Walkthrough (Always on / autoplays on scroll) */}
            <div className="relative aspect-[9/16] w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden bg-[#0A0C0A] border border-[#272E26]">
              <iframe
                src="https://www.youtube.com/embed/L9o83FcKx1Q?autoplay=1&mute=1&loop=1&playlist=L9o83FcKx1Q&controls=1&modestbranding=1&rel=0&playsinline=1"
                title="Creative Minds Interior - After Redesign Walkthrough"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2.5 text-xs text-[#F3F1EA] bg-[#0A0C0A] p-4 rounded-xl border border-[#3E7A5C]/30">
                <CheckCircle2 className="w-4 h-4 text-[#3E7A5C] flex-shrink-0 mt-0.5" />
                <span>
                  Bespoke editorial aesthetic, curated portfolio gallery, and conversion-focused consult booking flow that instantly justifies premium five-figure design retainers.
                </span>
              </div>

              {/* Clickable Live Redesign Link */}
              <a
                href="https://profound-moxie-d64e35.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-[#0A0C0A] border border-[#3E7A5C]/60 hover:border-[#3E7A5C] text-xs font-mono text-[#F3F1EA] transition-all group"
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#3E7A5C] font-bold">Live Prototype:</span>
                  <span className="text-[#F3F1EA] underline underline-offset-2 truncate">profound-moxie-d64e35.netlify.app</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#3E7A5C] group-hover:text-[#4E9672] flex-shrink-0 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Action Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#131711] border border-[#272E26] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A5A79B] space-y-1">
            <p>
              <strong className="text-[#F3F1EA]">Notice:</strong> This is a conceptual spec redesign created by Novis Media to demonstrate how established service businesses can multiply their perceived value online.
            </p>
          </div>

          <a
            href="https://www.instagram.com/novis.creativemedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-xs sm:text-sm hover:bg-[#D8B26B] transition-colors flex-shrink-0"
          >
            <span>Request A Spec Redesign Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}