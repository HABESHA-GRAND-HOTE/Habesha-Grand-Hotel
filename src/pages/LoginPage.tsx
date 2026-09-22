import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Crown, Lock, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedIn(true);
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
              Member Sign In
            </h1>
            <p className="text-xs text-[#C9A227] tracking-widest uppercase font-semibold">
              LUXORA PRIVILEGE CLUB
            </p>
          </div>

          {signedIn ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center mx-auto mb-4 text-[#E3C766]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Welcome Back</h3>
              <p className="text-xs text-slate-300 mb-6">Signed in as {email || 'Member'}. Accessing your personalized suite perks.</p>
              <Link to="/" className="gold-button inline-block px-6 py-2.5 rounded-full text-xs font-bold uppercase">
                Return to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="guest@luxora.com"
                    className="w-full bg-[#071521] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs text-slate-300">Password</label>
                  <a href="#forgot" className="text-[11px] text-[#C9A227] hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-[#071521] border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="gold-button w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl mt-6"
              >
                <span>Sign In to Member Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-4 border-t border-white/10 text-xs text-slate-400">
                <span>Not a member yet? </span>
                <Link to="/register" className="text-[#E3C766] font-bold hover:underline">
                  Join Luxora Privilege Club
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
