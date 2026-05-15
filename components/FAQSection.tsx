// components/FAQSection.tsx

'use client';

import { Restaurant, FAQ } from '@/types';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  restaurant: Restaurant;
}

export default function FAQSection({ restaurant }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about dining at {restaurant.name}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {restaurant.faqs.map((faq: FAQ, idx: number) => (
            <div key={idx} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--primary)' }}>
                    {faq.question}
                  </h3>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  )}
                </div>
              </button>
              {openIndex === idx && (
                <div className="bg-white rounded-b-lg shadow-md p-4 mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Opening Hours Callout */}
        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-gray-600">
            <span className="font-semibold">Opening Hours:</span> {restaurant.openingHours}
          </p>
        </div>
      </div>
    </section>
  );
}