import { NoProductsFound, ProductCard } from "@/app/catalogo/components/products";
import { Product } from "@/app/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function ProductList({ query, celebration }: { query: string; celebration: string }) {
  let products: Product[] = [];
  let apiUrl: string;

  if (query) {
    apiUrl = `${API_BASE_URL}/api/products?query=${query}`;
  } else if (celebration && celebration !== "*") {
    apiUrl = `${API_BASE_URL}/api/products/by-celebration/${celebration}`;
  } else {
    apiUrl = `${API_BASE_URL}/api/products`;
  }

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch products from ${apiUrl}. Status: ${res.status}`);
    }

    products = await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  if (!products || products.length === 0) {
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
