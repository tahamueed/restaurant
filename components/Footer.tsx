// components/Footer.tsx

'use client';

import { Restaurant } from '@/types';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';

interface FooterProps {
  restaurant: Restaurant;
}

export default function Footer({ restaurant }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
              {restaurant.name}
            </h3>
            <p className="text-gray-400">{restaurant.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{restaurant.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{restaurant.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{restaurant.openingHours}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 {restaurant.name}. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for our valued guests
          </p>
        </div>
      </div>
    </footer>
  );
}