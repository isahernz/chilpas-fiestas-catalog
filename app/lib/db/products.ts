import { createClient } from "@/app/lib/supabase/server";

export async function getAllProducts() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select(`id, name, character, cover, gallery, content, description, celebrations (id, name)`);

  if (error) throw new Error(error.message);

  return products;
}

export async function searchProducts(query: string) {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select(`id, name, character, cover, gallery, content, description, celebrations (id, name)`)
    .eq("name", query);

  if (error) throw new Error(error.message);

  return products;
}

export async function getProductById(id: string) {
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select(`id, name, character, cover, gallery, content, description, celebrations (id, name)`)
    .eq("id", id)
    .single();

  if (error) throw new Error("Error fetching product");

  return product;
}
