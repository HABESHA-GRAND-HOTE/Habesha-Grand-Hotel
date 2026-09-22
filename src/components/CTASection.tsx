import React from 'react';
import { Calendar, Phone, ChevronRight, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  onOpenBooking?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#071521] relative overflow-hidden">
      {/* Decorative Gold Lines & Luxury Background Ornamentation */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Luxury Crown Monogram */}
        <div className="w-16 h-16 rounded-full border border-[#C9A227]/50 bg-[#0B1F33] mx-auto flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(201,162,39,0.3)]">
          <Crown className="w-8 h-8 text-[#E3C766]" />
        </div>

        {/* Small Gold Tag */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-[#C9A227]" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            RESERVATIONS &amp; INQUIRIES
          </span>
          <span className="w-8 h-[1px] bg-[#C9A227]" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
          Your Next Escape <br />
          <span className="gold-gradient-text italic font-normal">Starts Here.</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Reserve your room and experience hospitality designed around you. Allow us to orchestrate an unforgettable stay in the heart of the city.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenBooking}
            className="gold-button w-full sm:w-auto px-9 py-4 rounded-full text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer shadow-2xl group"
          >
            <Calendar className="w-4 h-4 text-[#071521]" />
            <span>Book Your Stay</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <Link
            to="/contact"
            className="gold-button-outline w-full sm:w-auto px-9 py-4 rounded-full text-sm font-medium tracking-wider flex items-center justify-center gap-2.5 backdrop-blur-sm group"
          >
            <Phone className="w-4 h-4 text-[#E3C766]" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Bottom micro note */}
        <div className="mt-12 flex items-center justify-center gap-6 text-xs text-slate-400 font-light">
          <span>Direct Booking Guarantee</span>
          <span className="text-[#C9A227]">•</span>
          <span>Complimentary High-Speed Wi-Fi</span>
          <span className="text-[#C9A227]">•</span>
          <span>Priority Room Allocation</span>
        </div>

      </div>
    </section>
  );
};
