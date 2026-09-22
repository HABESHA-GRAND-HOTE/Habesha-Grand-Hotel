import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DiningSection } from '../components/DiningSection';
import { MenuModal } from '../components/MenuModal';
import { BookingModal } from '../components/BookingModal';
import { Utensils, Clock } from 'lucide-react';

export const DiningPage: React.FC = () => {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const venues = [
    {
      title: 'L’Étoile Fine Dining',
      cuisine: 'Modern French & Ethiopian Fusion',
      hours: '06:30 PM - 11:30 PM',
      desc: 'Our flagship Michelin-starred concept presenting multi-course tasting menus with rare grand cru pairings.',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'The Azure Rooftop Lounge',
      cuisine: 'Artisan Tapas & Craft Cocktails',
      hours: '04:00 PM - 01:00 AM',
      desc: 'Skyline sunset views, live ambient jazz, and bespoke mixology overlooking the city lights.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Botanica Garden Tea Pavilion',
      cuisine: 'High Tea & Artisan Pastries',
      hours: '08:00 AM - 07:00 PM',
      desc: 'Traditional ceremonial Ethiopian single-origin coffees, British high tea, and organic botanical infusions.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="relative pt-36 pb-20 bg-gradient-to-b from-[#0B1F33] to-[#071521] border-b border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521]/80 border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766] mb-4">
            <Utensils className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>GASTRONOMY &amp; CELLAR</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Culinary <span className="gold-gradient-text italic">Artistry</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Savor unforgettable gastronomic creations crafted by internationally acclaimed chefs using the finest harvest.
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {venues.map((venue, idx) => (
            <div key={idx} className="bg-[#0B1F33] rounded-2xl overflow-hidden border border-[#C9A227]/20 shadow-xl group">
              <div className="h-60 overflow-hidden relative">
                <img src={venue.image} alt={venue.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-[#C9A227] font-semibold block mb-1">{venue.cuisine}</span>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{venue.title}</h3>
                <p className="text-xs text-slate-300 font-light mb-4">{venue.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#C9A227]" /> {venue.hours}</span>
                  <button onClick={() => setMenuModalOpen(true)} className="text-xs text-[#E3C766] font-semibold hover:underline cursor-pointer">View Menu →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <DiningSection onOpenMenuModal={() => setMenuModalOpen(true)} />
      </main>

      <Footer />

      <MenuModal isOpen={menuModalOpen} onClose={() => setMenuModalOpen(false)} />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </div>
  );
};
