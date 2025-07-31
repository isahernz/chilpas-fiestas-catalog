import { getProductById } from "@/app/lib/db/products";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  if (!id) {
    return new Response("ID del producto es requerido", { status: 400 });
  }

  const product = await getProductById(id);

  if (!product) {
    return new Response("Producto no encontrado", { status: 404 });
  }
  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
