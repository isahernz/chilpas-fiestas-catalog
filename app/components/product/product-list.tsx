import { ProductCard } from "@/app/components/product/product-card";
import { getAllProducts } from "@/app/services/product-service";

export async function ProductList() {
  const products = await getAllProducts();

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
