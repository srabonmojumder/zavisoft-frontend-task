'use client';

import { useProducts } from '@/context/ProductContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Newsletter from '@/components/layout/Newsletter';
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
      <Header />

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
          <div className="px-4 md:px-8 lg:px-12 py-6 md:py-10 md:pb-0">
            <Newsletter />
            <Footer />
          </div>
        </main>
      )}
    </div>
  );
}
