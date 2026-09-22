import React from 'react';
import { Sparkles, UtensilsCrossed, Waves, Dumbbell, ShieldCheck, Wifi, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Facility } from '../data/facilities';

interface FacilityCardProps {
  facility: Facility;
}

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  ShieldCheck,
  Wifi,
};

export const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  const IconComponent = iconMap[facility.iconName] || Sparkles;

  return (
    <div className="group relative bg-[#0B1F33] hover:bg-[#0E253E] border border-[#C9A227]/20 hover:border-[#C9A227]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_12px_30px_rgba(7,21,33,0.7)] flex flex-col justify-between">
      
      {/* Top Section: Icon & Hours */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#071521] border border-[#C9A227]/30 flex items-center justify-center text-[#E3C766] group-hover:bg-[#C9A227] group-hover:text-[#071521] transition-all duration-300 shadow-md">
            <IconComponent className="w-7 h-7 transition-transform group-hover:scale-110" />
          </div>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 bg-[#071521]/60 px-3 py-1 rounded-full border border-white/5">
            <Clock className="w-3 h-3 text-[#C9A227]" />
            {facility.hours}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E3C766] transition-colors mb-2">
          {facility.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider mb-3">
          {facility.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
          {facility.description}
        </p>
      </div>

      {/* Bottom Highlight */}
      <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#E3C766]">
        <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#C9A227]" />
        <span className="font-medium truncate">{facility.highlight}</span>
      </div>

      {/* Subtle bottom gold hover glow bar */}
      <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
