import api from '@/lib/api';
import { Category } from '@/types';

export async function getCategories(): Promise<Category[]> {
  const { data } = await api.get<Category[]>('/categories');
  return data;
}

export async function getCategoryById(id: number): Promise<Category> {
  const { data } = await api.get<Category>(`/categories/${id}`);
  return data;
}
