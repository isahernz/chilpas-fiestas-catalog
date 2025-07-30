import { getCelebrationIdBySlug } from "@/app/lib/db/celebrations";
import { getProductsByCelebration } from "@/app/lib/db/products";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { celebration: string } }) {
  const { celebration } = params;

  if (!celebration) {
    return NextResponse.json({ message: "Missing celebration slug in path" }, { status: 400 });
  }

  const celebrationId = await getCelebrationIdBySlug(celebration);

  if (!celebrationId) {
    return NextResponse.json({ message: "Celebration not found" }, { status: 404 });
  }

  const products = await getProductsByCelebration(celebrationId);

  return NextResponse.json(products || [], { status: 200 });
}
