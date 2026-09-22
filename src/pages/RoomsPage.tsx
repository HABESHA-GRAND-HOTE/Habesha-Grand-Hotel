import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { RoomCard } from '../components/RoomCard';
import type { Room } from '../data/rooms';
import { roomsData } from '../data/rooms';
import { BookingModal } from '../components/BookingModal';
import { RoomDetailModal } from '../components/RoomDetailModal';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export const RoomsPage: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [filterCapacity, setFilterCapacity] = useState<string>('all');

  const filteredRooms = filterCapacity === 'all'
    ? roomsData
    : roomsData.filter(r => r.capacity.toLowerCase().includes(filterCapacity));

  const handleBook = (room: Room) => {
    setSelectedRoom(room);
    setBookingModalOpen(true);
  };

  const handleView = (room: Room) => {
    setSelectedRoom(room);
    setDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <div className="relative pt-36 pb-20 bg-gradient-to-b from-[#0B1F33] to-[#071521] border-b border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521]/80 border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>ACCOMMODATIONS &amp; SUITES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Rooms &amp; <span className="gold-gradient-text italic">Suites</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Each of our 120+ rooms and signature suites is an oasis of silence, crafted with Italian marble, custom furnishings, and panoramic city vistas.
          </p>
        </div>
      </div>

      {/* Main Filter & Rooms Grid */}
      <main className="flex-1 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter by Guests:</span>
          </div>

          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All Suites' },
              { id: '2', label: '2 Guests' },
              { id: '3', label: '3 Guests' },
              { id: '4', label: '4+ Guests' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterCapacity(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  filterCapacity === tab.id
                    ? 'bg-[#C9A227] text-[#071521]'
                    : 'bg-[#0B1F33] text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onBookNow={handleBook}
              onViewDetails={handleView}
            />
          ))}
        </div>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoom={selectedRoom}
      />

      <RoomDetailModal
        room={selectedRoom}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onBookNow={handleBook}
      />
    </div>
  );
};
