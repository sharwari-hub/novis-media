'use client';

import React from 'react';
import { Sparkles, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

export function KyaSceneCluster() {
  const shorts = [
    {
      id: 'Xe2K1i3mSjM',
      title: 'Diet & Nutrition Pattern Interrupt',
      category: 'AI Avatar Short',
      metrics: 'Pattern Interrupt Hook',
      hook: 'High-contrast visual hook stopping scrollers in the first 0.5 seconds.',
    },
    {
      id: 'UrFmNxvxCi4',
      title: 'Health & Science Urgency Hook',
      category: 'AI Avatar Short',
      metrics: 'Curiosity Gap Script',
      hook: 'Curiosity gap script engineered for algorithmic recommendation.',
    },
    {
      id: '6ZkDaIPB9Ho',
      title: 'Direct-Address Pattern Break',
      category: 'AI Avatar Short',
      metrics: 'Direct-Address Pacing',
      hook: 'Aggressive thumb-stop hook breaking feed trance instantly.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
            <span>Autonomous Content Production Case Study</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
            AI Avatars & Auto-Edited Reels In Action
          </h2>

          <p className="text-base sm:text-lg text-[#A5A79B] leading-relaxed">
            We build a digital AI avatar that looks and sounds like you, then use it to edit and post reels consistently — so your channel never goes quiet, without you needing to film anything yourself.
          </p>
        </div>

        {/* 3 Vertical Shorts Grid (Autoplay on Scroll) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shorts.map((short, idx) => (
            <div
              key={short.id}
              className="rounded-3xl bg-[#131711] border border-[#272E26] hover:border-[#3E7A5C] p-5 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#3E7A5C]/20 text-[#4E9672] border border-[#3E7A5C]/40">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{short.category}</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-[#3E7A5C]">
                    {short.metrics}
                  </span>
                </div>

                {/* 9:16 Vertical Video Embed — Autoplays on Scroll */}
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#0A0C0A] border border-[#272E26]">
                  <iframe
                    src={`https://www.youtube.com/embed/${short.id}?autoplay=1&mute=1&loop=1&playlist=${short.id}&controls=1&modestbranding=1&rel=0&playsinline=1`}
                    title={short.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="px-1 pt-1">
                  <h3 className="text-base font-display font-bold text-[#F3F1EA] group-hover:text-[#4E9672] transition-colors">
                    {short.title}
                  </h3>
                  <p className="text-xs text-[#A5A79B] mt-1.5 leading-relaxed">
                    {short.hook}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#272E26] mt-4 px-1 flex items-center justify-between text-[11px] text-[#A5A79B]">
                <span>Automated AI Pipeline</span>
                <span className="font-mono text-[#3E7A5C] font-semibold">9:16 Reel Format</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Box & Single Gold CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#131711] border border-[#272E26] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-display font-bold text-[#F3F1EA]">
              Ready to automate your social reel output?
            </h4>
            <p className="text-xs sm:text-sm text-[#A5A79B]">
              We train your AI likeness, clone your voice, and deliver 30 edited reels every month.
            </p>
          </div>

          <a
            href="https://www.instagram.com/novis.creativemedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-xs sm:text-sm hover:bg-[#D8B26B] transition-colors flex-shrink-0"
          >
            <span>Launch Your AI Avatar Pipeline</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}