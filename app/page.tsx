'use client';

import { useProducts } from '@/context/ProductContext';
import Hero from '@/components/home/Hero';
import NewDrops from '@/components/home/NewDrops';
import TrendingTabs from '@/components/home/TrendingTabs';
import AtelierCraft from '@/components/home/AtelierCraft';
import Categories from '@/components/home/Categories';
import FitFinder from '@/components/home/FitFinder';
import Reviews from '@/components/home/Reviews';
import SocialStream from '@/components/home/SocialStream';
import Loader from '@/components/ui/Loader';
import ErrorState from '@/components/ui/ErrorState';

export default function Home() {
  const { products, categories, loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-[#09090d]">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorState message={error} onRetry={() => window.location.reload()} />
      ) : (
        <main>
          <Hero />
          <NewDrops products={products} />
          <TrendingTabs products={products} />
          <AtelierCraft />
          <Categories categories={categories} />
          <FitFinder products={products} />
          <Reviews />
          <SocialStream />
        </main>
      )}
    </div>
  );
}
