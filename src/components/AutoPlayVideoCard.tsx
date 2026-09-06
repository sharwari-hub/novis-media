'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';
import { VideoItem } from '@/data/portfolio';

interface AutoPlayVideoCardProps {
  item: VideoItem;
  onOpenModal: (item: VideoItem) => void;
  aspectRatioClass?: string;
  isPriority?: boolean;
}

export function AutoPlayVideoCard({
  item,
  onOpenModal,
  aspectRatioClass,
  isPriority = false,
}: AutoPlayVideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const isHorizontal = item.aspectRatio === '16:9';
  const ratioClass = aspectRatioClass || (isHorizontal ? 'aspect-[16/9]' : 'aspect-[9/16]');

  // IntersectionObserver for scroll-triggered autoplay
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        setIsInView(visible);

        if (item.videoType === 'local' && videoRef.current) {
          if (visible) {
            videoRef.current
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                if (videoRef.current) {
                  videoRef.current.muted = true;
                  videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
                }
              });
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      {
        threshold: [0.1, 0.35, 0.7],
        rootMargin: '50px 0px 50px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [item.videoType]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="group relative flex flex-col rounded-2xl bg-[#131711] border border-[#272E26] hover:border-[#3E7A5C] overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      {/* Media Viewport */}
      <div className={`relative w-full bg-[#0A0C0A] overflow-hidden ${ratioClass}`}>
        {item.videoType === 'local' ? (
          <div className="relative w-full h-full cursor-pointer" onClick={() => onOpenModal(item)}>
            <video
              ref={videoRef}
              src={item.src}
              loop
              playsInline
              muted={isMuted}
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* In-feed Sound & Playback Controls Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#0A0C0A]/90 via-[#0A0C0A]/40 to-transparent flex items-center justify-between z-20">
              <span className="text-[11px] font-mono font-bold text-[#3E7A5C] bg-[#0A0C0A]/85 px-2 py-0.5 rounded border border-[#3E7A5C]/40">
                {item.metric}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="p-1.5 rounded-full bg-[#0A0C0A]/80 border border-[#272E26] text-[#F3F1EA] hover:border-[#3E7A5C] transition-colors"
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                </button>
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-1.5 rounded-full bg-[#0A0C0A]/80 border border-[#272E26] text-[#F3F1EA] hover:border-[#3E7A5C] transition-colors"
                >
                  {isMuted ? <VolumeX className="w-3 h-3 text-[#C6A15B]" /> : <Volume2 className="w-3 h-3 text-[#3E7A5C]" />}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* YouTube Embed — Plays automatically when scrolled into view without any zoom sign */
          <div className="relative w-full h-full">
            {isInView && item.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${item.youtubeId}&controls=1&modestbranding=1&rel=0&playsinline=1`}
                title={item.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : item.poster ? (
              <Image
                src={item.poster}
                alt={`${item.title} - ${item.category}`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#181E16] flex items-center justify-center">
                <Play className="w-8 h-8 text-[#A5A79B]" />
              </div>
            )}

            {/* Outcome Highlight Pill */}
            <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
              <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold rounded bg-[#0A0C0A]/90 text-[#3E7A5C] border border-[#3E7A5C]/40 backdrop-blur-sm">
                {item.metric}
              </span>
            </div>
          </div>
        )}

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#0A0C0A]/85 text-[#4E9672] border border-[#3E7A5C]/40 backdrop-blur-sm">
            {item.category === 'AI Ad' && <Sparkles className="w-2.5 h-2.5 text-[#3E7A5C]" />}
            {item.category}
          </span>
        </div>

        {/* Aspect Ratio Badge */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#0A0C0A]/85 text-[#A5A79B] border border-[#272E26] backdrop-blur-sm">
            {item.aspectRatio}
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
        <div>
          <div className="text-[11px] font-medium text-[#A5A79B] uppercase tracking-wider mb-1">
            Category: {item.client}
          </div>
          <h3 className="text-base font-display font-bold text-[#F3F1EA] leading-snug group-hover:text-[#4E9672] transition-colors">
            {item.title}
          </h3>
        </div>

        <p className="text-xs text-[#A5A79B] line-clamp-2 italic border-l border-[#272E26] pl-2.5">
          {item.hook}
        </p>
      </div>
    </div>
  );
}