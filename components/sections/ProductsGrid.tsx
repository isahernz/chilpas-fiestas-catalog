import { ProductCard } from "@/app/catalogo/components/products";
import { Product } from "@/app/types";
import { Badge } from "@/components/ui/badge";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function ProductsGrid() {
  const res = await fetch(`${API_BASE_URL}/api/products`);
  const products: Product[] = await res.json();

  return (
    <section id="catalogo" className="rounded-3xl bg-gradient-to-br from-gray-50 to-white px-4 py-10 lg:p-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <Badge className="rounded-full border border-purple-200 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-purple-700">
            Todo para tu celebración 🎉
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Descubre nuestro{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              catálogo
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Productos de alta calidad seleccionados especialmente para hacer de tu celebración un momento único e
            inolvidable
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
