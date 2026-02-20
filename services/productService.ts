import api from '@/lib/api';
import { Product } from '@/types';

export async function getProducts(limit: number = 20, offset: number = 0): Promise<Product[]> {
  const { data } = await api.get<Product[]>('/products', {
    params: { limit, offset },
  });
  return data;
}

export async function getProductById(id: number): Promise<Product> {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
}

export async function getProductsByCategory(categoryId: number): Promise<Product[]> {
  const { data } = await api.get<Product[]>(`/categories/${categoryId}/products`);
  return data;
}
