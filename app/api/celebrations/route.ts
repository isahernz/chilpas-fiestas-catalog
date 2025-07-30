import { getAllCelebrations } from "@/app/lib/db/celebrations";
import { NextResponse } from "next/server";

export async function GET() {
  const celebrations = await getAllCelebrations();
  if (!celebrations) return NextResponse.json({ error: "Error al obtener celebraciones" }, { status: 500 });
  return NextResponse.json(celebrations);
}
