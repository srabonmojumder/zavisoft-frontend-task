'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Product, Category } from '@/types';
import { getProducts } from '@/services/productService';
import { getCategories } from '@/services/categoryService';

interface ProductContextValue {
  products: Product[];
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const ProductContext = createContext<ProductContextValue | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [productData, categoryData] = await Promise.all([
          getProducts(20),
          getCategories(),
        ]);
        setProducts(productData);
        setCategories(categoryData);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to load data';
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, categories, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
