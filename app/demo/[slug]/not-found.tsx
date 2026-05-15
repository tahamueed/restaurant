// app/demo/[slug]/not-found.tsx

import Link from 'next/link';

export default function RestaurantNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Restaurant Not Found</h2>
        <p className="text-gray-600 mb-8">
          The restaurant you're looking for doesn't exist or the link is incorrect.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition-colors hover:opacity-90 bg-gray-800 hover:bg-gray-900"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}