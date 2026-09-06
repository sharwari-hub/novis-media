'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X, Volume2, VolumeX, ExternalLink, Sparkles } from 'lucide-react';
import { VideoItem } from '@/data/portfolio';

interface VideoModalProps {
  item: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ item, isOpen, onClose }: VideoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }

      // Fallback light-dismiss for browsers without closedby support
      const handleClick = (e: MouseEvent) => {
        if (e.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const inDialog =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;
        if (!inDialog) {
          onClose();
        }
      };

      dialog.addEventListener('click', handleClick);
      return () => {
        dialog.removeEventListener('click', handleClick);
      };
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen, onClose]);

  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  if (!item) return null;

  const isVertical = item.aspectRatio === '9:16';

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      className="p-0 bg-transparent text-[#F3F1EA] outline-none max-w-[94vw] lg:max-w-5xl w-full m-auto z-50 backdrop:bg-[#0A0C0A]/90 backdrop:backdrop-blur-md fixed inset-0 overflow-y-auto"
    >
      <div className="relative bg-[#131711] border border-[#272E26] rounded-2xl overflow-hidden shadow-2xl my-6 mx-auto flex flex-col md:flex-row max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#0A0C0A]/85 text-[#F3F1EA] border border-[#272E26] hover:border-[#3E7A5C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Screen Container */}
        <div
          className={`relative bg-[#0A0C0A] flex items-center justify-center flex-shrink-0 ${
            isVertical
              ? 'w-full md:w-[380px] lg:w-[420px] aspect-[9/16] max-h-[75vh] md:max-h-none'
              : 'w-full md:w-[560px] aspect-[16/9]'
          }`}
        >
          {item.videoType === 'youtube' && item.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={item.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                src={item.src}
                controls
                autoPlay
                playsInline
                muted={isMuted}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !videoRef.current.muted;
                    setIsMuted(videoRef.current.muted);
                  }
                }}
                className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-[#131711]/90 border border-[#272E26] text-xs font-medium text-[#F3F1EA] flex items-center gap-2 hover:border-[#3E7A5C] transition-colors"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#C6A15B]" /> : <Volume2 className="w-3.5 h-3.5 text-[#3E7A5C]" />}
                <span>{isMuted ? 'Unmute' : 'Mute'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Details Sidebar */}
        <div className="p-6 md:p-8 flex flex-col justify-between flex-grow overflow-y-auto bg-[#131711]">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md uppercase tracking-wider bg-[#3E7A5C]/15 text-[#4E9672] border border-[#3E7A5C]/30">
                {item.category === 'AI Ad' && <Sparkles className="w-3 h-3 text-[#3E7A5C]" />}
                {item.category}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded text-[#A5A79B] border border-[#272E26]">
                {item.aspectRatio}
              </span>
              <span className="text-xs text-[#A5A79B]">
                Category: <strong className="text-[#F3F1EA]">{item.client}</strong>
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-bold text-[#F3F1EA] leading-snug">
              {item.title}
            </h3>

            {/* Metric Box */}
            <div className="p-4 rounded-xl bg-[#0A0C0A] border border-[#272E26] border-l-2 border-l-[#3E7A5C]">
              <div className="text-xs font-semibold text-[#A5A79B] uppercase tracking-wider mb-1">
                Production Note
              </div>
              <div className="text-base font-display font-bold text-[#3E7A5C]">
                {item.metric}
              </div>
            </div>

            {/* Hook Copy */}
            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-[#A5A79B] uppercase tracking-wider">
                Opening Hook
              </div>
              <p className="text-sm text-[#F3F1EA]/90 italic bg-[#181E16] p-3.5 rounded-lg border border-[#272E26]">
                {item.hook}
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-[#272E26] mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.instagram.com/novis.creativemedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-semibold text-sm hover:bg-[#D8B26B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C6A15B]"
            >
              <span>Engineer This For Your Brand</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#181E16] text-[#A5A79B] hover:text-[#F3F1EA] hover:bg-[#272E26] text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}