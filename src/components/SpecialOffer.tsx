import React from 'react';
import { Check, ArrowRight, Gift } from 'lucide-react';

interface SpecialOfferProps {
  onClaimOffer?: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onClaimOffer }) => {
  const benefits = [
    'Complimentary gourmet breakfast daily',
    'Guaranteed early check-in & late check-out',
    'Ultra high-speed complimentary Wi-Fi 7',
    'Complimentary $100 spa & dining credit',
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#C9A227]/40 shadow-2xl">
          
          {/* Background Image with Deep Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=80"
              alt="Habesha Grand Hotel Poolside & Sunset"
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071521]/95 via-[#071521]/85 to-[#071521]/70" />
            {/* Gold atmospheric tint */}
            <div className="absolute inset-0 bg-[#0B1F33]/40" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F33]/80 border border-[#C9A227]/50 text-xs font-semibold text-[#E3C766] mb-6 backdrop-blur-md">
                <Gift className="w-4 h-4 text-[#C9A227]" />
                <span className="uppercase tracking-[0.2em]">SEASONAL PRIVILEGE</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                Stay Longer. <br />
                <span className="gold-gradient-text italic font-normal">Experience More.</span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-xl">
                Enjoy exclusive benefits, extended luxury, and up to 25% savings when you book 3 or more consecutive nights at Habesha Grand Hotel.
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#E3C766]" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card CTA with Promo Code */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <div className="w-full max-w-sm bg-[#0B1F33]/90 backdrop-blur-xl border border-[#C9A227]/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C9A227] font-bold block mb-2">
                  LIMITED TIME OFFER
                </span>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
                  Save Up To 25%
                </p>
                <p className="text-xs text-slate-400 mb-6 font-light">
                  Valid for direct suite bookings worldwide
                </p>

                <div className="p-3 bg-[#071521] border border-dashed border-[#C9A227]/60 rounded-xl mb-6 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Promo Code</span>
                    <span className="text-sm font-mono font-bold text-[#E3C766]">HABESHAEXTEND</span>
                  </div>
                  <span className="text-[10px] text-[#C9A227] bg-[#C9A227]/10 px-2 py-1 rounded">
                    Applied Auto
                  </span>
                </div>

                <button
                  onClick={onClaimOffer}
                  className="gold-button w-full py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Explore Special Offers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
