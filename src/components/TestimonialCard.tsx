import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { Testimonial } from '../data/testimonials';
import { testimonialsData } from '../data/testimonials';
import { SectionHeader } from './SectionHeader';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-24 bg-[#0B1F33]/40 relative overflow-hidden border-y border-[#C9A227]/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          label="REAL GUEST EXPERIENCES"
          title="What Our Guests Say"
          subtitle="Honest impressions from travelers, dignitaries, and global connoisseurs who have made Luxora their home away from home."
        />

        {/* Desktop Grid (3 cards) & Mobile Carousel */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <TestimonialCardItem key={item.id} item={item} />
          ))}
        </div>

        {/* Mobile & Tablet Slider view */}
        <div className="lg:hidden max-w-xl mx-auto">
          <TestimonialCardItem item={testimonialsData[currentIndex]} />
          
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex ? 'w-8 bg-[#C9A227]' : 'w-2 bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-[#C9A227]/40 bg-[#071521] text-white hover:bg-[#C9A227] hover:text-[#071521] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-[#C9A227]/40 bg-[#071521] text-white hover:bg-[#C9A227] hover:text-[#071521] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const TestimonialCardItem: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <div className="bg-[#0B1F33] rounded-2xl p-8 border border-[#C9A227]/25 shadow-xl flex flex-col justify-between relative group hover:border-[#C9A227]/70 transition-all duration-300">
      
      {/* Decorative Quote Icon */}
      <Quote className="absolute top-6 right-6 w-10 h-10 text-[#C9A227]/15 pointer-events-none group-hover:text-[#C9A227]/30 transition-colors" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1.5 mb-6 text-[#E3C766]">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
          ))}
          <span className="text-xs font-semibold text-slate-300 ml-2">5.0 / 5.0</span>
        </div>

        {/* Quote text */}
        <p className="text-base text-slate-200 font-light italic leading-relaxed mb-6">
          "{item.quote}"
        </p>
      </div>

      {/* Guest Details */}
      <div className="pt-6 border-t border-white/10 flex items-center gap-4">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A227]"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-bold text-white">{item.name}</h4>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E3C766]" />
          </div>
          <p className="text-xs text-[#C9A227]">{item.location}</p>
          <p className="text-[11px] text-slate-400 font-light mt-0.5">{item.stayType}</p>
        </div>
      </div>
    </div>
  );
};
