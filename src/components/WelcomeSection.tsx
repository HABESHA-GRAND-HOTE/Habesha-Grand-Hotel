import React from 'react';
import { ArrowRight, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#071521]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B1F33]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Architectural Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A227]/20 group">
                <img
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80"
                  alt="Habesha Grand Hotel Lobby & Interior Experience"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Floating Accent Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#0B1F33]/90 backdrop-blur-xl border border-[#C9A227]/40 p-5 rounded-2xl shadow-2xl max-w-[240px] sm:max-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center border border-[#C9A227]/40">
                    <Award className="w-5 h-5 text-[#E3C766]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Five-Star Rating</p>
                    <p className="text-[11px] text-[#C9A227]">Forbes Travel Guide 2025</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                  Recognized for unparalleled personalized guest dedication &amp; bespoke private concierge.
                </p>
              </div>

              {/* Decorative Gold Border Outline */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#C9A227]/40 rounded-tl-3xl pointer-events-none -z-10" />
            </div>
          </div>

          {/* Right Column: Introduction & Statistics */}
          <div className="lg:col-span-6">
            
            {/* Small Gold Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                THE HABESHA GRAND EXPERIENCE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              More Than a Stay. <br />
              <span className="gold-gradient-text italic font-normal">A Place to Belong.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
              From the moment you arrive, every detail is thoughtfully designed to make your stay effortless, comfortable, and memorable. We blend classical grand hospitality traditions with modern bespoke luxury.
            </p>

            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8">
              Whether you are here for international business diplomacy, an intimate romantic retreat, or rejuvenating wellness, our dedicated ambassadors curate an experience precisely attuned to your rhythm.
            </p>

            {/* Discover Story link */}
            <div className="mb-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[#E3C766] hover:text-white transition-colors group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#C9A227]" />
              </Link>
            </div>

            {/* 3 Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#C9A227]/20">
              <div className="text-center sm:text-left">
                <span className="block text-3xl sm:text-4xl font-serif font-bold text-[#E3C766] mb-1">
                  15+
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                  Years of Hospitality
                </span>
              </div>

              <div className="text-center sm:text-left border-l border-white/10 pl-3 sm:pl-5">
                <span className="block text-3xl sm:text-4xl font-serif font-bold text-[#E3C766] mb-1">
                  120+
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                  Luxury Rooms
                </span>
              </div>

              <div className="text-center sm:text-left border-l border-white/10 pl-3 sm:pl-5">
                <span className="block text-3xl sm:text-4xl font-serif font-bold text-[#E3C766] mb-1">
                  50K+
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                  Happy Guests
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
