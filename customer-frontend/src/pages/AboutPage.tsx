import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WelcomeSection } from '../components/WelcomeSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BookingModal } from '../components/BookingModal';
import { Crown } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="relative pt-36 pb-20 bg-gradient-to-b from-[#0B1F33] to-[#071521] border-b border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521]/80 border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766] mb-4">
            <Crown className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>HERITAGE &amp; VISION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            About <span className="gold-gradient-text italic">Habesha Grand</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Founded with a passion for timeless sophistication, Habesha Grand Hotel stands as a beacon of world-class luxury hospitality in East Africa.
          </p>
        </div>
      </div>

      <main className="flex-1">
        <WelcomeSection />
        <WhyChooseUs />
      </main>

      <Footer />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </div>
  );
};
