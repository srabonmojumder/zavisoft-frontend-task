import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
  size: number;
  color: string;
}
