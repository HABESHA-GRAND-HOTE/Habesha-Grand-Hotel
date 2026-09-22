export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  quote: string;
  stayType: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Montgomery',
    location: 'London, United Kingdom',
    role: 'Global Design Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    date: 'February 2026',
    quote: 'From the private limousine pickup to the bespoke turndown service, every single detail exceeded our highest expectations. The Presidential Suite was pure architectural poetry.',
    stayType: 'Presidential Suite Stay',
  },
  {
    id: '2',
    name: 'Dr. Jean-Luc Bertrand',
    location: 'Geneva, Switzerland',
    role: 'Diplomatic Envoy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    date: 'January 2026',
    quote: 'Habesha Grand Hotel strikes that rare harmony between international world-class sophistication and warm, genuine Ethiopian hospitality. The culinary experience at the Sommelier Table is truly unforgettable.',
    stayType: 'Executive Suite Stay',
  },
  {
    id: '3',
    name: 'Elena Rostova',
    location: 'Dubai, UAE',
    role: 'Luxury Travel Curator',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    date: 'March 2026',
    quote: 'The rooftop infinity pool at golden hour with the city skyline in the backdrop is heavenly. The concierge team secured exclusive reservations that made our entire anniversary trip magic.',
    stayType: 'Deluxe King Experience',
  },
];
