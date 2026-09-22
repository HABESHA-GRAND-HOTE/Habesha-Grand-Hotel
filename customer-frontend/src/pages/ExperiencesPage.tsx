import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ExperienceCard } from '../components/ExperienceCard';
import { experiencesData } from '../data/experiences';
import { BookingModal } from '../components/BookingModal';
import { Compass } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="relative pt-36 pb-20 bg-gradient-to-b from-[#0B1F33] to-[#071521] border-b border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521]/80 border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766] mb-4">
            <Compass className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>CURATED JOURNEYS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Curated <span className="gold-gradient-text italic">Experiences</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Unforgettable memories tailored by our private guides, from starlit rooftop romance to cultural docent tours.
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiencesData.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} onSelect={() => setBookingModalOpen(true)} />
          ))}
        </div>
      </main>

      <Footer />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </div>
  );
};
