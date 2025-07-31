import { ProductCard } from "@/app/components/product/product-card";
import { Product } from "@/app/types";
import { NoProductsFound } from "@/app/components/product/no-products-found";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function ProductList({ query, celebration }: { query: string; celebration: string }) {
  let products: Product[] = [];

  if (!query && !celebration) {
    const res = await fetch(`${API_BASE_URL}/api/products`);
    products = await res.json();
  }

  if (query && !celebration) {
    const res = await fetch(`${API_BASE_URL}/api/products?query=${query}`);
    products = await res.json();
  }

  if (!query && celebration) {
    const res = await fetch(`${API_BASE_URL}/api/products/by-celebration/${celebration}`);
    products = await res.json();
  }

  if (products.length === 0 || !products) {
    return <NoProductsFound />;
  }

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
