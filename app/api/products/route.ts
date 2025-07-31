import { getAllProducts, getProductsByCelebration, searchProducts } from "@/app/lib/db/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
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

  if (query) {
    const products = await searchProducts(query);
    if (!products) return NextResponse.json({ error: "Error al buscar productos" }, { status: 500 });
    return NextResponse.json(products);
  }

  return NextResponse.json([]);
}
