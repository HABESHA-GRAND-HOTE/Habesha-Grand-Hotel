import React from 'react';
import { Users, Bed, Maximize2, ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Room } from '../data/rooms';

interface RoomCardProps {
  room: Room;
  onBookNow: (room: Room) => void;
  onViewDetails?: (room: Room) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onBookNow, onViewDetails }) => {
  return (
    <div className="group relative bg-[#0B1F33] rounded-2xl overflow-hidden border border-[#C9A227]/20 hover:border-[#C9A227]/70 shadow-xl hover:shadow-[0_15px_35px_rgba(7,21,33,0.8)] transition-all duration-500 flex flex-col justify-between">
      
      {/* Top Image Container with Zoom Effect */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-black/20 to-transparent" />

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071521]/80 backdrop-blur-md border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766]">
          <Star className="w-3.5 h-3.5 fill-[#C9A227] text-[#C9A227]" />
          <span>{room.rating.toFixed(2)}</span>
          <span className="text-slate-400 font-normal">({room.reviewsCount})</span>
        </div>

        {/* Price Tag Floating Overlay */}
        <div className="absolute bottom-4 right-4 bg-[#071521]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#C9A227]/40 shadow-lg text-right">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block">From</span>
          <span className="text-xl font-serif font-bold text-[#E3C766]">
            ${room.pricePerNight}
          </span>
          <span className="text-xs text-slate-300 font-light"> / night</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Room Name & Tagline */}
          <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#E3C766] transition-colors mb-2">
            {room.name}
          </h3>
          <p className="text-xs font-medium text-[#C9A227] tracking-wider uppercase mb-3">
            {room.tagline}
          </p>

          <p className="text-sm text-slate-300 font-light line-clamp-2 mb-6">
            {room.description}
          </p>

          {/* Key Specs (Capacity, Bed, Size) */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-[#071521]/60 rounded-xl border border-white/5 mb-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-4 h-4 text-[#C9A227] mb-1" />
              <span className="text-xs font-medium text-slate-200">{room.capacity}</span>
            </div>
            <div className="flex flex-col items-center border-x border-white/10">
              <Bed className="w-4 h-4 text-[#C9A227] mb-1" />
              <span className="text-xs font-medium text-slate-200">{room.bedType}</span>
            </div>
            <div className="flex flex-col items-center">
              <Maximize2 className="w-4 h-4 text-[#C9A227] mb-1" />
              <span className="text-xs font-medium text-slate-200">{room.size}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
          <Link
            to={`/rooms/${room.id}`}
            onClick={(e) => {
              if (onViewDetails) {
                e.preventDefault();
                onViewDetails(room);
              }
            }}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-600 hover:border-[#C9A227] text-slate-300 hover:text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>View Room</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => onBookNow(room)}
            className="gold-button w-full py-2.5 px-3 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center cursor-pointer"
          >
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
