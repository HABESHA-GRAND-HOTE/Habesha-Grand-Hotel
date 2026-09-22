import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SpecialOffer } from '../components/SpecialOffer';
import { BookingModal } from '../components/BookingModal';
import { Gift } from 'lucide-react';

export const OffersPage: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const seasonalOffers = [
    {
      title: 'Extended Stay Luxury Sanctuary',
      badge: 'Save 25%',
      desc: 'Reserve 3 or more consecutive nights and enjoy complimentary suite upgrade, daily breakfast, and $100 spa credit.',
      code: 'LUXORAEXTEND',
    },
    {
      title: 'Romance & Skyline Package',
      badge: 'Champagne Included',
      desc: 'Includes chilled Dom Pérignon, bespoke rose petal bath ritual, candlelit 5-course dinner, and late check-out.',
      code: 'LUXORAROMANCE',
    },
    {
      title: 'Diplomatic & Executive Package',
      badge: 'VIP Club Lounge',
      desc: 'Includes roundtrip luxury Mercedes S-Class airport transfer, unlimited club lounge access, and private boardroom hours.',
      code: 'LUXORADIPLOMAT',
    },
  ];

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="relative pt-36 pb-20 bg-gradient-to-b from-[#0B1F33] to-[#071521] border-b border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521]/80 border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766] mb-4">
            <Gift className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>EXCLUSIVE PRIVILEGES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Special <span className="gold-gradient-text italic">Offers</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Elevate your stay with curated seasonal packages and exclusive member direct booking privileges.
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <SpecialOffer onClaimOffer={() => setBookingModalOpen(true)} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seasonalOffers.map((offer, idx) => (
            <div key={idx} className="bg-[#0B1F33] p-8 rounded-2xl border border-[#C9A227]/30 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#071521] bg-[#C9A227] px-3 py-1 rounded-full inline-block mb-4">
                  {offer.badge}
                </span>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{offer.title}</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">{offer.desc}</p>
              </div>

              <div>
                <div className="p-3 bg-[#071521] rounded-xl border border-dashed border-[#C9A227]/40 mb-4 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Code:</span>
                  <span className="font-mono font-bold text-[#E3C766]">{offer.code}</span>
                </div>
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="gold-button w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Book With Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </div>
  );
};
