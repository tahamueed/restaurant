'use client';

import { Restaurant, MenuCategory } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';

interface MenuSectionProps {
  restaurant: Restaurant;
}

export default function MenuSection({ restaurant }: MenuSectionProps) {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            Our Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        {restaurant.menu.map((category: MenuCategory, idx: number) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 pb-2 border-b-2 inline-block"
                style={{ borderColor: 'var(--accent)' }}>
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-lg hover:shadow-lg transition-shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <span className="font-bold" style={{ color: 'var(--primary)' }}>
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <button
                      onClick={() => addToCart(item)}
                      className="flex items-center gap-1 text-sm font-semibold transition-colors"
                      style={{ color: 'var(--accent)' }}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}