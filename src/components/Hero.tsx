import React from 'react';
import { ArrowDown, Sparkles, Compass, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking?: () => void;
  onExploreRooms?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRooms }) => {
  const scrollToExplore = () => {
    const target = document.getElementById('booking-widget-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Luxora Grand Resort & Palace at dusk"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Layered luxury overlays for perfect legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071521]/95 via-[#071521]/75 to-[#071521]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071521] via-transparent to-[#071521]/60" />
        {/* Subtle decorative radial glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center lg:text-left w-full">
        <div className="max-w-3xl">
          {/* Small Gold Badge Label */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B1F33]/80 border border-[#C9A227]/40 backdrop-blur-md mb-6 shadow-lg shadow-black/20">
            <Sparkles className="w-3.5 h-3.5 text-[#E3C766] animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#E3C766]">
              WELCOME TO LUXORA
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6">
            Where Luxury <br />
            <span className="gold-gradient-text italic font-normal">Meets Belonging.</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
            Exceptional stays, thoughtful service, and unforgettable experiences crafted for the world's most discerning travelers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
            <button
              onClick={onOpenBooking}
              className="gold-button w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider flex items-center justify-center gap-3 cursor-pointer group shadow-2xl"
            >
              <span>Reserve Your Stay</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#071521]" />
            </button>

            <a
              href="#featured-rooms"
              onClick={(e) => {
                if (onExploreRooms) {
                  e.preventDefault();
                  onExploreRooms();
                }
              }}
              className="gold-button-outline w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium tracking-wider flex items-center justify-center gap-2.5 backdrop-blur-sm group"
            >
              <Compass className="w-4 h-4 text-[#E3C766] group-hover:rotate-45 transition-transform duration-300" />
              <span>Explore Rooms</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg">
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#E3C766]">5-Star</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Luxury Award</p>
            </div>
            <div className="border-l border-white/10 pl-4">
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#E3C766]">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Best Rate Guaranteed</p>
            </div>
            <div className="border-l border-white/10 pl-4">
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#E3C766]">24/7</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Private Concierge</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={scrollToExplore}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#E3C766] transition-colors focus:outline-none group cursor-pointer"
          aria-label="Scroll to exploration section"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
            SCROLL TO EXPLORE
          </span>
          <div className="w-7 h-7 rounded-full border border-slate-600 group-hover:border-[#C9A227] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C9A227]" />
          </div>
        </button>
      </div>
    </section>
  );
};
