import { ProductCard } from "@/app/components/product/product-card";
import { getSearchProducts } from "@/app/supabase";

export async function ProductList({ query }: { query: string }) {
  const products = await getSearchProducts(query);

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
