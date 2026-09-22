import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { BookingWidget } from '../components/BookingWidget';
import type { BookingParams } from '../components/BookingWidget';
import { WelcomeSection } from '../components/WelcomeSection';
import { SectionHeader } from '../components/SectionHeader';
import { RoomCard } from '../components/RoomCard';
import { FacilityCard } from '../components/FacilityCard';
import { DiningSection } from '../components/DiningSection';
import { ExperienceCard } from '../components/ExperienceCard';
import { SpecialOffer } from '../components/SpecialOffer';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsSection } from '../components/TestimonialCard';
import { Gallery } from '../components/Gallery';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { MenuModal } from '../components/MenuModal';
import { RoomDetailModal } from '../components/RoomDetailModal';
import { roomsData } from '../data/rooms';
import type { Room } from '../data/rooms';
import { facilitiesData } from '../data/facilities';
import { experiencesData } from '../data/experiences';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const handleOpenBooking = (room?: Room) => {
    if (room) {
      setSelectedRoom(room);
    }
    setBookingModalOpen(true);
  };

  const handleViewRoomDetails = (room: Room) => {
    setSelectedRoom(room);
    setDetailModalOpen(true);
  };

  const handleBookingSearch = (_params: BookingParams) => {
    setBookingModalOpen(true);
  };

  const scrollToRooms = () => {
    const section = document.getElementById('featured-rooms');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#071521] text-slate-100 flex flex-col selection:bg-[#C9A227]/30 selection:text-[#E3C766]">
      {/* Global Transparent / Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreRooms={scrollToRooms}
        />

        {/* 4. Floating Booking Search Bar */}
        <BookingWidget onSearch={handleBookingSearch} />

        {/* 5. Welcome / Introduction Section */}
        <WelcomeSection />

        {/* 6. Featured Rooms & Suites */}
        <section id="featured-rooms" className="py-24 bg-[#071521] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader
              label="CURATED SANCTUARIES"
              title="Stay Your Way"
              subtitle="Thoughtfully designed spaces for every kind of journey. Handcrafted aesthetics, sweeping panoramic skyline views, and bespoke comforts."
            />

            {/* 3 Featured Rooms Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
              {roomsData.slice(0, 3).map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  onBookNow={(r) => handleOpenBooking(r)}
                  onViewDetails={handleViewRoomDetails}
                />
              ))}
            </div>

            {/* View All Rooms Action */}
            <div className="text-center">
              <Link
                to="/rooms"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#C9A227]/50 bg-[#0B1F33] hover:bg-[#C9A227] hover:text-[#071521] text-[#E3C766] text-xs font-bold uppercase tracking-wider transition-all duration-300 group shadow-lg cursor-pointer"
              >
                <span>View All Rooms &amp; Suites</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Hotel Facilities */}
        <section className="py-24 bg-[#0B1F33]/40 relative overflow-hidden border-t border-[#C9A227]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader
              label="WORLD-CLASS AMENITIES"
              title="Everything You Need. Nothing You Don't."
              subtitle="From tranquil restorative hydrotherapy to state-of-the-art wellness suites and round-the-clock royal concierge assistance."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilitiesData.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </div>
        </section>

        {/* 8. Dining Section */}
        <DiningSection onOpenMenuModal={() => setMenuModalOpen(true)} />

        {/* 9. Experience Section */}
        <section className="py-24 bg-[#071521] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader
              label="BESPOKE ITINERARIES"
              title="Make Your Stay Memorable"
              subtitle="Curated cultural adventures, private helicopter charters, romantic rooftop dining, and holistic wellness retreats."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiencesData.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  onSelect={() => handleOpenBooking()}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 10. Special Offer Section */}
        <SpecialOffer onClaimOffer={() => handleOpenBooking()} />

        {/* 11. Why Choose Us */}
        <WhyChooseUs />

        {/* 12. Guest Testimonials */}
        <TestimonialsSection />

        {/* 13. Gallery & Lightbox */}
        <Gallery />

        {/* 14. Call To Action */}
        <CTASection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Modals for Enhanced Interactivity */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoom={selectedRoom}
      />

      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
      />

      <RoomDetailModal
        room={selectedRoom}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onBookNow={(r) => handleOpenBooking(r)}
      />
    </div>
  );
};
