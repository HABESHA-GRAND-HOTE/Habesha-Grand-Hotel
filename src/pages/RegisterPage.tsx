import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Crown, Lock, Mail, User, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4">
        <div className="w-full max-w-md bg-[#0B1F33] p-8 sm:p-10 rounded-3xl border border-[#C9A227]/40 shadow-2xl">
          
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#071521] mx-auto mb-4">
              <Crown className="w-7 h-7 text-[#E3C766]" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
              Join Privilege Club
            </h1>
            <p className="text-xs text-[#C9A227] tracking-widest uppercase font-semibold">
              EXCLUSIVE GUEST PRIVILEGES &amp; REWARDS
            </p>
          </div>

          {registered ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center mx-auto mb-4 text-[#E3C766]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Membership Activated</h3>
              <p className="text-xs text-slate-300 mb-6">Welcome to Luxora Privilege Club. Your 10% direct booking discount has been unlocked.</p>
              <Link to="/" className="gold-button inline-block px-6 py-2.5 rounded-full text-xs font-bold uppercase">
                Explore The Hotel
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Baron Arthur Kensington"
                    className="w-full bg-[#071521] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="kensington@diplomat.com"
                    className="w-full bg-[#071521] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+251 91 123 4567"
                    className="w-full bg-[#071521] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••••••••"
                    className="w-full bg-[#071521] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="gold-button w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl mt-6"
              >
                <span>Create Privilege Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-4 border-t border-white/10 text-xs text-slate-400">
                <span>Already have a membership? </span>
                <Link to="/login" className="text-[#E3C766] font-bold hover:underline">
                  Sign In
                </Link>
              </div>
            </form>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};
