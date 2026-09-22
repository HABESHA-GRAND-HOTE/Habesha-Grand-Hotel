import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { roomsData } from '../data/rooms';
import { BookingModal } from '../components/BookingModal';
import { Check, Star, Calendar, ArrowLeft, Sparkles } from 'lucide-react';

export const RoomDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const room = roomsData.find((r) => r.id === id) || roomsData[0];
  const galleryImages = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <main className="flex-1 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#E3C766] hover:text-white uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Rooms &amp; Suites</span>
          </Link>
        </div>

        {/* Room Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#C9A227]/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33] border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{room.tagline}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2">{room.name}</h1>
            <div className="flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1 text-[#E3C766]">
                <Star className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                {room.rating.toFixed(2)} ({room.reviewsCount} verified guest reviews)
              </span>
              <span>•</span>
              <span>{room.capacity}</span>
              <span>•</span>
              <span>{room.size}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs text-slate-400 block uppercase">Nightly Rate</span>
              <span className="text-3xl font-serif font-bold text-[#E3C766]">${room.pricePerNight}</span>
              <span className="text-xs text-slate-400"> / night</span>
            </div>
            <button
              onClick={() => setBookingModalOpen(true)}
              className="gold-button px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xl"
            >
              Reserve Suite
            </button>
          </div>
        </div>

        {/* Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main big image */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-[#C9A227]/30 shadow-2xl h-[380px] sm:h-[480px]">
            <img
              src={galleryImages[selectedImgIndex]}
              alt={room.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Side thumbnails and quick highlights */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImgIndex(i)}
                  className={`h-36 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${
                    selectedImgIndex === i ? 'border-[#C9A227] ring-2 ring-[#C9A227]/30' : 'border-slate-700 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="bg-[#0B1F33] p-6 rounded-2xl border border-[#C9A227]/30">
              <h3 className="text-xs uppercase font-bold tracking-wider text-[#C9A227] mb-3">Key Suite Highlights</h3>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">✓ Italian high-thread linens</li>
                <li className="flex items-center gap-2">✓ Marble bathroom with soaking tub</li>
                <li className="flex items-center gap-2">✓ High-speed Wi-Fi 7 connection</li>
                <li className="flex items-center gap-2">✓ 24/7 Diplomatic in-suite dining</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Specs & Amenities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Suite Overview</h3>
              <p className="text-base text-slate-300 font-light leading-relaxed mb-4">{room.description}</p>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Designed by renowned architectural masters, this space pairs traditional understated opulence with futuristic convenience. Enjoy automated mood lighting, ultra-silent climate regulation, and panoramic skyline vistas from sunrise to starlight.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Privileges &amp; Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#0B1F33] p-3.5 rounded-xl border border-white/5">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0" />
                    <span className="text-sm text-slate-200">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Booking summary card */}
          <div className="lg:col-span-4">
            <div className="bg-[#0B1F33] p-8 rounded-3xl border border-[#C9A227]/40 shadow-2xl sticky top-28 space-y-6">
              <h3 className="text-xl font-serif font-bold text-white">Reserve {room.name}</h3>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Capacity</span>
                  <span className="font-semibold text-white">{room.capacity}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Bedding</span>
                  <span className="font-semibold text-white">{room.bedType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Floor Space</span>
                  <span className="font-semibold text-white">{room.size}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10 text-emerald-400">
                  <span>Direct Booking Perk</span>
                  <span>10% Spa Discount</span>
                </div>
              </div>

              <button
                onClick={() => setBookingModalOpen(true)}
                className="gold-button w-full py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <Calendar className="w-4 h-4 text-[#071521]" />
                <span>Book This Room</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Guaranteed best rate • Flexible check-in terms
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoom={room}
      />
    </div>
  );
};
