import { getCelebrationIdBySlug } from "@/app/lib/db/celebrations";
import { getProductsByCelebration } from "@/app/lib/db/products";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ celebration: string }> }) {
  const celebration = (await params).celebration;

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
