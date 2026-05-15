'use client';

import { Restaurant, Deal } from '@/types';
import { useState } from 'react';
import { Ticket, Copy, Check } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

interface DealsSectionProps {
  restaurant: Restaurant;
}

export default function DealsSection({ restaurant }: DealsSectionProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <section id="deals" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
              Special Offers & Deals
            </h2>
            <p className="text-gray-600">
              Exclusive promotions available at {restaurant.name}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {restaurant.deals.map((deal: Deal, idx: number) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="p-6 text-center">
                  <div className="inline-block p-3 rounded-full mb-4" style={{ backgroundColor: 'var(--primary)', opacity: 0.1 }}>
                    <Ticket className="w-8 h-8" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="mb-3">
                    <span className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>
                      {deal.discount}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  <div className="flex items-center justify-center gap-2">
                    <code className="px-3 py-1 bg-gray-100 rounded font-mono text-sm">
                      {deal.code}
                    </code>
                    <button
                      onClick={() => copyToClipboard(deal.code)}
                      className="p-1 rounded transition-colors hover:bg-gray-100"
                    >
                      {copiedCode === deal.code ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                      )}
                    </button>
                  </div>
                  <button
                    onClick={() => setSelectedDeal(deal)}
                    className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold transition-all text-white"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    Claim Offer →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Show this code at checkout or mention it to your server
            </p>
          </div>
        </div>
      </section>

      <LeadCaptureModal
        isOpen={!!selectedDeal}
        onClose={() => setSelectedDeal(null)}
        restaurantName={restaurant.name}
        offerTitle={selectedDeal?.discount || ''}
      />
    </>
  );
}
