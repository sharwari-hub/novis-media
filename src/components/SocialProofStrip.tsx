import React from 'react';
import { Sparkles, Video, Bot, Share2, Layout, Zap, CheckCircle2 } from 'lucide-react';

export function SocialProofStrip() {
  const serviceItems = [
    { title: 'Performance UGC Ads', icon: Video, tag: 'High ROAS' },
    { title: 'AI-Generated Commercials', icon: Sparkles, tag: 'Hollywood-Grade' },
    { title: 'AI Avatars & Auto-Edited Reels', icon: Bot, tag: 'Channel Autopilot' },
    { title: 'Social Media Management', icon: Share2, tag: 'Organic Growth' },
    { title: 'High-Converting Web & Funnel Design', icon: Layout, tag: 'Conversion CRO' },
    { title: 'Sub-1s Hook Architecture', icon: Zap, tag: 'Algorithmic' },
    { title: 'Direct-Response Scripting', icon: CheckCircle2, tag: 'Battle-Tested' },
  ];

  // Duplicate the list so it loops seamlessly
  const marqueeItems = [...serviceItems, ...serviceItems, ...serviceItems];

  return (
    <section className="bg-[#0A0C0A] border-b border-[#272E26] py-6 overflow-hidden relative">
      {/* Left/Right Vignette gradients for seamless edge fading */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0C0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0C0A] to-transparent z-10 pointer-events-none" />

      {/* Infinite Moving Marquee */}
      <div className="animate-marquee flex items-center gap-6">
        {marqueeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#131711] border border-[#272E26] hover:border-[#3E7A5C] transition-colors flex-shrink-0"
            >
              <div className="p-1.5 rounded-lg bg-[#0A0C0A] text-[#3E7A5C]">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-display font-bold text-[#F3F1EA] tracking-wide whitespace-nowrap">
                {item.title}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7A5C]" />
              <span className="text-[10px] font-mono uppercase text-[#4E9672] font-semibold tracking-wider whitespace-nowrap">
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}