'use client';

import { useEffect, useState, use } from 'react';
import { Product } from '@/types';
import { getProductById, getProducts } from '@/services/productService';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Newsletter from '@/components/layout/Newsletter';
import ProductDetails from '@/components/product/ProductDetails';
import YouMayAlsoLike from '@/components/product/YouMayAlsoLike';
import Loader from '@/components/ui/Loader';
import ErrorState from '@/components/ui/ErrorState';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const productId = Number(id);
        const [productData, allProducts] = await Promise.all([
          getProductById(productId),
          getProducts(10),
        ]);
        setProduct(productData);
        setRelatedProducts(allProducts.filter((p) => p.id !== productId).slice(0, 8));
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to load product';
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {loading ? (
        <Loader />
      ) : error || !product ? (
        <ErrorState message={error || 'Product not found'} />
      ) : (
        <main>
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-10">
            <ProductDetails product={product} />
          </div>

          <YouMayAlsoLike products={relatedProducts} />

          <div className="py-6 md:py-10">
            <Newsletter />
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}
