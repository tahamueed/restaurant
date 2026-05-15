// components/LeadCaptureModal.tsx
'use client';

import { useState } from 'react';
import { generateRef } from '@/lib/utils';
import { X } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
  offerTitle: string;
}

export default function LeadCaptureModal({ 
  isOpen, 
  onClose, 
  restaurantName, 
  offerTitle 
}: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateRef('LEAD');
    setReference(ref);
    setSubmitted(true);
    
    // Store lead data
    localStorage.setItem(`lead-${ref}`, JSON.stringify({
      ...formData,
      restaurant: restaurantName,
      offer: offerTitle,
      timestamp: new Date().toISOString(),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--primary)' }}>
            Claim Your Offer
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-600 mb-4">
                Get {offerTitle} at {restaurantName}
              </p>
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Claim Offer
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Offer Claimed!</h3>
              <p className="text-gray-600 mb-4">
                We'll send your offer details to {formData.email}
              </p>
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-500">Reference Number</p>
                <p className="font-mono font-bold" style={{ color: 'var(--primary)' }}>{reference}</p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg text-white font-semibold"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}