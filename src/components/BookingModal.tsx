import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Crown, ShieldCheck, Users, BedDouble } from 'lucide-react';
import type { Room } from '../data/rooms';
import { roomsData } from '../data/rooms';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom?: Room | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedRoom }) => {
  const today = new Date().toISOString().split('T')[0];
  const nextThreeDays = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const [activeRoom, setActiveRoom] = useState<Room>(selectedRoom || roomsData[0]);
  const [checkIn, setCheckIn] = useState<string>(today);
  const [checkOut, setCheckOut] = useState<string>(nextThreeDays);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [roomCount, setRoomCount] = useState<number>(1);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [step, setStep] = useState<'details' | 'confirmed'>('details');
  const [bookingRef, setBookingRef] = useState<string>('');

  React.useEffect(() => {
    if (selectedRoom) {
      setActiveRoom(selectedRoom);
    }
  }, [selectedRoom]);

  if (!isOpen) return null;

  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)));
  const nights = isNaN(diffTime) || diffTime < 1 ? 1 : diffTime;

  const roomTotal = activeRoom.pricePerNight * nights * roomCount;
  const taxesAndFees = Math.round(roomTotal * 0.12);
  const grandTotal = roomTotal + taxesAndFees;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'LX-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('details');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#071521] border border-[#C9A227]/40 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B1F33] p-6 border-b border-[#C9A227]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#071521]">
              <Crown className="w-5 h-5 text-[#E3C766]" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white">HABESHA GRAND RESERVATIONS</h3>
              <p className="text-xs text-[#C9A227] tracking-wider uppercase">Direct Booking Engine</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#071521] text-slate-400 hover:text-white flex items-center justify-center border border-slate-700 hover:border-[#C9A227] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleBookingSubmit} className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left: Reservation Configuration & Room Selection */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C9A227] mb-2">
                    Select Suite Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {roomsData.map((room) => (
                      <button
                        type="button"
                        key={room.id}
                        onClick={() => setActiveRoom(room)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          activeRoom.id === room.id
                            ? 'bg-[#0B1F33] border-[#C9A227] ring-1 ring-[#C9A227]'
                            : 'bg-[#071521] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <p className="text-xs font-bold text-white truncate">{room.name}</p>
                        <p className="text-xs text-[#E3C766] font-serif font-bold mt-1">${room.pricePerNight}<span className="text-[10px] text-slate-400 font-sans">/nt</span></p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#0B1F33] p-3.5 rounded-xl border border-slate-700">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A227]" /> Check-In
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none"
                    />
                  </div>

                  <div className="bg-[#0B1F33] p-3.5 rounded-xl border border-slate-700">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A227]" /> Check-Out
                    </label>
                    <input
                      type="date"
                      min={checkIn}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Guests & Room Counter */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0B1F33] p-3.5 rounded-xl border border-slate-700">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase mb-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#C9A227]" /> Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer"
                    >
                      <option value={1} className="bg-[#0B1F33]">1 Guest</option>
                      <option value={2} className="bg-[#0B1F33]">2 Guests</option>
                      <option value={3} className="bg-[#0B1F33]">3 Guests</option>
                      <option value={4} className="bg-[#0B1F33]">4+ Guests</option>
                    </select>
                  </div>

                  <div className="bg-[#0B1F33] p-3.5 rounded-xl border border-slate-700">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase mb-1 flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-[#C9A227]" /> Rooms
                    </label>
                    <select
                      value={roomCount}
                      onChange={(e) => setRoomCount(Number(e.target.value))}
                      className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer"
                    >
                      <option value={1} className="bg-[#0B1F33]">1 Suite</option>
                      <option value={2} className="bg-[#0B1F33]">2 Suites</option>
                      <option value={3} className="bg-[#0B1F33]">3 Suites</option>
                    </select>
                  </div>
                </div>

                {/* Guest Details Form */}
                <div className="space-y-4 pt-2 border-t border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                    Lead Guest Information
                  </p>
                  
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Lord Alexander Wright"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      required
                      className="w-full bg-[#0B1F33] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="alexander@habeshagrand.com"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        required
                        className="w-full bg-[#0B1F33] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+251 91 234 5678"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        required
                        className="w-full bg-[#0B1F33] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Special Preferences or Diplomatic Requests</label>
                    <textarea
                      rows={2}
                      placeholder="High floor, airport pickup, hypoallergenic pillows, dietary needs..."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full bg-[#0B1F33] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Stay Summary & Price Breakdown */}
              <div className="lg:col-span-5 bg-[#0B1F33] p-6 rounded-2xl border border-[#C9A227]/30 flex flex-col justify-between">
                <div>
                  <img
                    src={activeRoom.image}
                    alt={activeRoom.name}
                    className="w-full h-40 object-cover rounded-xl mb-4 border border-white/10"
                  />

                  <h4 className="text-xl font-serif font-bold text-white mb-1">{activeRoom.name}</h4>
                  <p className="text-xs text-[#C9A227] mb-4">{activeRoom.capacity} • {activeRoom.bedType} • {activeRoom.size}</p>

                  <div className="space-y-2.5 text-xs text-slate-300 py-4 border-y border-white/10">
                    <div className="flex justify-between">
                      <span>Rate (${activeRoom.pricePerNight} × {nights} {nights === 1 ? 'night' : 'nights'} × {roomCount} room)</span>
                      <span className="font-semibold text-white">${roomTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Occupancy Taxes &amp; Luxury Surcharge (12%)</span>
                      <span className="font-semibold text-white">${taxesAndFees}</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                      <span>Complimentary Breakfast &amp; Wi-Fi</span>
                      <span className="font-semibold">INCLUDED</span>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between pt-4 mb-6">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Total Amount</span>
                    <span className="text-3xl font-serif font-bold text-[#E3C766]">${grandTotal}</span>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="gold-button w-full py-4 rounded-xl text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Confirm Reservation</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2.5">
                    No immediate charge • Pay upon arrival at Habesha Grand Hotel
                  </p>
                </div>
              </div>

            </div>
          </form>
        ) : (
          /* Booking Confirmation State */
          <div className="p-8 sm:p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-[#C9A227]/20 border-2 border-[#C9A227] flex items-center justify-center mx-auto mb-6 text-[#E3C766] shadow-[0_0_30px_rgba(201,162,39,0.5)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
              Reservation Confirmed
            </h3>
            <p className="text-sm text-[#C9A227] uppercase tracking-[0.2em] font-semibold mb-6">
              Reference: {bookingRef}
            </p>

            <p className="text-base text-slate-300 max-w-lg mx-auto mb-8 font-light leading-relaxed">
              Thank you, <strong className="text-white">{guestName || 'Valued Guest'}</strong>. We have reserved your <strong>{activeRoom.name}</strong> ({roomCount} {roomCount === 1 ? 'Suite' : 'Suites'} for {guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}) from <strong>{checkIn}</strong> to <strong>{checkOut}</strong> ({nights} nights). A formal confirmation email has been dispatched to <em>{guestEmail || 'your email'}</em>.
            </p>

            <div className="bg-[#0B1F33] max-w-md mx-auto p-4 rounded-xl border border-[#C9A227]/30 text-xs text-slate-300 mb-8 space-y-1">
              <p>🏨 <strong>Property:</strong> Habesha Grand Hotel, Addis Ababa</p>
              <p>🛎️ <strong>Total Payable at Check-In:</strong> ${grandTotal} USD</p>
              <p>🚗 <strong>VIP Concierge Contact:</strong> +251 11 667 9000</p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="gold-button px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Close &amp; Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
