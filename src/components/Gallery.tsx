import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/gallery';
import { galleryData } from '../data/gallery';
import { SectionHeader } from './SectionHeader';

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Exterior', 'Lobby', 'Rooms', 'Restaurant', 'Pool', 'Spa', 'Events'];

  const filteredItems = selectedFilter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedFilter);

  const openLightbox = (item: GalleryItem) => {
    const index = galleryData.findIndex(g => g.id === item.id);
    if (index !== -1) setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightboxImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % galleryData.length);
    }
  };

  const prevLightboxImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + galleryData.length) % galleryData.length);
    }
  };

  return (
    <section className="py-24 bg-[#071521] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          label="CURATED PERSPECTIVES"
          title="Visual Moments of Luxora"
          subtitle="A glimpse into the architectural majesty, tranquil sanctuaries, and world-class atmosphere awaiting your visit."
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#C9A227] text-[#071521] shadow-[0_0_15px_rgba(201,162,39,0.4)]'
                  : 'bg-[#0B1F33] text-slate-300 hover:text-white hover:bg-[#0E253E] border border-[#C9A227]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#C9A227]/25 shadow-xl ${
                selectedFilter === 'All' ? item.spanClass : 'col-span-12 sm:col-span-6 md:col-span-4'
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-[#071521]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E3C766] bg-[#071521]/90 px-3 py-1 rounded-full border border-[#C9A227]/40">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#C9A227] text-[#071521] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#0B1F33] border border-[#C9A227]/50 text-white hover:text-[#E3C766] hover:border-[#C9A227] flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={prevLightboxImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0B1F33]/80 border border-[#C9A227]/40 text-white hover:bg-[#C9A227] hover:text-[#071521] flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextLightboxImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0B1F33]/80 border border-[#C9A227]/40 text-white hover:bg-[#C9A227] hover:text-[#071521] flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Card */}
          <div
            className="max-w-4xl w-full bg-[#071521] border border-[#C9A227]/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={galleryData[activeLightboxIndex].image}
                alt={galleryData[activeLightboxIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6 bg-[#071521] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#C9A227]/20">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9A227] block mb-1">
                  {galleryData[activeLightboxIndex].category} • Photo {activeLightboxIndex + 1} of {galleryData.length}
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  {galleryData[activeLightboxIndex].title}
                </h3>
                <p className="text-sm text-slate-300 font-light mt-1">
                  {galleryData[activeLightboxIndex].caption}
                </p>
              </div>

              <a
                href="#booking-widget-section"
                onClick={closeLightbox}
                className="gold-button px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider shrink-0 cursor-pointer"
              >
                Book This Experience
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
