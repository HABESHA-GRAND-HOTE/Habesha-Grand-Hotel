# LUXORA Hotel & Resort — Luxury Hotel Management System

An ultra-premium, modern, and responsive luxury hotel website and management system frontend built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **React Router**, and **Lucide Icons**.

---

## ✨ Features & Visual Highlights

- **Cinematic Full-Screen Hero:** Immersive dusk visual ambiance with custom typography, glowing gold badges, and smooth scroll exploration.
- **Floating Reservation Search Widget:** Interactive check-in/out date range picker, guests & suite counters, and promotional discount codes.
- **Welcome & Heritage Experience:** 2-column introduction highlighting 15+ years of five-star hospitality with statistics.
- **Featured Rooms & Suites:** Real-time suite specifications (dimensions, bedding, capacity, prices, and amenities) with interactive modal details and image zooms.
- **Gastronomy & Sommelier Dining:** Detailed culinary showcase and interactive *Chef's Signature Tasting Menu* modal (Starters, Mains, Desserts, Grand Cru Cellar).
- **Curated Experiences:** Interactive cards for City & Heritage Tours, Wellness & Spa, Romantic Escapes, and Nature Expeditions.
- **Special Offers & Privilege Club:** Promotional banner with exclusive perks and instant coupon code activation (`LUXORAEXTEND`).
- **Interactive Asymmetric Gallery & Lightbox:** CSS Grid gallery categorized by Exterior, Lobby, Rooms, Restaurant, Pool, Spa, and Events with full-screen lightbox navigation.
- **Full Booking Engine Flow:** Step-by-step suite reservation modal with tax calculation, price breakdown, lead guest details, and instant reference confirmation code generation.
- **Responsive Navigation & Mobile Drawer:** Seamless navigation with scroll-driven glassmorphism transparency, desktop hover animations, and mobile drawer.
- **Authentication & Member Portal:** Dedicated Sign In and Privilege Club Registration views.

---

## 🎨 Design System & Color Palette

| Color Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Dark Navy** | `#071521` | Deep primary canvas & backgrounds |
| **Deep Navy** | `#0B1F33` | Elevated luxury cards & panels |
| **Navy Surface** | `#0E253E` | Hover states & interactive surfaces |
| **Luxury Gold** | `#C9A227` | Primary CTAs, highlights, icons & borders |
| **Soft Gold** | `#E3C766` | Text gradients, active links & sparkles |
| **Warm Ivory** | `#F8F5EF` | Text contrast & light elements |

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Icons:** Lucide React & Custom SVG Brand Monograms

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/mulugeta24/Hotel-Management-System.git

# Navigate to project directory
cd Hotel-Management-System

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Build the production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
src/
├── assets/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── BookingWidget.tsx
│   ├── SectionHeader.tsx
│   ├── RoomCard.tsx
│   ├── FacilityCard.tsx
│   ├── DiningSection.tsx
│   ├── ExperienceCard.tsx
│   ├── SpecialOffer.tsx
│   ├── WhyChooseUs.tsx
│   ├── TestimonialCard.tsx
│   ├── Gallery.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── BookingModal.tsx
│   ├── MenuModal.tsx
│   └── RoomDetailModal.tsx
├── data/
│   ├── rooms.ts
│   ├── facilities.ts
│   ├── experiences.ts
│   ├── testimonials.ts
│   └── gallery.ts
├── pages/
│   ├── Home.tsx
│   ├── RoomsPage.tsx
│   ├── RoomDetailPage.tsx
│   ├── DiningPage.tsx
│   ├── FacilitiesPage.tsx
│   ├── ExperiencesPage.tsx
│   ├── OffersPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── BookingPage.tsx
│   ├── LoginPage.tsx
│   └── RegisterPage.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## 📄 License
© 2026 Luxora Hotel & Resort. All rights reserved.
