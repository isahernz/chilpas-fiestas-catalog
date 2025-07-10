import { createClient } from "@/app/supabase/client";

const supabase = createClient();

export const getSearchProducts = async (query: string) => {
  try {
    const { data, error } = await supabase.rpc("search_products_with_celebration", { query });

    const products = data?.map(({ celebration_id, celebration_name, ...rest }) => ({
      ...rest,
      celebrations: {
        id: celebration_id,
        name: celebration_name,
      },
    }));

    if (error) throw new Error("Error fetching products");

    return products;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const { data: product, error } = await supabase
      .from("products")
      .select(`name, character, cover, gallery, content, description, celebrations (id, name)`)
      .eq("id", id)
      .single();

    if (error) throw new Error("Error fetching product");

    return product;
  } catch (error) {
    console.error(error);
  }
};
