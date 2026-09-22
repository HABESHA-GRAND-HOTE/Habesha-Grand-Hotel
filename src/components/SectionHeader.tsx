import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {/* Small Gold Label */}
      <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="w-6 h-[1px] bg-[#C9A227]" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
          {label}
        </span>
        <span className="w-6 h-[1px] bg-[#C9A227]" />
      </div>

      {/* Main Heading */}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4 ${
          light ? 'text-[#071521]' : 'text-white'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-base sm:text-lg font-light leading-relaxed ${
            light ? 'text-slate-600' : 'text-slate-300'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
