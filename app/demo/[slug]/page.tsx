import { notFound } from 'next/navigation';
import restaurantsData from '@/data/restaurants.json';
import { Restaurant } from '@/types';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import BookingSection from '@/components/BookingSection';
import DealsSection from '@/components/DealsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

// This enables static generation for all restaurants
export async function generateStaticParams() {
  return restaurantsData.restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export default function RestaurantDemoPage({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = restaurantsData.restaurants.find(
    (r) => r.slug.toLowerCase() === params.slug.toLowerCase()
  ) as Restaurant;

  if (!restaurant) {
    notFound();
  }

  return (
    <main
      style={
        {
          '--primary': restaurant.primaryColor,
          '--accent': restaurant.accentColor,
        } as React.CSSProperties
      }
      className="min-h-screen bg-gray-50"
    >
      <Header restaurant={restaurant} />
      <HeroSection restaurant={restaurant} />
      <MenuSection restaurant={restaurant} />
      <BookingSection restaurant={restaurant} />
      <DealsSection restaurant={restaurant} />
      <FAQSection restaurant={restaurant} />
      <Footer restaurant={restaurant} />
    </main>
  );
}