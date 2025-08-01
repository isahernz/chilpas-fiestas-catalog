import { CelebrationFilter } from "@/app/catalogo/components/filters/CelebrationFilter";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function FilterPanel() {
  const data = await fetch(`${API_BASE_URL}/api/celebrations`, {
    cache: "no-store",
  });
  const celebrations = await data.json();

  return <CelebrationFilter celebrations={celebrations} />;
}
