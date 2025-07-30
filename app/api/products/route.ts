import { getAllProducts, getProductsByCelebration, searchProducts } from "@/app/lib/db/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const celebration = searchParams.get("celebration");

  if (!query && !celebration) {
    const products = await getAllProducts();
    if (!products) return NextResponse.json({ error: "Error al obtener  productos" }, { status: 500 });
    return NextResponse.json(products);
  }

  if (celebration && !query) {
    const products = await getProductsByCelebration(celebration);
    if (!products) return NextResponse.json({ error: "Error al buscar  productos" }, { status: 500 });
    return NextResponse.json(products);
  }

  const products = await searchProducts(query!);

  if (!products) return NextResponse.json({ error: "Error al buscar  productos" }, { status: 500 });
  return NextResponse.json(products);
}
