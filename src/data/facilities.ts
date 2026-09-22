export interface Facility {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  hours: string;
  highlight: string;
  image: string;
}

export const facilitiesData: Facility[] = [
  {
    id: 'spa',
    title: 'Luxury Spa & Wellness',
    tagline: 'Holistic rejuvenation for mind and body',
    description: 'Immerse in bespoke treatments, aroma steam baths, and signature hydrotherapy designed by world-renowned therapists.',
    iconName: 'Sparkles',
    hours: '08:00 AM – 10:00 PM',
    highlight: 'Awarded Best Luxury Hotel Spa 2025',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dining',
    title: 'Fine Dining & Sommelier',
    tagline: 'Michelin-starred culinary mastery',
    description: 'Savor seasonal gastronomic creations paired with curated vintage selections from our private subterranean cellar.',
    iconName: 'UtensilsCrossed',
    hours: '06:30 AM – 11:30 PM',
    highlight: 'Curated 7-Course Chef Tasting Menu',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'infinity-pool',
    title: 'Heated Infinity Pool',
    tagline: 'Panoramic rooftop sky oasis',
    description: 'Bask in year-round temperature-controlled waters overlooking skyline sunsets with poolside cabana cocktail service.',
    iconName: 'Waves',
    hours: '06:00 AM – 11:00 PM',
    highlight: 'Private Cabanas & Sunset Aperitifs',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fitness',
    title: 'State-of-the-Art Fitness',
    tagline: 'Technogym-equipped wellness studio',
    description: 'Elevate your fitness regimen with cutting-edge cardiovascular gear, free weights, and dedicated certified personal trainers.',
    iconName: 'Dumbbell',
    hours: '24 Hours Daily',
    highlight: 'Complimentary Yoga & Pilates Sessions',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'concierge',
    title: '24/7 Royal Concierge',
    tagline: 'Seamless personalized assistance',
    description: 'From private jet charters and diplomatic VIP arrangements to exclusive city reservations, our Les Clefs d’Or team is always at your service.',
    iconName: 'ShieldCheck',
    hours: '24 Hours Daily',
    highlight: 'Les Clefs d’Or Certified Members',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wifi',
    title: 'Ultra High-Speed Wi-Fi',
    tagline: 'Enterprise-grade fiber connectivity',
    description: 'Enjoy seamless multi-gigabit Wi-Fi 7 connectivity across every inch of the estate, meeting rooms, and garden terraces.',
    iconName: 'Wifi',
    hours: 'Unlimited 24/7',
    highlight: 'Dedicated Encrypted Enterprise Line',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
];
