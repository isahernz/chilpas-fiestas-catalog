"use client";

import { ProductCard } from "@/app/components/product/product-card";
import ProductListSkeleton from "@/app/components/ui/skeletons/product-list-skeleton";
import { useApi } from "@/app/hooks/useApi";
import { Product } from "@/app/types/product";
import { useSearchParams } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const ProductList = () => {
  const searchParams = useSearchParams();

  const celebration = searchParams.get("celebration");
  const query = searchParams.get("query") || "";

  let apiUrl = `${API_BASE_URL}/products`;

  if (celebration) {
    apiUrl = `${API_BASE_URL}/products/by-celebration/${encodeURIComponent(celebration)}`;
  } else if (query) {
    apiUrl = `${API_BASE_URL}/products?query=${encodeURIComponent(query)}`;
  }

  const { data: products, isLoading, error } = useApi<Product[]>(apiUrl);

  if (isLoading) return <ProductListSkeleton />;

  if (error) return <p className="text-red-500">{error}</p>;

  if (products?.length === 0 || products === null || products === undefined) {
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
