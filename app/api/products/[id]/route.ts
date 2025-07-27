import { getProductById } from "@/app/lib/db/products";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return NextResponse.json({ error: "ID del producto es requerido" }, { status: 400 });
  }

  const product = await getProductById(params.id);

  if (!product) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }
  return NextResponse.json(product);
}
