import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FacilityCard } from '../components/FacilityCard';
import { facilitiesData } from '../data/facilities';
import { BookingModal } from '../components/BookingModal';
import { Sparkles } from 'lucide-react';

export const FacilitiesPage: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="relative pt-36 pb-20 bg-gradient-to-b from-[#0B1F33] to-[#071521] border-b border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521]/80 border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>ESTATE PRIVILEGES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Hotel <span className="gold-gradient-text italic">Facilities</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Indulge in holistic wellness, heated sky pools, Technogym fitness centers, and 24/7 dedicated royal concierge.
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilitiesData.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </main>

      <Footer />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </div>
  );
};
