import React from 'react';
import { Utensils, Wine, ChefHat, Sparkles, ChevronRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DiningSectionProps {
  onOpenMenuModal?: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onOpenMenuModal }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#0B1F33]/60 relative overflow-hidden border-y border-[#C9A227]/15">
      {/* Ambient background glows */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-[#071521]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Cinematic Culinary Imagery with Floating Elements */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C9A227]/30 group">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Luxora Michelin-Starred Culinary Dining Room"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/85 via-transparent to-transparent" />

                {/* Floating Service Badge */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#071521]/90 backdrop-blur-md border border-[#C9A227]/50 text-xs font-semibold text-[#E3C766] shadow-xl">
                  <Utensils className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Breakfast • Lunch • Dinner</span>
                </div>
              </div>

              {/* Floating Chef Recommendation Overlay */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#071521]/95 backdrop-blur-xl border border-[#C9A227]/40 p-5 rounded-2xl shadow-2xl max-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center border border-[#C9A227]/40">
                    <ChefHat className="w-5 h-5 text-[#E3C766]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Executive Chef</p>
                    <p className="text-[11px] text-[#C9A227]">Chef Antoine De La Tour</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                  "We transform authentic seasonal harvest into an artisanal sensory narrative."
                </p>
              </div>

              {/* Floating Cellar Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#0B1F33]/90 backdrop-blur-md border border-[#C9A227]/30 p-3.5 rounded-xl shadow-xl hidden sm:flex items-center gap-2.5">
                <Wine className="w-5 h-5 text-[#E3C766]" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Grand Cellar</p>
                  <p className="text-xs font-bold text-white">1,200+ Rare Vintages</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dining Narrative and Action Buttons */}
          <div className="lg:col-span-6">
            
            {/* Small Gold Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                CULINARY EXPERIENCES
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              Flavors Worth <br />
              <span className="gold-gradient-text italic font-normal">Remembering.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
              Discover locally inspired cuisine, international favorites, and carefully crafted experiences designed around exceptional food. From sunrise organic breakfast spreads to late-night craft mixology, each meal is a celebration.
            </p>

            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8">
              Our 3 signature dining venues include <em>L’Étoile Gastronomy</em>, <em>The Azure Sky Lounge</em>, and the serene <em>Botanica Garden Tea Pavilion</em>.
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm text-slate-200">
              <div className="flex items-center gap-2.5 bg-[#071521]/50 p-3 rounded-xl border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span>Farm-to-Table Organic Produce</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#071521]/50 p-3 rounded-xl border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span>Private Dining &amp; Chef’s Table</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#071521]/50 p-3 rounded-xl border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span>24/7 In-Suite Bespoke Dining</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#071521]/50 p-3 rounded-xl border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span>Sommelier Wine Pairings</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/dining"
                className="gold-button w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Dining</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={onOpenMenuModal}
                className="gold-button-outline w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#E3C766]" />
                <span>View Menu</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
