export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Lobby' | 'Rooms' | 'Restaurant' | 'Pool' | 'Spa' | 'Events';
  image: string;
  spanClass: string; // For CSS Grid asymmetric layout
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Architectural Evening Facade',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    spanClass: 'col-span-12 md:col-span-8 md:row-span-2',
    caption: 'Modern luxury facade with illuminated grand entrance and water mirrors.',
  },
  {
    id: 'g2',
    title: 'Grand Marble Lobby & Atrium',
    category: 'Lobby',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    spanClass: 'col-span-12 sm:col-span-6 md:col-span-4 md:row-span-1',
    caption: 'Towering marble pillars, crystal chandeliers, and curated contemporary art.',
  },
  {
    id: 'g3',
    title: 'Rooftop Infinity Oasis',
    category: 'Pool',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    spanClass: 'col-span-12 sm:col-span-6 md:col-span-4 md:row-span-1',
    caption: 'Year-round heated infinity pool floating above the city skyline.',
  },
  {
    id: 'g4',
    title: 'L’Etoile Fine Dining Salon',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    spanClass: 'col-span-12 sm:col-span-6 md:col-span-4 md:row-span-1',
    caption: 'Intimate ambiance with world-class sommelier service and artisan culinary arts.',
  },
  {
    id: 'g5',
    title: 'Imperial Presidential Suite Salon',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    spanClass: 'col-span-12 sm:col-span-6 md:col-span-4 md:row-span-1',
    caption: 'Bespoke hand-crafted Italian furnishings and master suite comforts.',
  },
  {
    id: 'g6',
    title: 'Aura Thermal Spa Sanctuary',
    category: 'Spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    spanClass: 'col-span-12 sm:col-span-6 md:col-span-4 md:row-span-1',
    caption: 'Hydrotherapy pools, eucalyptus steam rooms, and calming mineral stones.',
  },
  {
    id: 'g7',
    title: 'Grand Ballroom & Gala Events',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    spanClass: 'col-span-12 md:col-span-8 md:row-span-1',
    caption: 'Sophisticated event spaces for prestigious international galas and diplomatic summits.',
  },
];
