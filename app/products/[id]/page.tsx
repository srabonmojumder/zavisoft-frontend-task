"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { getProductById } from "@/lib/api";
import Loader from "@/components/Loader";
import ErrorState from "@/components/ErrorState";

function sanitizeImageUrl(url: string): string {
  const cleaned = url.replace(/^[\["]+|[\]"]+$/g, "");
  try {
    new URL(cleaned);
    return cleaned;
  } catch {
    return "/placeholder.svg";
  }
}

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      const id = Number(params.id);
      if (isNaN(id)) {
        setError("Invalid product ID");
        setLoading(false);
        return;
      }

      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch {
        setError("Could not load this product. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;
  if (!product) return <ErrorState message="Product not found" />;

  const images = product.images.map(sanitizeImageUrl);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900"
      >
        &larr; Back to products
      </Link>

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        {/* Image gallery */}
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={images[activeImage] || "/placeholder.svg"}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          {images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-16 w-16 overflow-hidden rounded-lg border-2 transition-colors ${
                    i === activeImage
                      ? "border-gray-900"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${product.title} thumbnail ${i + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="flex flex-col">
          <span className="mb-2 w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {product.category.name}
          </span>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.title}
          </h1>
          <p className="mt-4 text-3xl font-bold text-gray-900">
            ${product.price}
          </p>
          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Description
            </h2>
            <p className="mt-2 leading-relaxed text-gray-600">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
