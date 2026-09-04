'use client';

import React, { useState } from 'react';
import { ALL_PORTFOLIO_ITEMS, VideoItem } from '@/data/portfolio';
import { VideoModal } from './VideoModal';
import { AutoPlayVideoCard } from './AutoPlayVideoCard';
import { Sparkles, PlusCircle, ArrowUpRight } from 'lucide-react';

export function VideoPortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'UGC Ad' | 'AI Ad'>('ALL');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = ALL_PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === 'ALL') return true;
    return item.category === activeFilter;
  });

  const handleOpenVideo = (item: VideoItem) => {
    if (item.isPlaceholder) {
      window.location.href = '#contact';
      return;
    }
    setSelectedVideo(item);
    setIsModalOpen(true);
  };

  return (
    <section id="work" className="py-20 md:py-32 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
              <span>Scroll-Active Video Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
              Crafted to stop the thumb. Engineered to convert.
            </h2>
            <p className="text-base sm:text-lg text-[#A5A79B]">
              Scroll through active client campaigns. Videos automatically play as they enter your feed — tap any card to unmute and inspect full performance analytics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#131711] border border-[#272E26] w-fit overflow-x-auto">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'ALL'
                  ? 'bg-[#3E7A5C] text-[#F3F1EA] shadow-sm'
                  : 'text-[#A5A79B] hover:text-[#F3F1EA]'
              }`}
            >
              All Ads ({ALL_PORTFOLIO_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveFilter('UGC Ad')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'UGC Ad'
                  ? 'bg-[#3E7A5C] text-[#F3F1EA] shadow-sm'
                  : 'text-[#A5A79B] hover:text-[#F3F1EA]'
              }`}
            >
              UGC Ads
            </button>
            <button
              onClick={() => setActiveFilter('AI Ad')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilter === 'AI Ad'
                  ? 'bg-[#3E7A5C] text-[#F3F1EA] shadow-sm'
                  : 'text-[#A5A79B] hover:text-[#F3F1EA]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#C6A15B]" />
              <span>AI Ads</span>
            </button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isHorizontal = item.aspectRatio === '16:9';

            if (item.isPlaceholder) {
              return (
                <div
                  key={item.id}
                  onClick={() => handleOpenVideo(item)}
                  className="group relative flex flex-col justify-between rounded-2xl bg-[#131711]/50 border border-dashed border-[#272E26] hover:border-[#3E7A5C] p-5 cursor-pointer transition-all duration-300 min-h-[380px]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded bg-[#272E26]/60 text-[#A5A79B] group-hover:border-[#3E7A5C]/40 border border-transparent transition-colors">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-mono text-[#A5A79B] group-hover:text-[#4E9672] transition-colors">
                        Available Slot
                      </span>
                    </div>

                    <div className="pt-8 text-center flex flex-col items-center justify-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-[#181E16] border border-[#272E26] group-hover:border-[#3E7A5C] group-hover:scale-110 flex items-center justify-center transition-all">
                        <PlusCircle className="w-6 h-6 text-[#A5A79B] group-hover:text-[#3E7A5C] transition-colors" />
                      </div>
                      <h3 className="text-base font-display font-bold text-[#F3F1EA] group-hover:text-[#4E9672] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#A5A79B] max-w-[220px]">
                        {item.hook}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#272E26]/60 flex items-center justify-between text-xs text-[#A5A79B]">
                    <span className="font-mono text-[11px] text-[#3E7A5C] font-semibold">{item.metric}</span>
                    <span className="inline-flex items-center gap-1 group-hover:text-[#F3F1EA] transition-colors font-medium">
                      <span>Reserve Slot</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className={isHorizontal ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <AutoPlayVideoCard
                  item={item}
                  onOpenModal={handleOpenVideo}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Light-dismiss accessible modal player */}
      <VideoModal
        item={selectedVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}