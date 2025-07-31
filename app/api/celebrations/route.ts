import { getAllCelebrations } from "@/app/lib/db/celebrations";

export async function GET() {
  const celebrations = await getAllCelebrations();
  if (!celebrations) return new Response("Error al obtener celebraciones", { status: 500 });
  return new Response(JSON.stringify(celebrations), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
