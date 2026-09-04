import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { KyaSceneCluster } from '@/components/KyaSceneCluster';
import { ArrowUpRight, CheckCircle2, Video, Sparkles, Share2, Layout, Bot } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Performance Services | Novis Media',
  description:
    'Comprehensive creative performance services: UGC Video Ads, AI-Generated Commercials, AI Avatars & Auto-Edited Reels, Social Media Management, and High-Converting Landing Page Design.',
  openGraph: {
    title: 'Services & Capabilities | Novis Media',
    description: 'Explore our 5 core creative engines engineered for DTC brands and modern companies.',
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: Video,
      title: 'Performance UGC Ads',
      tag: 'Core Offering',
      description:
        'Raw, creator-led video ads crafted to look completely native in social feeds while deploying battle-tested direct response psychology.',
      features: [
        'Creator sourcing, vetting, and product logistics',
        'Direct-response script writing with 3+ hook angles per concept',
        'Sound-on and sound-off optimization with kinetic typography',
        'Whitelisting and dark-post authorization support',
      ],
      idealFor: 'DTC Brands, Beauty, Wellness, Apparel, Consumer Tech',
    },
    {
      icon: Sparkles,
      title: 'AI-Generated Ads & Synthetic Motion',
      tag: 'Next-Gen Creative',
      description:
        'Hollywood-grade visual effects and surreal product transformations generated in days with proprietary generative video pipelines, bypassing six-figure studio production costs.',
      features: [
        'Photorealistic macro product renders in dynamic environments',
        'Impossible physics and visual metaphors that stop the thumb',
        'Rapid multi-lingual variation testing for international markets',
        'Zero actor or studio booking delays',
      ],
      idealFor: 'Luxury Goods, Fragrance, Tech Accessories, Disruptive DTC',
    },
    {
      icon: Bot,
      title: 'AI Avatars & Auto-Edited Reels',
      tag: 'Autonomous Output',
      description:
        'We build a digital AI avatar that looks and sounds like you, then use it to edit and post reels consistently — so your channel never goes quiet, without you needing to film anything yourself. Reference channel: Kya Scene Hai.',
      features: [
        'Custom hyper-realistic AI avatar & cloned vocal identity',
        'Automated hook scripting and viral trend extraction',
        'Daily short-form video auto-editing with dynamic pacing',
        'Hands-off automated cross-platform publishing',
      ],
      idealFor: 'Content Creators, Busy Founders, Faceless Media Channels, Personal Brands',
    },
    {
      icon: Share2,
      title: 'Social Media Management & Organic Growth',
      tag: 'Distribution Engine',
      description:
        'End-to-end content production and growth strategy designed to turn casual scrollers into an obsessed brand community across TikTok, Instagram Reels, and YouTube Shorts.',
      features: [
        'Full monthly content calendar and trend capitalization',
        'Daily short-form video production and editing',
        'Active community management and comment-section conversion',
        'Organic-to-paid creative flywheel integration',
      ],
      idealFor: 'Founder Brands, E-Commerce, Modern SaaS, Consumer Apps',
    },
    {
      icon: Layout,
      title: 'High-Converting Web & Funnel Design',
      tag: 'Conversion Rate Optimization',
      description:
        'Lightning-fast, mobile-first Shopify and Next.js landing pages built specifically to match the hook of your video ads and maximize average order value (AOV).',
      features: [
        'Mobile-first UX designed for sub-second load times',
        'Video-forward product detail pages (PDPs) with social proof widgets',
        'Frictionless checkout optimization and upsell architectures',
        'Comprehensive Core Web Vitals and SEO audit',
      ],
      idealFor: 'Brands scaling past $50k/mo ad spend experiencing landing page dropoff',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0A0C0A] py-16 md:py-24 border-b border-[#272E26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
              <span>Agency Capabilities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
              Five creative engines. One obsessive outcome: ROAS.
            </h1>
            <p className="text-lg text-[#A5A79B]">
              We eliminate the friction between media buying and creative production. Here is exactly how we scale modern brands.
            </p>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#131711] border border-[#272E26] hover:border-[#3E7A5C] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-[#0A0C0A] border border-[#272E26] text-[#3E7A5C] group-hover:text-[#4E9672] transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded bg-[#3E7A5C]/15 text-[#4E9672] border border-[#3E7A5C]/30">
                        {svc.tag}
                      </span>
                    </div>

                    <h2 className="text-2xl font-display font-bold text-[#F3F1EA]">
                      {svc.title}
                    </h2>

                    <p className="text-sm text-[#A5A79B] leading-relaxed">
                      {svc.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-mono font-semibold uppercase text-[#F3F1EA]">
                        What You Receive:
                      </div>
                      {svc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#A5A79B]">
                          <CheckCircle2 className="w-4 h-4 text-[#3E7A5C] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#272E26] mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-[#A5A79B]">
                      Best for: <strong className="text-[#F3F1EA]">{svc.idealFor}</strong>
                    </span>

                    <a
                      href="https://www.instagram.com/novis.creativemedia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C6A15B] hover:text-[#D8B26B] transition-colors self-start sm:self-auto"
                    >
                      <span>Inquire About This</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Embedded Case Study Proof Cluster */}
          <div className="mb-20">
            <KyaSceneCluster />
          </div>

          {/* Single Gold CTA Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#131711] border border-[#272E26] text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F1EA]">
              Not sure whether your brand needs UGC, AI ads, or an AI avatar?
            </h2>
            <p className="text-sm sm:text-base text-[#A5A79B] max-w-xl mx-auto">
              Message us on Instagram or submit your store URL. We will dissect your current ad creative and prescribe the exact angle mix that will move the needle.
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/novis.creativemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-sm hover:bg-[#D8B26B] transition-colors"
              >
                <span>Request A Free Creative Breakdown</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}