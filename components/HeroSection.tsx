'use client';

import { Restaurant } from '@/types';

interface HeroSectionProps {
  restaurant: Restaurant;
}

export default function HeroSection({ restaurant }: HeroSectionProps) {
  return (
    <section id="home" className="relative h-[60vh] md:h-[70vh] min-h-[500px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurant.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
               style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
            {restaurant.cuisine}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {restaurant.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            {restaurant.tagline}
          </p>
          <div className="flex items-center justify-center space-x-2 text-white mb-6">
            <span className="text-yellow-400">★</span>
            <span className="font-semibold">{restaurant.rating}</span>
            <span>• {restaurant.location}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-full text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--primary)' }}
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Menu
            </button>
            <button
              className="px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Table
            </button>
          </div>
          {restaurant.specials && restaurant.specials.length > 0 && (
            <div className="mt-8">
              <p className="text-white/80 text-sm mb-2">Today's Specials</p>
              <div className="flex flex-wrap justify-center gap-2">
                {restaurant.specials.map((special, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}
                  >
                    {special.name} • ${special.price}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}