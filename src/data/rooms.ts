export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  bedType: string;
  size: string;
  pricePerNight: number;
  originalPrice?: number;
  featured: boolean;
  image: string;
  gallery: string[];
  amenities: string[];
  rating: number;
  reviewsCount: number;
}

export const roomsData: Room[] = [
  {
    id: 'deluxe-king-room',
    name: 'Deluxe King Room',
    tagline: 'Refined comfort with breathtaking views',
    description: 'Elegant comfort with panoramic views and everything you need for a relaxing stay. Features custom Italian linen, marble bath, and artisan mini-bar.',
    capacity: '2 Guests',
    bedType: '1 King Bed',
    size: '42 m²',
    pricePerNight: 180,
    originalPrice: 220,
    featured: true,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['High-speed Wi-Fi', 'Smart Climate Control', 'Nespresso Coffee Bar', 'Walk-in Rain Shower', '24h In-Room Dining'],
    rating: 4.94,
    reviewsCount: 128,
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    tagline: 'Expansive luxury designed for both work and rest',
    description: 'Spacious modern sanctuary with a separate living lounge, private work atelier, soaking bathtub, and exclusive 24/7 executive club lounge access.',
    capacity: '3 Guests',
    bedType: '1 Super King + Daybed',
    size: '68 m²',
    pricePerNight: 320,
    originalPrice: 380,
    featured: true,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Private Balcony', 'Executive Lounge Access', 'Marble Soaking Tub', 'Bose Sound System', 'Butler Service On-Demand'],
    rating: 4.98,
    reviewsCount: 96,
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tagline: 'The pinnacle of international opulence',
    description: 'An expansive masterpiece boasting 180° panoramic skyline & garden vistas, private dining salon, dedicated butler team, and custom handcrafted furnishings.',
    capacity: '4 Guests',
    bedType: '2 King Master Suites',
    size: '145 m²',
    pricePerNight: 750,
    originalPrice: 900,
    featured: true,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Private Elevator Access', 'Dedicated 24/7 Butler', 'Personal Sauna & Jacuzzi', 'Private Wine Cellar', 'Chauffeured Airport Transfer'],
    rating: 5.0,
    reviewsCount: 64,
  },
  {
    id: 'grand-garden-villa',
    name: 'Grand Garden Villa',
    tagline: 'Secluded tranquility amidst lush botanical gardens',
    description: 'Private detached luxury villa featuring private plunge pool, open-air cabana, botanical garden views, and bespoke culinary concierge.',
    capacity: '4 Guests',
    bedType: '2 King Beds',
    size: '180 m²',
    pricePerNight: 980,
    featured: false,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Private Heated Plunge Pool', 'Outdoor Rain Shower', 'Private Chef Experience', 'Daily In-Villa Massage'],
    rating: 4.97,
    reviewsCount: 42,
  },
];
