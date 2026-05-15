export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface Special {
  name: string;
  price: number;
  badge: string;
}

export interface Deal {
  code: string;
  discount: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Restaurant {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  primaryColor: string;
  accentColor: string;
  cuisine: string;
  location: string;
  phone: string;
  rating: number;
  openingHours: string;
  heroImage: string;
  menu: MenuCategory[];
  specials: Special[];
  deals: Deal[];
  faqs: FAQ[];
}