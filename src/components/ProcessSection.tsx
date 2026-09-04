'use client';

import React, { useRef, useState } from 'react';
import { PROCESS_STEPS } from '@/data/portfolio';
import { Volume2, VolumeX, Play, Pause, CheckCircle2, Film } from 'lucide-react';

export function ProcessSection() {
  const btsVideoRef = useRef<HTMLVideoElement>(null);
  const [isBtsMuted, setIsBtsMuted] = useState(true);
  const [isBtsPlaying, setIsBtsPlaying] = useState(false);

  const toggleBtsPlay = () => {
    if (btsVideoRef.current) {
      if (btsVideoRef.current.paused) {
        btsVideoRef.current.play();
        setIsBtsPlaying(true);
      } else {
        btsVideoRef.current.pause();
        setIsBtsPlaying(false);
      }
    }
  };

  const toggleBtsSound = () => {
    if (btsVideoRef.current) {
      btsVideoRef.current.muted = !btsVideoRef.current.muted;
      setIsBtsMuted(btsVideoRef.current.muted);
    }
  };

  return (
    <section id="process" className="py-20 md:py-32 bg-[#0A0C0A] border-b border-[#272E26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
            <span>The Creative Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
            How we turn raw briefs into cash-printing creative in 14 days.
          </h2>
          <p className="text-base sm:text-lg text-[#A5A79B]">
            No bloated agency bureaucracy. We execute a rapid 3-stage sprint engineered to isolate conversion winners before ad fatigue sets in.
          </p>
        </div>

        {/* 3 Numbered Steps with 53s BTS Video inside Step 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isCreateStep = step.number === '02';

            return (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-3xl p-7 md:p-8 bg-[#131711] border transition-all duration-300 ${
                  isCreateStep
                    ? 'border-[#3E7A5C] lg:col-span-1 ring-1 ring-[#3E7A5C]/30'
                    : 'border-[#272E26] hover:border-[#3E7A5C]/40'
                }`}
              >
                <div className="space-y-6">
                  {/* Step Number in Emerald */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-display font-black text-[#3E7A5C]">
                      {step.number}
                    </span>
                    {isCreateStep && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#3E7A5C]/20 text-[#4E9672] border border-[#3E7A5C]/40">
                        <Film className="w-3.5 h-3.5" />
                        <span>BTS in Action</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#F3F1EA]">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#A5A79B] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step 02 Specific: The 53s BTS Clip Embedded */}
                  {isCreateStep && step.videoEvidence && (
                    <div className="pt-2">
                      <div className="relative rounded-2xl overflow-hidden bg-[#0A0C0A] border border-[#272E26] aspect-[9/16] max-h-[380px] mx-auto group">
                        <video
                          ref={btsVideoRef}
                          src={step.videoEvidence}
                          playsInline
                          loop
                          muted={isBtsMuted}
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />

                        {/* Video Controls Overlay */}
                        <div className="absolute inset-0 bg-[#0A0C0A]/40 flex items-center justify-center transition-opacity group-hover:bg-[#0A0C0A]/20">
                          <button
                            onClick={toggleBtsPlay}
                            aria-label={isBtsPlaying ? 'Pause BTS video' : 'Play BTS video'}
                            className="p-4 rounded-full bg-[#0A0C0A]/85 border border-[#272E26] text-[#F3F1EA] hover:border-[#3E7A5C] hover:scale-105 transition-all shadow-xl"
                          >
                            {isBtsPlaying ? (
                              <Pause className="w-6 h-6" />
                            ) : (
                              <Play className="w-6 h-6 fill-current ml-0.5" />
                            )}
                          </button>
                        </div>

                        {/* Floating sound toggle and caption */}
                        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between p-2 rounded-xl bg-[#0A0C0A]/90 backdrop-blur-md border border-[#272E26]">
                          <span className="text-[10px] font-mono text-[#4E9672] font-semibold truncate max-w-[170px]">
                            53s BTS Cut: Creative Edit
                          </span>
                          <button
                            onClick={toggleBtsSound}
                            aria-label={isBtsMuted ? 'Unmute video' : 'Mute video'}
                            className="p-1 rounded-md text-[#A5A79B] hover:text-[#F3F1EA] transition-colors"
                          >
                            {isBtsMuted ? <VolumeX className="w-4 h-4 text-[#C6A15B]" /> : <Volume2 className="w-4 h-4 text-[#3E7A5C]" />}
                          </button>
                        </div>
                      </div>

                      <p className="text-[11px] text-[#A5A79B] mt-2 text-center italic">
                        {step.videoCaption}
                      </p>
                    </div>
                  )}

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EA]">
                      Core Outputs:
                    </div>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#A5A79B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3E7A5C] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#272E26] mt-6 text-[11px] text-[#A5A79B]">
                  Stage {step.number} Duration: <strong className="text-[#F3F1EA]">{idx === 0 ? 'Days 1-3' : idx === 1 ? 'Days 4-10' : 'Days 11-14+'}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}