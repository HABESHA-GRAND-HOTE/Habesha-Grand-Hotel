export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  description: string;
  image: string;
  tag: string;
}

export const experiencesData: Experience[] = [
  {
    id: 'city-tours',
    title: 'Curated City & Heritage Tours',
    subtitle: 'Private Chauffeured Exploration',
    category: 'Culture & Discovery',
    duration: 'Half or Full Day',
    description: 'Explore the vibrant cultural landmarks, historical museums, and artisan coffee houses with our private expert docent.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    tag: 'Bespoke Guide',
  },
  {
    id: 'wellness-spa',
    title: 'Sanctuary Wellness & Spa',
    subtitle: 'Restorative Holistic Rituals',
    category: 'Relaxation & Health',
    duration: '90 - 180 Mins',
    description: 'Ancient healing philosophies intertwined with modern hydrotherapy, essential oils, and sound bath sessions.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature Ritual',
  },
  {
    id: 'romantic-escapes',
    title: 'Romantic Sunset & Rooftop Escapes',
    subtitle: 'Candlelight & Champagne',
    category: 'Couples & Intimate',
    duration: 'Evening Affair',
    description: 'Private rooftop terrace dining under starlit skies accompanied by private string quartets and rare vintage wines.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    tag: 'Exclusive Moments',
  },
  {
    id: 'adventure',
    title: 'Highland Nature & Scenic Expeditions',
    subtitle: 'Breathtaking Landscapes',
    category: 'Adventure & Nature',
    duration: 'Custom Itinerary',
    description: 'Helicopter excursions to breathtaking highland mountain ridges, crater lakes, and private sunset picnics.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    tag: 'Helicopter Tour',
  },
];
