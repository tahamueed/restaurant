'use client';

import { useState } from 'react';
import { Restaurant } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  restaurant: Restaurant;
}

export default function Header({ restaurant }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: 'var(--primary)' }}
            />
            <span className="text-xl font-bold" style={{ color: 'var(--primary)' }}>
              {restaurant.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="hover:text-[var(--accent)] transition-colors">Home</Link>
            <Link href="#menu" className="hover:text-[var(--accent)] transition-colors">Menu</Link>
            <Link href="#booking" className="hover:text-[var(--accent)] transition-colors">Book a Table</Link>
            <Link href="#deals" className="hover:text-[var(--accent)] transition-colors">Deals</Link>
            <Link href="#faqs" className="hover:text-[var(--accent)] transition-colors">FAQs</Link>
          </div>

          {/* Cart Button */}
          <button 
            onClick={() => router.push('/cart')}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6" style={{ color: 'var(--primary)' }} />
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 w-5 h-5 text-xs text-white rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <Link href="#home" className="block py-2 hover:text-[var(--accent)] transition-colors">Home</Link>
            <Link href="#menu" className="block py-2 hover:text-[var(--accent)] transition-colors">Menu</Link>
            <Link href="#booking" className="block py-2 hover:text-[var(--accent)] transition-colors">Book a Table</Link>
            <Link href="#deals" className="block py-2 hover:text-[var(--accent)] transition-colors">Deals</Link>
            <Link href="#faqs" className="block py-2 hover:text-[var(--accent)] transition-colors">FAQs</Link>
          </div>
        )}
      </nav>
    </header>
  );
}