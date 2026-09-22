import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="relative pt-36 pb-20 bg-gradient-to-b from-[#0B1F33] to-[#071521] border-b border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521]/80 border border-[#C9A227]/40 text-xs font-semibold text-[#E3C766] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>24/7 DIPLOMATIC &amp; VIP INQUIRIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Contact <span className="gold-gradient-text italic">Luxora</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Our concierge and guest relations ambassadors are standing by around the clock to assist your every request.
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0B1F33] p-8 rounded-2xl border border-[#C9A227]/30 shadow-xl space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Hotel Location</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#071521] border border-[#C9A227]/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E3C766]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Address</p>
                  <p className="text-sm text-white font-medium">123 Grand Avenue, Bole Diplomatic District, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#071521] border border-[#C9A227]/40 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#E3C766]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Telephone</p>
                  <p className="text-sm text-white font-medium">+251 11 667 9000 (Main Switchboard)</p>
                  <p className="text-xs text-slate-400">+251 91 123 4567 (VIP Concierge WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#071521] border border-[#C9A227]/40 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#E3C766]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Electronic Mail</p>
                  <p className="text-sm text-white font-medium">reservations@luxorahotel.com</p>
                  <p className="text-xs text-slate-400">concierge@luxorahotel.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#071521] border border-[#C9A227]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#E3C766]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Concierge Availability</p>
                  <p className="text-sm text-white font-medium">24 Hours Daily • 365 Days a Year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#0B1F33] p-8 sm:p-10 rounded-2xl border border-[#C9A227]/30 shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Send an Inquiry</h3>
            <p className="text-sm text-slate-300 font-light mb-6">
              Please provide your details and requirements. Our senior guest relations manager will respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Lady Victoria Bennett"
                    className="w-full bg-[#071521] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="victoria@bennett.com"
                    className="w-full bg-[#071521] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Private Suite Booking / Event Inquiries / Diplomatic Security"
                  className="w-full bg-[#071521] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your requested dates, special arrangements, or inquiries..."
                  className="w-full bg-[#071521] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                />
              </div>

              <button
                type="submit"
                className="gold-button w-full py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-900/40 border border-emerald-500 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you. Your message has been received. Our concierge will contact you shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </div>
  );
};
