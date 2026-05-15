'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurantName: '',
    slug: '',
  });

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-10">
          <h1 className="text-4xl font-bold mb-4">Request a Demo</h1>
          <p className="text-lg text-slate-200">
            Share your restaurant details and we’ll create a branded demo just for you.
          </p>
        </div>

        <div className="p-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold mb-4">Request Sent!</h2>
              <p className="text-gray-600 mb-8">
                Thank you {formData.name}. We will contact you soon with your custom demo at {formData.email}.
              </p>
              <Link
                href="/"
                className="inline-block rounded-full bg-slate-900 px-8 py-3 text-white font-semibold hover:bg-slate-800 transition"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const requests = JSON.parse(localStorage.getItem('demo-requests') || '[]');
                requests.push({
                  ...formData,
                  timestamp: new Date().toISOString(),
                  id: `REQ-${Date.now()}`,
                });
                localStorage.setItem('demo-requests', JSON.stringify(requests));
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                  value={formData.restaurantName}
                  onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website or Preferred Slug</label>
                <input
                  type="text"
                  placeholder="e.g. my-restaurant-name"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="rounded-full bg-slate-900 px-8 py-3 text-white font-semibold hover:bg-slate-800 transition"
                >
                  Submit Request
                </button>
                <Link
                  href="/"
                  className="inline-block rounded-full border border-slate-900 px-8 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition"
                >
                  Back to Home
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
