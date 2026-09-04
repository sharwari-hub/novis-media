import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS } from '@/data/blog';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Resources | Novis Media',
  description:
    'Deep dives on UGC video ads, generative AI advertising, 3-second hook retention psychology, and paid social performance by Novis Media.',
  openGraph: {
    title: 'Resources & Insights | Novis Media',
    description: 'Master the mechanics of high-converting short-form video advertising.',
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0A0C0A] py-16 md:py-24 border-b border-[#272E26]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="space-y-4 max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
              <span>Agency Knowledge Base</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
              Short-form video engineering & creative strategy.
            </h1>
            <p className="text-lg text-[#A5A79B]">
              Field notes, algorithmic experiments, and tactical frameworks from the creative engine scaling 7-figure DTC brands.
            </p>
          </div>

          {/* Posts Feed */}
          <div className="space-y-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="p-8 sm:p-10 rounded-3xl bg-[#131711] border border-[#272E26] hover:border-[#3E7A5C] transition-all duration-300 group"
              >
                <div className="space-y-4">
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

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F1EA] group-hover:text-[#4E9672] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-[#A5A79B] leading-relaxed max-w-3xl">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 flex items-center justify-between">
                    <div className="text-xs text-[#A5A79B]">
                      By <span className="text-[#F3F1EA] font-medium">{post.author.name}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C6A15B] hover:text-[#D8B26B] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}