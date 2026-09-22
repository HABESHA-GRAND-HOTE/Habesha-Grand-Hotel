import React from 'react';
import { HeartHandshake, MapPin, BedDouble, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Personalized Service',
      description: 'Thoughtful hospitality designed around you with tailored itineraries and personal ambassador attention.',
      badge: 'Bespoke Care',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Stay close to the city’s most important diplomatic, cultural, and premier entertainment destinations.',
      badge: 'Heart of Addis',
    },
    {
      icon: BedDouble,
      title: 'Exceptional Comfort',
      description: 'Every room is designed for restful slumber with soundproof acoustics, pillow menus, and plush Italian linens.',
      badge: 'Soundproof Serenity',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Hospitality',
      description: 'Professional, secure, and world-certified five-star service from arrival to seamless departure.',
      badge: 'Five-Star Standard',
    },
  ];

  return (
    <section className="py-24 bg-[#071521] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeader
          label="THE LUXORA DISTINCTION"
          title="Why Discerning Travelers Choose Us"
          subtitle="A philosophy rooted in authentic human connection, understated elegance, and precision hospitality."
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#0B1F33]/80 hover:bg-[#0E253E] border border-[#C9A227]/20 hover:border-[#C9A227]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_30px_rgba(7,21,33,0.8)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon with Gold Ring */}
                  <div className="w-14 h-14 rounded-2xl bg-[#071521] border border-[#C9A227]/40 flex items-center justify-center text-[#E3C766] group-hover:bg-[#C9A227] group-hover:text-[#071521] transition-all duration-300 mb-6 shadow-md">
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C9A227] block mb-2">
                    {pillar.badge}
                  </span>

                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E3C766] transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#C9A227]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-semibold">Guaranteed Excellence</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
