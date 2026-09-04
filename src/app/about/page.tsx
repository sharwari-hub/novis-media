import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, Flame, Target, Zap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Novis Media | Small Spark, Big Reach',
  description:
    'The creative thesis behind Novis Media. Why we believe algorithmic short-form video is the ultimate growth catalyst for modern brands.',
  openGraph: {
    title: 'About Novis Media | The Firefly Thesis',
    description: 'Small spark, big reach. Learn how we engineer performance creative for DTC brands.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0A0C0A] py-16 md:py-24 border-b border-[#272E26]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
              <span>Agency Thesis</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
              Small spark, big reach.
            </h1>
            <p className="text-lg text-[#A5A79B] leading-relaxed">
              We started Novis Media with one stubborn realization: the traditional agency model is dead. Brands don't need 40-slide decks or three-month production cycles. They need scroll-stopping short-form video that makes algorithms work for them.
            </p>
          </div>

          {/* Firefly Philosophy Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#131711] border border-[#272E26] flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 flex items-center justify-center p-6 rounded-2xl bg-[#0A0C0A] border border-[#272E26]">
              <Image
                src="/novis-logo.png"
                alt="Novis Media Firefly Mark"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-display font-bold text-[#F3F1EA]">
                The Firefly Mark
              </h2>
              <p className="text-sm sm:text-base text-[#A5A79B] leading-relaxed">
                In a forest of pitch-black noise, a single firefly commands instant attention. Its biological spark proves that you do not need overwhelming scale to create a magnetic focal point. In the attention economy, a 3-second hook is that spark. When crafted with mathematical precision, it unlocks exponential algorithmic reach.
              </p>
            </div>
          </div>

          {/* Guiding Principles */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F1EA]">
              How We Operate
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#131711] border border-[#272E26] space-y-3">
                <div className="p-2.5 rounded-lg bg-[#0A0C0A] border border-[#272E26] text-[#3E7A5C] w-fit">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-[#F3F1EA]">
                  ROAS Over Egos
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A79B] leading-relaxed">
                  We don't win Cannes Lions and we don't care. Our creative is judged by cost-per-acquisition, hook retention, and cash collected on Shopify.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#131711] border border-[#272E26] space-y-3">
                <div className="p-2.5 rounded-lg bg-[#0A0C0A] border border-[#272E26] text-[#3E7A5C] w-fit">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-[#F3F1EA]">
                  Speed & Iteration
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A79B] leading-relaxed">
                  The brand with the highest creative testing velocity wins. By pairing human UGC creators with proprietary AI generation, we deploy fresh creative batches every 14 days.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#131711] border border-[#272E26] space-y-3">
                <div className="p-2.5 rounded-lg bg-[#0A0C0A] border border-[#272E26] text-[#3E7A5C] w-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-[#F3F1EA]">
                  Zero Bureaucracy
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A79B] leading-relaxed">
                  You work directly with founders and senior creative strategists who write the scripts and dissect your ad account daily.
                </p>
              </div>
            </div>
          </div>

          {/* Social Profiles & CTA */}
          <div className="pt-8 border-t border-[#272E26] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs text-[#A5A79B]">
              Follow our daily breakdowns on Instagram:{' '}
              <a
                href="https://www.instagram.com/novis.creativemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F3F1EA] font-semibold underline hover:text-[#4E9672]"
              >
                @novis.creativemedia
              </a>
            </div>

            <a
              href="https://www.instagram.com/novis.creativemedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-sm hover:bg-[#D8B26B] transition-colors"
            >
              <span>Work With Novis Media</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}