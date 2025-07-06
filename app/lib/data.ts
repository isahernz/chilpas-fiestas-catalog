import { cache } from "react";
import { getProductById } from "@/app/supabase";

export const getCachedProductById = cache(async (id: string) => {
  const res = await getProductById(id);
  return res;
});
