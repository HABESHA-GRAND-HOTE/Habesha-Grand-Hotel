import React, { useState } from 'react';
import { Calendar, Users, Search, ChevronDown, CheckCircle2, Sparkles } from 'lucide-react';

interface BookingWidgetProps {
  onSearch?: (params: BookingParams) => void;
}

export interface BookingParams {
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  roomType?: string;
  promoCode?: string;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onSearch }) => {
  const today = new Date().toISOString().split('T')[0];
  const nextThreeDays = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(today);
  const [checkOut, setCheckOut] = useState<string>(nextThreeDays);
  const [guests, setGuests] = useState<number>(2);
  const [rooms, setRooms] = useState<number>(1);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>('');
  const [showPromoInput, setShowPromoInput] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchSuccess, setSearchSuccess] = useState<boolean>(false);

  const handleAvailabilityCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setSearchSuccess(false);

    setTimeout(() => {
      setIsSearching(false);
      setSearchSuccess(true);
      if (onSearch) {
        onSearch({
          checkIn,
          checkOut,
          guests,
          rooms,
          promoCode,
        });
      }
      setTimeout(() => {
        setSearchSuccess(false);
      }, 4000);
    }, 600);
  };

  return (
    <div id="booking-widget-section" className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
      <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(7,21,33,0.35)] border border-[#C9A227]/30 p-4 sm:p-6 lg:p-7 text-slate-800 transition-all duration-300">
        <form onSubmit={handleAvailabilityCheck}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
            
            {/* CHECK-IN */}
            <div className="lg:col-span-3 bg-[#F8F5EF] hover:bg-[#F3EFE6] transition-colors p-3.5 rounded-xl border border-slate-200/80 focus-within:border-[#C9A227] focus-within:ring-2 focus-within:ring-[#C9A227]/20">
              <label htmlFor="check-in-date" className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Check-In</span>
              </label>
              <input
                id="check-in-date"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                aria-label="Check-in date"
                className="w-full bg-transparent text-sm font-semibold text-[#071521] focus:outline-none cursor-pointer"
              />
            </div>

            {/* CHECK-OUT */}
            <div className="lg:col-span-3 bg-[#F8F5EF] hover:bg-[#F3EFE6] transition-colors p-3.5 rounded-xl border border-slate-200/80 focus-within:border-[#C9A227] focus-within:ring-2 focus-within:ring-[#C9A227]/20">
              <label htmlFor="check-out-date" className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Check-Out</span>
              </label>
              <input
                id="check-out-date"
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                aria-label="Check-out date"
                className="w-full bg-transparent text-sm font-semibold text-[#071521] focus:outline-none cursor-pointer"
              />
            </div>

            {/* GUESTS & ROOMS DROPDOWN */}
            <div className="relative lg:col-span-3 bg-[#F8F5EF] hover:bg-[#F3EFE6] transition-colors p-3.5 rounded-xl border border-slate-200/80">
              <label className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Guests &amp; Rooms</span>
              </label>
              <button
                type="button"
                onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
                className="w-full flex items-center justify-between text-left text-sm font-semibold text-[#071521] focus:outline-none"
              >
                <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}, {rooms} {rooms === 1 ? 'Room' : 'Rooms'}</span>
                <ChevronDown className={`w-4 h-4 text-[#C9A227] transition-transform duration-200 ${guestDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Guest / Room popover */}
              {guestDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-[#C9A227]/30 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div>
                      <p className="text-xs font-bold text-[#071521]">Guests</p>
                      <p className="text-[11px] text-slate-500">Adults &amp; Children</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={guests <= 1}
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold text-[#071521] w-4 text-center">{guests}</span>
                      <button
                        type="button"
                        disabled={guests >= 8}
                        onClick={() => setGuests(Math.min(8, guests + 1))}
                        className="w-7 h-7 rounded-full border border-[#C9A227] text-[#071521] flex items-center justify-center hover:bg-[#F8F5EF] font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div>
                      <p className="text-xs font-bold text-[#071521]">Rooms</p>
                      <p className="text-[11px] text-slate-500">Number of suites</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={rooms <= 1}
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                        className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold text-[#071521] w-4 text-center">{rooms}</span>
                      <button
                        type="button"
                        disabled={rooms >= 4}
                        onClick={() => setRooms(Math.min(4, rooms + 1))}
                        className="w-7 h-7 rounded-full border border-[#C9A227] text-[#071521] flex items-center justify-center hover:bg-[#F8F5EF] font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setGuestDropdownOpen(false)}
                    className="w-full mt-3 py-1.5 bg-[#071521] text-[#E3C766] rounded-lg text-xs font-semibold hover:bg-[#0B1F33] transition-colors"
                  >
                    Apply Selection
                  </button>
                </div>
              )}
            </div>

            {/* CHECK AVAILABILITY BUTTON */}
            <div className="lg:col-span-3">
              <button
                type="submit"
                disabled={isSearching}
                className="gold-button w-full h-[58px] rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xl disabled:opacity-75"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-[#071521] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Check Availability</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Sub-bar with Promo Code toggle & Guarantees */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowPromoInput(!showPromoInput)}
                className="text-xs font-medium text-[#C9A227] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{showPromoInput ? 'Hide Promo Code' : 'Have a Promo or Corporate Code?'}</span>
              </button>

              {showPromoInput && (
                <input
                  type="text"
                  placeholder="e.g. HABESHA2026"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  className="px-2.5 py-1 text-xs border border-slate-300 rounded-md focus:outline-none focus:border-[#C9A227]"
                />
              )}
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" />
                Best Rate Direct Guarantee
              </span>
              <span className="hidden sm:inline-block text-slate-300">•</span>
              <span className="hidden sm:flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" />
                Flexible Free Cancellation
              </span>
            </div>
          </div>

          {/* Search feedback alert */}
          {searchSuccess && (
            <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between animate-in fade-in duration-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  <strong>Suites Available!</strong> 8 room tiers available for your selected dates ({checkIn} to {checkOut}). Special direct discount applied!
                </span>
              </div>
              <a
                href="#featured-rooms"
                className="font-bold underline text-emerald-900 hover:text-emerald-700"
              >
                View Rooms ↓
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
