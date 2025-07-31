import { createClient } from "@/app/lib/supabase/server";

export async function getAllProducts() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select(`id, name, character, cover, gallery, content, description, celebrations (id, name)`);

  if (error) throw new Error(error.message);

  return products;
}

export const searchProducts = async (query: string) => {
  const supabase = await createClient();
  const trimmedQuery = query.trim();

  try {
    if (!trimmedQuery || trimmedQuery.length < 3) {
      const { data: products, error } = await supabase.from("products").select(`
          id, name, character, cover, gallery, content, description,
          celebrations (id, name)
        `);

      if (error) throw new Error(`Error fetching all products: ${error.message}`);
      return products ?? [];
    }

    const { data: products, error } = await supabase.rpc("search_products_with_celebration", { query });

    if (error) {
      console.error("Supabase RPC error:", error);
      throw new Error(`Error fetching products: ${error.message}`);
    }

    return products.map(({ celebration_id, celebration_name, ...product }) => ({
      ...product,
      celebrations: {
        id: celebration_id,
        name: celebration_name,
      },
    }));
  } catch (error) {
    console.error("Error en searchProducts:", error);
    return [];
  }
};

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

export async function getProductsByCelebration(celebrationId: string) {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select(
      `
      id,
      name,
      character,
      cover,
      gallery,
      content,
      description,
      celebration_id,
      celebrations (id, name, slug)
    `
    )
    .eq("celebration_id", celebrationId);

  if (error) throw new Error(error.message);

  return products ?? [];
}
