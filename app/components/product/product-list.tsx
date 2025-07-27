"use client";

import { ProductCard } from "@/app/components/product/product-card";
import ProductListSkeleton from "@/app/components/ui/skeletons/product-list-skeleton";
import { useApi } from "@/app/hooks/useApi";
import { Product } from "@/app/types/product";
import { useSearchParams } from "next/navigation";

export const ProductList = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const apiUrl = query ? `/api/products?query=${encodeURIComponent(query)}` : "/api/products";
  const { data: products, isLoading, error } = useApi<Product[]>(apiUrl);

  if (isLoading) return <ProductListSkeleton />;

  if (error) return <p className="text-red-500">{error}</p>;

  if (!products || products.length === 0) {
    return <p className="text-gray-500">No se encontraron productos</p>;
  }

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
