'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, CheckCircle2, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    adSpend: '$5k - $20k/mo',
    primaryGoal: 'Scale UGC Video Ads',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0A0C0A] py-16 md:py-24 border-b border-[#272E26]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Context & Fast Track */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131711] border border-[#3E7A5C]/40 text-[#4E9672] text-xs font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#3E7A5C]" />
                  <span>Get In Touch</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F3F1EA] tracking-tight">
                  Let's audit your creative bottleneck.
                </h1>
                <p className="text-base text-[#A5A79B] leading-relaxed">
                  Tell us where your ad spend is struggling. We will review your current creative performance and send you 3 custom angle hypotheses before you commit to anything.
                </p>
              </div>

              {/* Fast Track: Direct Instagram DM Box */}
              <div className="p-6 rounded-2xl bg-[#131711] border border-[#272E26] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0A0C0A] border border-[#272E26] text-[#C6A15B]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-display font-bold text-[#F3F1EA]">
                      Fastest Way to Reach Us
                    </div>
                    <div className="text-xs text-[#A5A79B]">
                      Direct message founder inbox on Instagram
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/novis.creativemedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-xs sm:text-sm hover:bg-[#D8B26B] transition-colors"
                >
                  <span>Open Instagram DM (@novis.creativemedia)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-[#A5A79B] text-center font-mono">
                  Guaranteed response within 4 hours
                </p>
              </div>

              {/* Verified Guarantees */}
              <div className="space-y-3 pt-2 text-xs text-[#A5A79B]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3E7A5C]" />
                  <span>Full commercial video licensing in perpetuity</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3E7A5C]" />
                  <span>Direct founder execution on all concepts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3E7A5C]" />
                  <span>Direct founder attention on all hook scripts</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Brief Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#131711] border border-[#272E26] shadow-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#3E7A5C]/20 border border-[#3E7A5C] text-[#3E7A5C] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-[#F3F1EA]">
                      Brief Received.
                    </h2>
                    <p className="text-sm text-[#A5A79B] max-w-sm mx-auto">
                      Our creative lead will review your store URL and reply with 3 preliminary hook angles within 4 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#C6A15B] hover:underline pt-2"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-display font-bold text-[#F3F1EA] mb-6">
                      Project Intake Brief
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-[#A5A79B] mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-[#0A0C0A] border border-[#272E26] text-sm text-[#F3F1EA] placeholder-[#A5A79B]/50 focus:outline-none focus:border-[#3E7A5C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-[#A5A79B] mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@yourbrand.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#0A0C0A] border border-[#272E26] text-sm text-[#F3F1EA] placeholder-[#A5A79B]/50 focus:outline-none focus:border-[#3E7A5C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A5A79B] mb-2">
                        Brand / Store URL
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0C0A] border border-[#272E26] text-sm text-[#F3F1EA] placeholder-[#A5A79B]/50 focus:outline-none focus:border-[#3E7A5C]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-[#A5A79B] mb-2">
                          Monthly Ad Spend
                        </label>
                        <select
                          value={formData.adSpend}
                          onChange={(e) => setFormData({ ...formData, adSpend: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0A0C0A] border border-[#272E26] text-sm text-[#F3F1EA] focus:outline-none focus:border-[#3E7A5C]"
                        >
                          <option value="< $5k/mo">&lt; $5k / mo (Early stage)</option>
                          <option value="$5k - $20k/mo">$5k - $20k / mo</option>
                          <option value="$20k - $50k/mo">$20k - $50k / mo</option>
                          <option value="$50k+/mo">$50k+ / mo (Scale)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-[#A5A79B] mb-2">
                          Primary Objective
                        </label>
                        <select
                          value={formData.primaryGoal}
                          onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0A0C0A] border border-[#272E26] text-sm text-[#F3F1EA] focus:outline-none focus:border-[#3E7A5C]"
                        >
                          <option value="Scale UGC Video Ads">Scale UGC Video Ads</option>
                          <option value="Deploy AI Synthetic Ads">Deploy AI Synthetic Ads</option>
                          <option value="Facebook & Instagram Ads">Facebook &amp; Instagram Ads</option>
                          <option value="Google Ads">Google Ads</option>
                          <option value="Social Media Content Growth">Social Media Content Growth</option>
                          <option value="High-Converting Web Funnel">High-Converting Web Funnel</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A5A79B] mb-2">
                        Biggest Creative Bottleneck
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Current ads fatigue too quickly, high CAC on Meta, or need video hooks that convert cold traffic..."
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0C0A] border border-[#272E26] text-sm text-[#F3F1EA] placeholder-[#A5A79B]/50 focus:outline-none focus:border-[#3E7A5C]"
                      />
                    </div>

                    {/* Single Gold Submit CTA */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#C6A15B] text-[#0A0C0A] font-bold text-sm sm:text-base hover:bg-[#D8B26B] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Submit Creative Brief</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}