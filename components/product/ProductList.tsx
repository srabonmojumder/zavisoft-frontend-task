import { Product } from '@/types';
import ProductCard from './ProductCard';
import EmptyState from '@/components/ui/EmptyState';

interface ProductListProps {
  products: Product[];
  columns?: 2 | 4;
}

export default function ProductList({ products, columns = 4 }: ProductListProps) {
  if (products.length === 0) {
    return <EmptyState title="No products found" description="Check back later for new arrivals." />;
  }

  const gridCols =
    columns === 2
      ? 'grid-cols-2'
      : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  return (
    <div className={`grid ${gridCols} gap-4 md:gap-6`}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          isNew={index < 6}
          discount={index % 3 === 1 ? '50% off' : undefined}
        />
      ))}
    </div>
  );
}
