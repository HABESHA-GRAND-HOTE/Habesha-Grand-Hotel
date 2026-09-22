import React, { useState } from 'react';
import { Crown, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom sleek SVGs for social brands
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#040C14] text-slate-300 pt-20 pb-12 border-t border-[#C9A227]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#0B1F33]">
                <Crown className="w-5 h-5 text-[#C9A227]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.18em] text-lg font-bold text-white">HABESHA GRAND</span>
                <span className="text-[9px] tracking-[0.35em] text-[#C9A227] uppercase">HOTEL &amp; RESORT</span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
              Exceptional hospitality. Unforgettable stays. Where Ethiopian warmth and contemporary luxury meet to redefine the art of grand living.
            </p>

            {/* Newsletter Subscription */}
            <div className="bg-[#071521] p-4 rounded-2xl border border-[#C9A227]/25">
              <p className="text-xs font-semibold text-[#E3C766] uppercase tracking-wider mb-2">
                Privilege Club Newsletter
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  aria-label="Email for newsletter"
                  className="bg-[#0B1F33] text-xs text-white px-3.5 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-[#C9A227] w-full"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="gold-button px-3.5 py-2.5 rounded-xl text-[#071521] flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {newsletterSubscribed && (
                <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Thank you for subscribing to Habesha Grand privileges.
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227] mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/rooms" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  Rooms &amp; Suites
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  Dining &amp; Lounges
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  Facilities &amp; Spa
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  Curated Experiences
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hotel */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227] mb-6">
              Hotel
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  Careers &amp; Talents
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-300 hover:text-[#E3C766] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227] mb-6">
              Contact &amp; Location
            </h4>
            <ul className="space-y-4 text-sm text-slate-300 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <span>123 Grand Avenue, Bole Diplomatic District, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href="tel:+251116679000" className="hover:text-white transition-colors">
                  +251 11 667 9000 / +251 91 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href="mailto:info@habeshagrandhotel.com" className="hover:text-white transition-colors">
                  info@habeshagrandhotel.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#0B1F33] border border-[#C9A227]/30 flex items-center justify-center text-slate-300 hover:text-[#071521] hover:bg-[#C9A227] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#0B1F33] border border-[#C9A227]/30 flex items-center justify-center text-slate-300 hover:text-[#071521] hover:bg-[#C9A227] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-[#0B1F33] border border-[#C9A227]/30 flex items-center justify-center text-slate-300 hover:text-[#071521] hover:bg-[#C9A227] transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#0B1F33] border border-[#C9A227]/30 flex items-center justify-center text-slate-300 hover:text-[#071521] hover:bg-[#C9A227] transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#0B1F33] border border-[#C9A227]/30 flex items-center justify-center text-slate-300 hover:text-[#071521] hover:bg-[#C9A227] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Habesha Grand Hotel. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Designed with World-Class Hospitality Standards</span>
            <span>•</span>
            <span className="text-[#C9A227]">Five-Star Luxury Resort</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
