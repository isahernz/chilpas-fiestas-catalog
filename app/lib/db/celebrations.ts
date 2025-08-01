import { createClient } from "@/app/lib/supabase/server";

export async function getAllCelebrations() {
  const supabase = await createClient();

  const { data: celebrations, error } = await supabase
    .from("celebrations")
    .select(`id, name, slug, cover, description`);

  if (error) throw new Error(error.message);

  return celebrations;
}

export async function getCelebrationById(id: string) {
  const supabase = await createClient();

  const { data: celebration, error } = await supabase
    .from("celebrations")
    .select(`id, name, slug`)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return celebration;
}

export async function getCelebrationIdBySlug(slug: string) {
  const supabase = await createClient();

  const { data: celebration, error } = await supabase.from("celebrations").select(`id`).eq("slug", slug).single();

  if (error) throw new Error(error.message);

  return celebration.id;
}
