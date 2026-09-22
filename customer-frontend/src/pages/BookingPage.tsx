import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingWidget } from '../components/BookingWidget';
import { roomsData } from '../data/rooms';
import type { Room } from '../data/rooms';
import { BookingModal } from '../components/BookingModal';
import { RoomCard } from '../components/RoomCard';
import { RoomDetailModal } from '../components/RoomDetailModal';
import { Calendar } from 'lucide-react';

export const BookingPage: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

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

      <div className="relative pt-36 pb-24 bg-gradient-to-b from-[#0B1F33] to-[#071521] border-b border-[#C9A227]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521]/80 border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766] mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>DIRECT RESERVATION PORTAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Book Your <span className="gold-gradient-text italic">Stay</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Select your preferred dates and explore our available luxury suites with best rate guarantees.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-12">
        <BookingWidget onSearch={() => setBookingModalOpen(true)} />
      </div>

      <main className="flex-1 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Available Suites for Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
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
