import { getCelebrationIdBySlug } from "@/app/lib/db/celebrations";
import { getProductsByCelebration } from "@/app/lib/db/products";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ celebration: string }> }) {
  const celebration = (await params).celebration;

  if (!celebration) {
    return new Response("Missing celebration slug in path", { status: 400 });
  }

  const celebrationId = await getCelebrationIdBySlug(celebration);

  if (!celebrationId) {
    return new Response("Celebration not found", { status: 404 });
  }

  const products = await getProductsByCelebration(celebrationId);

  return new Response(JSON.stringify(products || []), { status: 200 });
}
