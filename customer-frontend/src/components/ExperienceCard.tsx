import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { Experience } from '../data/experiences';

interface ExperienceCardProps {
  experience: Experience;
  onSelect?: (experience: Experience) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onSelect }) => {
  return (
    <div
      onClick={() => onSelect && onSelect(experience)}
      className="group relative h-96 sm:h-[420px] rounded-2xl overflow-hidden cursor-pointer border border-[#C9A227]/25 shadow-xl transition-all duration-500 hover:border-[#C9A227] hover:shadow-[0_20px_40px_rgba(7,21,33,0.9)] flex flex-col justify-end p-6"
    >
      {/* Background Image with Zoom */}
      <img
        src={experience.image}
        alt={experience.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071521] via-[#071521]/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[#0B1F33]/20 group-hover:bg-[#071521]/40 transition-colors duration-500" />

      {/* Top Floating Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071521]/80 backdrop-blur-md border border-[#C9A227]/40 text-[11px] font-semibold text-[#E3C766]">
          <Sparkles className="w-3 h-3 text-[#C9A227]" />
          {experience.tag}
        </span>
      </div>

      {/* Top Right Arrow indicator */}
      <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#071521]/80 backdrop-blur-md border border-[#C9A227]/30 flex items-center justify-center text-slate-300 group-hover:text-[#071521] group-hover:bg-[#C9A227] group-hover:border-[#C9A227] transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      {/* Content that transforms on hover */}
      <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
        {/* Category & Duration */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A227] uppercase tracking-wider mb-2">
          <span>{experience.category}</span>
          <span>•</span>
          <span className="text-slate-300 font-normal">{experience.duration}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#E3C766] transition-colors mb-2">
          {experience.title}
        </h3>

        {/* Description - reveals cleanly on hover */}
        <p className="text-sm text-slate-300 font-light leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
          {experience.description}
        </p>

        {/* Gold Accent Line that Expands */}
        <div className="mt-4 h-[2px] w-12 bg-[#C9A227] group-hover:w-full transition-all duration-500 shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
      </div>
    </div>
  );
};
