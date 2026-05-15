'use client';

import { useState } from 'react';
import { Restaurant } from '@/types';
import { generateRef } from '@/lib/utils';
import { Calendar, Clock, Phone, MapPin } from 'lucide-react';

interface BookingSectionProps {
  restaurant: Restaurant;
}

export default function BookingSection({ restaurant }: BookingSectionProps) {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateRef('BOOK');
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              Thank you {bookingData.name}, your table has been reserved at {restaurant.name}.
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="font-semibold">Reference Number:</p>
              <p className="text-xl font-bold" style={{ color: 'var(--primary)' }}>{bookingRef}</p>
            </div>
            <p className="text-sm text-gray-500">
              We've sent a confirmation to {bookingData.email}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            Book a Table
          </h2>
          <p className="text-gray-600">Reserve your dining experience at {restaurant.name}</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                <span>{restaurant.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                <span>{restaurant.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                <span>{restaurant.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <input
                    type="time"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Number of Guests</label>
                <select
                  className="w-full px-4 py-2 border rounded-lg"
                  value={bookingData.guests}
                  onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}