'use client';

import { useProducts } from '@/context/ProductContext';
import Hero from '@/components/home/Hero';
import NewDrops from '@/components/home/NewDrops';
import Categories from '@/components/home/Categories';
import Reviews from '@/components/home/Reviews';
import Loader from '@/components/ui/Loader';
import ErrorState from '@/components/ui/ErrorState';

export default function Home() {
  const { products, categories, loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-bg">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorState message={error} onRetry={() => window.location.reload()} />
      ) : (
        <main>
          <Hero />
          <NewDrops products={products} />
          <Categories categories={categories} />
          <Reviews />
        </main>
      )}
    </div>
  );
}
