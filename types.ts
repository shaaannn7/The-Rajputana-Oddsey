export interface Destination {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  shortDescription: string;
  history: string;
  attractions: { name: string; description: string }[];
  whatToDo: string[];
  fastFacts: {
    bestTimeToVisit: string;
    timings?: string;
    entryFees?: string;
  };
  galleryImages: string[];
  famousFood?: { name: string; description: string }[];
}

export interface Package {
  id: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  route: string[];
  description: string;
  highlights: string[];
  inclusions: string[];
}

export interface Plan {
  id: string;
  tier: 'Silver' | 'Gold' | 'Platinum';
  title: string;
  duration: string;
  destinations: string;
  price: string;
  idealFor: string;
  places: string[];
}