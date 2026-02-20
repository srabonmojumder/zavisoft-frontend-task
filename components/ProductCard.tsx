import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

function sanitizeImageUrl(url: string): string {
  const cleaned = url.replace(/^[\["]+|[\]"]+$/g, "");
  try {
    new URL(cleaned);
    return cleaned;
  } catch {
    return "/placeholder.svg";
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = sanitizeImageUrl(product.images[0]);

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="truncate text-sm font-medium text-gray-900">
            {product.title}
          </h3>
          <p className="mt-1 text-base font-semibold text-gray-800">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
