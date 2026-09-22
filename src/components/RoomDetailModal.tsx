import React, { useState } from 'react';
import { X, Users, Bed, Maximize2, Check, Star, Calendar } from 'lucide-react';
import type { Room } from '../data/rooms';

interface RoomDetailModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (room: Room) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  onBookNow,
}) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  if (!isOpen || !room) return null;

  const galleryImages = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#071521] border border-[#C9A227]/40 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#071521]/80 backdrop-blur-md text-white hover:text-[#E3C766] flex items-center justify-center border border-slate-700 hover:border-[#C9A227] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Showcase */}
        <div className="relative h-72 sm:h-96 bg-black overflow-hidden">
          <img
            src={galleryImages[selectedImgIndex]}
            alt={room.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071521] via-transparent to-black/30" />

          {/* Thumbnail strip */}
          {galleryImages.length > 1 && (
            <div className="absolute bottom-4 left-6 flex gap-2 z-10">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImgIndex(i)}
                  className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImgIndex === i ? 'border-[#C9A227] scale-105' : 'border-white/40 opacity-70'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="absolute top-5 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071521]/90 border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766]">
            <Star className="w-3.5 h-3.5 fill-[#C9A227] text-[#C9A227]" />
            <span>{room.rating.toFixed(2)} ({room.reviewsCount} verified reviews)</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9A227] block mb-1">
                {room.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{room.name}</h3>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block">Starting from</span>
              <span className="text-3xl font-serif font-bold text-[#E3C766]">${room.pricePerNight}</span>
              <span className="text-xs text-slate-400"> / night</span>
            </div>
          </div>

          {/* Specs bar */}
          <div className="grid grid-cols-3 gap-3 py-4 my-6 bg-[#0B1F33] rounded-2xl border border-white/5 text-center">
            <div>
              <Users className="w-4 h-4 text-[#C9A227] mx-auto mb-1" />
              <p className="text-xs text-slate-400">Capacity</p>
              <p className="text-sm font-semibold text-white">{room.capacity}</p>
            </div>
            <div className="border-x border-white/10">
              <Bed className="w-4 h-4 text-[#C9A227] mx-auto mb-1" />
              <p className="text-xs text-slate-400">Bedding</p>
              <p className="text-sm font-semibold text-white">{room.bedType}</p>
            </div>
            <div>
              <Maximize2 className="w-4 h-4 text-[#C9A227] mx-auto mb-1" />
              <p className="text-xs text-slate-400">Room Size</p>
              <p className="text-sm font-semibold text-white">{room.size}</p>
            </div>
          </div>

          {/* Room Description */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#C9A227] mb-2">Description</h4>
            <p className="text-sm text-slate-300 font-light leading-relaxed">{room.description}</p>
          </div>

          {/* Amenities checklist */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#C9A227] mb-3">Suite Privileges &amp; Amenities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 bg-[#0B1F33]/50 p-2.5 rounded-xl border border-white/5">
                  <Check className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                onClose();
                onBookNow(room);
              }}
              className="gold-button w-full py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <Calendar className="w-4 h-4 text-[#071521]" />
              <span>Book This Suite Now</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-4 rounded-xl border border-slate-700 hover:border-[#C9A227] text-slate-300 hover:text-white text-xs font-semibold tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
