import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SocialProofStrip } from '@/components/SocialProofStrip';
import { VideoPortfolioGrid } from '@/components/VideoPortfolioGrid';
import { KyaSceneCluster } from '@/components/KyaSceneCluster';
import { InteriorRedesignCaseStudy } from '@/components/InteriorRedesignCaseStudy';
import { ConstructionCaseStudy } from '@/components/ConstructionCaseStudy';
import { StatsBar } from '@/components/StatsBar';
import { ProcessSection } from '@/components/ProcessSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ScarcitySection } from '@/components/ScarcitySection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

// JSON-LD structured data for Google Rich Results
const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you combine UGC with AI-generated video ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We deploy both depending on what drives the lowest CAC for your product. Human UGC builds undeniable social proof and trust, while AI generates Hollywood-grade visual hooks in days with zero physical studio costs."
      }
    },
    {
      "@type": "Question",
      "name": "How fast will we receive our first creative batch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard delivery window is 10 to 14 business days from onboarding signoff."
      }
    },
    {
      "@type": "Question",
      "name": "Do we own the full licensing and usage rights to all videos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 100%. Once delivered, your brand holds full commercial usage rights in perpetuity."
      }
    }
  ]
};

const jsonLdVideo = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Novis Media — High-Converting UGC & AI Ad Creatives",
  "description": "Demonstration of scroll-stopping video ads created for DTC brands by Novis Media agency.",
  "thumbnailUrl": "https://novismedia.agency/thumbnails/yt-dr-trust.jpg",
  "uploadDate": "2026-01-01T08:00:00+08:00",
  "contentUrl": "https://novismedia.agency/videos/hero-hook.mp4"
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />

      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Client / Social Proof Strip */}
        <SocialProofStrip />

        {/* 3. Video Portfolio Grid with Auto-Play on Scroll */}
        <VideoPortfolioGrid />

        {/* 4. Kya Scene Hai — AI Avatars & Auto-Edited Reels Case Study Cluster */}
        <KyaSceneCluster />

        {/* 5. Concept Redesign Before/After: Creative Minds Interior */}
        <InteriorRedesignCaseStudy />

        {/* 6. High-Ticket Contractor Web Build: Apex + [Next project] Slot */}
        <ConstructionCaseStudy />

        {/* 7. Stats Bar */}
        <StatsBar />

        {/* 8. Process Section (With 53s BTS Video inside Create step) */}
        <ProcessSection />

        {/* 9. Testimonials */}
        <TestimonialsSection />

        {/* 10. Scarcity / Positioning Close */}
        <ScarcitySection />

        {/* 11. FAQ */}
        <FAQSection />

        {/* 12. Final Full-Width Dark CTA */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />
    </>
  );
}