"use client";

import { useProducts } from "@/context/ProductContext";
import CategoryList from "@/components/CategoryList";
import ProductGrid from "@/components/ProductGrid";
import Loader from "@/components/Loader";
import ErrorState from "@/components/ErrorState";

export default function HomePage() {
  const { products, categories, loading, error } = useProducts();

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          ShopZone
        </h1>
        <p className="mt-1 text-gray-500">Discover products you&apos;ll love</p>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Browse Categories
        </h2>
        <CategoryList categories={categories} />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          All Products
        </h2>
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
