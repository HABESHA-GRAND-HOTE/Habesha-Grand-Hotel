import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown, Menu, X, Phone, Sparkles, User, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms & Suites', href: '/rooms' },
    { name: 'Dining', href: '/dining' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Offers', href: '/offers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#071521]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C9A227]/20'
            : 'bg-gradient-to-b from-[#071521]/90 via-[#071521]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Hotel Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C9A227] rounded-lg p-1"
              aria-label="Habesha Grand Hotel Home"
            >
              <div className="relative w-10 h-10 rounded-full border border-[#C9A227]/50 flex items-center justify-center bg-[#0B1F33]/80 group-hover:border-[#C9A227] group-hover:shadow-[0_0_15px_rgba(201,162,39,0.4)] transition-all duration-300">
                <Crown className="w-5 h-5 text-[#C9A227] transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full border border-[#E3C766]/30 animate-pulse pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.18em] text-lg sm:text-xl font-bold text-white group-hover:text-[#E3C766] transition-colors leading-none">
                  HABESHA GRAND
                </span>
                <span className="text-[9px] tracking-[0.35em] text-[#C9A227] uppercase font-medium mt-1">
                  HOTEL &amp; RESORT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative py-1 text-sm font-medium tracking-wider transition-colors duration-200 group ${
                      active
                        ? 'text-[#E3C766]'
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {/* Gold indicator / Hover underline animation */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#C9A227] to-[#E3C766] transition-all duration-300 ${
                        active ? 'w-full shadow-[0_0_8px_rgba(201,162,39,0.8)]' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Side CTAs */}
            <div className="hidden lg:flex items-center space-x-5">
              <Link
                to="/login"
                className="flex items-center gap-2 text-sm text-slate-200 hover:text-[#E3C766] font-medium tracking-wide transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
              >
                <User className="w-4 h-4 text-[#C9A227]" />
                <span>Sign In</span>
              </Link>

              <button
                onClick={onOpenBooking}
                className="gold-button flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex xl:hidden items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="gold-button px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider sm:flex items-center gap-1.5 hidden"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#0B1F33]/80 border border-[#C9A227]/30 text-white hover:text-[#E3C766] hover:border-[#C9A227] focus:outline-none focus:ring-2 focus:ring-[#C9A227] transition-all"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#E3C766]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-lg xl:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#071521] border-l border-[#C9A227]/30 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Mobile Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#C9A227]/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#0B1F33]">
                  <Crown className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif tracking-[0.15em] text-base font-bold text-white">HABESHA GRAND</span>
                  <span className="text-[8px] tracking-[0.3em] text-[#C9A227]">HOTEL &amp; RESORT</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg text-base font-medium tracking-wide transition-colors ${
                      active
                        ? 'bg-[#0B1F33] text-[#E3C766] border-l-4 border-[#C9A227]'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <Sparkles className="w-4 h-4 text-[#C9A227]" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="pt-6 border-t border-[#C9A227]/20 space-y-3">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#C9A227]/40 text-slate-200 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors"
            >
              <User className="w-4 h-4 text-[#C9A227]" />
              <span>Sign In / Member Portal</span>
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="gold-button w-full py-3.5 rounded-xl text-sm font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>24/7 VIP Concierge: +251 11 667 9000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
