import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { REAL_PORTFOLIO_ITEMS } from '@/data/portfolio';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REAL_PORTFOLIO_ITEMS.filter((item) => item.slug).map((item) => ({
    slug: item.slug!,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = REAL_PORTFOLIO_ITEMS.find((i) => i.slug === slug);

  if (!item) {
    return { title: 'Case Study Not Found | Novis Media' };
  }

  return {
    title: `${item.title} | Novis Media Case Study`,
    description: `How Novis Media engineered high-converting video creative for ${item.client} generating ${item.metric}.`,
    openGraph: {
      title: `${item.title} — Case Study`,
      description: item.hook,
      images: item.poster ? [{ url: item.poster }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = REAL_PORTFOLIO_ITEMS.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  const isVertical = item.aspectRatio === '9:16';

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0A0C0A] py-16 md:py-24 border-b border-[#272E26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A5A79B] hover:text-[#F3F1EA] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all creative work</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#3E7A5C]/15 text-[#4E9672] border border-[#3E7A5C]/30">
                {item.category === 'AI Ad' && <Sparkles className="w-3 h-3 text-[#3E7A5C]" />}
                {item.category}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded text-[#A5A79B] border border-[#272E26]">
                {item.aspectRatio}
              </span>
              <span className="text-xs text-[#A5A79B]">
                Partner: <strong className="text-[#F3F1EA]">{item.client}</strong>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
              {item.title}
            </h1>

            <p className="text-lg text-[#A5A79B] max-w-3xl">
              A comprehensive breakdown of the creative hypotheses, hook construction, and scaling outcomes delivered by Novis Media.
            </p>
          </div>

          {/* Main Media & Strategy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Video Preview */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                className={`relative w-full rounded-2xl overflow-hidden bg-[#131711] border border-[#272E26] ${
                  isVertical ? 'max-w-[380px] aspect-[9/16]' : 'aspect-[16/9]'
                }`}
              >
                {item.videoType === 'youtube' && item.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                    title={item.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>

            {/* Case Study Details */}
            <div className="lg:col-span-6 space-y-8">
              {/* Outcome Highlight Box */}
              <div className="p-6 rounded-2xl bg-[#131711] border border-[#272E26] border-l-4 border-l-[#3E7A5C]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A5A79B] mb-1">
                  Primary Performance Milestone
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#3E7A5C]">
                  {item.metric}
                </div>
              </div>

              {/* The Hook Mechanism */}
              <div className="space-y-3">
                <h2 className="text-lg font-display font-bold text-[#F3F1EA]">
                  The 3-Second Hook Architecture
                </h2>
                <div className="p-4 rounded-xl bg-[#131711] border border-[#272E26] text-sm text-[#F3F1EA] italic leading-relaxed">
                  {item.hook}
                </div>
                <p className="text-xs text-[#A5A79B] leading-relaxed">
                  By opening with immediate visual tension and calling out an unspoken frustration, we stopped the scroll within 600 milliseconds, boosting initial thumb-stop rates well above platform benchmarks.
                </p>
              </div>

              {/* Strategic Deliverables */}
              <div className="space-y-3">
                <h2 className="text-lg font-display font-bold text-[#F3F1EA]">
                  Campaign Deliverables
                </h2>
                <div className="space-y-2 text-sm text-[#A5A79B]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3E7A5C] flex-shrink-0 mt-0.5" />
                    <span>5 Hook Variations engineered for A/B testing on Meta & TikTok</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3E7A5C] flex-shrink-0 mt-0.5" />
                    <span>Native caption styling and custom audio mix</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3E7A5C] flex-shrink-0 mt-0.5" />
                    <span>Direct licensing rights in perpetuity</span>
                  </div>
                </div>
              </div>

              {/* Gold Primary CTA */}
              <div className="pt-4">
                <a
                  href="https://www.instagram.com/novis.creativemedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-sm hover:bg-[#D8B26B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
                >
                  <span>Build A Campaign Like This</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}