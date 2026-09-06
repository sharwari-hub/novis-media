'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/portfolio';
import { CheckCircle2, Sparkles, PlusCircle, ArrowUpRight } from 'lucide-react';

export function ProcessSection() {
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
            How we turn raw briefs into live creative in 14 days.
          </h2>
          <p className="text-base sm:text-lg text-[#A5A79B]">
            No bloated agency bureaucracy. We execute a focused 3-stage sprint engineered to isolate strong hooks and build testing batches.
          </p>
        </div>

        {/* 3 Numbered Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isCreateStep = step.number === '02';

            return (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-3xl p-7 md:p-8 bg-[#131711] border transition-all duration-300 ${
                  isCreateStep
                    ? 'border-[#3E7A5C] ring-1 ring-[#3E7A5C]/30'
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
                        <Sparkles className="w-3.5 h-3.5 text-[#3E7A5C]" />
                        <span>Core Synthesis</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#F3F1EA]">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#A5A79B] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step 02 Specific: Converted from broken bts-process.mp4 to Available Slot Placeholder Card */}
                  {isCreateStep && (
                    <div
                      onClick={() => {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group relative flex flex-col justify-between rounded-2xl bg-[#0A0C0A]/60 border border-dashed border-[#272E26] hover:border-[#3E7A5C] p-5 cursor-pointer transition-all duration-300 my-2"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded bg-[#272E26]/60 text-[#A5A79B] group-hover:border-[#3E7A5C]/40 border border-transparent transition-colors">
                            BTS Process — Available Slot
                          </span>
                          <span className="text-[11px] font-mono text-[#A5A79B] group-hover:text-[#4E9672] transition-colors">
                            Available Slot
                          </span>
                        </div>

                        <div className="py-4 text-center flex flex-col items-center justify-center space-y-2.5">
                          <div className="w-11 h-11 rounded-full bg-[#181E16] border border-[#272E26] group-hover:border-[#3E7A5C] group-hover:scale-110 flex items-center justify-center transition-all">
                            <PlusCircle className="w-5 h-5 text-[#A5A79B] group-hover:text-[#3E7A5C] transition-colors" />
                          </div>
                          <h4 className="text-sm font-display font-bold text-[#F3F1EA] group-hover:text-[#4E9672] transition-colors">
                            Behind-the-Scenes Production Reel
                          </h4>
                          <p className="text-xs text-[#A5A79B] max-w-[240px]">
                            Live studio editing timeline and AI motion synthesis walkthrough reserved for upcoming partner sprint.
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#272E26]/60 flex items-center justify-between text-xs text-[#A5A79B]">
                        <span className="font-mono text-[11px] text-[#3E7A5C] font-semibold">Available Studio Slot</span>
                        <span className="inline-flex items-center gap-1 group-hover:text-[#F3F1EA] transition-colors font-medium">
                          <span>Reserve Slot</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
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

                <div className="pt-6 border-t border-[#272E26] mt-8 flex items-center justify-between text-xs text-[#A5A79B]">
                  <span className="font-mono text-[#3E7A5C] font-semibold">Stage {step.number} of 03</span>
                  <span>14-Day Delivery Window</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}