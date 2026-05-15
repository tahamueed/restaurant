// app/page.tsx

import Link from 'next/link';
import { Utensils, Calendar, Ticket, MessageCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6">
            <Utensils className="w-16 h-16 text-white mx-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Restaurant Demo Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            See what your restaurant could look like with our modern, fully-featured demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-demo"
              className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Request a Demo
            </Link>
            <Link
              href="#features"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Restaurant Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A complete digital solution for modern restaurants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Utensils,
                title: 'Digital Menu',
                description: 'Beautiful, responsive menu with categories and item customization',
              },
              {
                icon: Calendar,
                title: 'Table Booking',
                description: 'Easy reservation system with instant confirmation',
              },
              {
                icon: Ticket,
                title: 'Deals & Offers',
                description: 'Promote special offers and discount codes',
              },
              {
                icon: MessageCircle,
                title: 'Lead Capture',
                description: 'Built-in forms to capture customer information',
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch to see how our platform can help your restaurant grow
          </p>
          <Link
            href="/request-demo"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}