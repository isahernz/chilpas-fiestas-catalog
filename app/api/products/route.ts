import { getAllProducts, getProductsByCelebration, searchProducts } from "@/app/lib/db/products";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const celebration = searchParams.get("celebration");

  if (!query && !celebration) {
    const products = await getAllProducts();

    if (!products) return new Response("Error al obtener  productos", { status: 500 });

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (celebration && !query) {
    const products = await getProductsByCelebration(celebration);
    if (!products) return new Response("Error al buscar  productos", { status: 500 });
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const products = await searchProducts(query!);

  if (!products) return new Response("Error al buscar  productos", { status: 500 });
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
