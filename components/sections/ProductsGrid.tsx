import { ProductCard } from "@/app/catalogo/components/products";
import { Product } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function ProductsGrid() {
  const res = await fetch(`${API_BASE_URL}/api/products`);
  const products: Product[] = await res.json();

  return (
    <section
      id="catalogo"
      className="space-y-8 rounded-3xl border border-white/20 bg-gradient-to-br from-cyan-100/70 via-yellow-50/50 to-green-100/60 px-4 py-10 shadow-lg lg:p-16"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <Badge className="rounded-full border border-pink-200 bg-gradient-to-r from-pink-100 via-cyan-50 to-yellow-100 px-4 py-2 text-sm font-medium text-pink-700">
            Todo para tu celebración 🎉
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Descubre nuestro{" "}
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
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

      <Link
        href="/catalogo"
        className="group mx-auto flex max-w-max gap-x-2 rounded-2xl bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-lg hover:from-pink-600 hover:via-orange-500 hover:to-cyan-500"
      >
        <span>Ir al catálogo digital</span>
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
