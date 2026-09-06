import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS } from '@/data/blog';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Share2, Sparkles } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found | Novis Media' };
  }

  return {
    title: `${post.title} | Novis Media Resources`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: '2026-03-01T08:00:00.000Z',
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Novis Media"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Novis Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://novismedia.agency/novis-logo.png"
      }
    },
    "datePublished": "2026-03-01",
    "mainEntityOfPage": `https://novismedia.agency/blog/${post.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <Navbar />
      <main className="flex-grow bg-[#0A0C0A] py-16 md:py-24 border-b border-[#272E26]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A5A79B] hover:text-[#F3F1EA] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all guides</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-6 pb-10 border-b border-[#272E26] mb-12">
            <div className="flex items-center gap-3 flex-wrap text-xs text-[#A5A79B]">
              <span className="px-3 py-1 rounded-md bg-[#3E7A5C]/15 text-[#4E9672] border border-[#3E7A5C]/30 font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-[#A5A79B] leading-relaxed">
              {post.excerpt}
            </p>

            <div className="pt-2 flex items-center justify-between text-xs text-[#A5A79B]">
              <div>
                Written by <strong className="text-[#F3F1EA]">{post.author.name}</strong> • {post.author.role}
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="space-y-6 text-base sm:text-lg text-[#F3F1EA]/90 leading-relaxed font-normal">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Call to Action Card in Emerald and Gold */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#131711] border border-[#272E26] relative space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#3E7A5C] font-bold">
                Deploy This Strategy
              </span>
              <h2 className="text-2xl font-display font-bold text-[#F3F1EA]">
                Want Novis Media to engineer your next winning ad batch?
              </h2>
              <p className="text-sm text-[#A5A79B] max-w-xl">
                We synthesize high-converting UGC hooks with custom AI video generation to build scalable creative engines for modern brands. Now onboarding our founding partner cohort.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.instagram.com/novis.creativemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-sm hover:bg-[#D8B26B] transition-colors"
              >
                <span>DM Us On Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#0A0C0A] text-[#F3F1EA] border border-[#272E26] hover:border-[#3E7A5C] font-medium text-sm transition-colors"
              >
                Submit A Brief
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}