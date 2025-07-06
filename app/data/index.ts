import { Product } from "@/app/types/product";
import { Celebration } from "@/app/types/celebration";
import { products } from "@/app/data/products";
import { celebrations } from "@/app/data/celebrations";

export async function getAllProducts(): Promise<(Product & { celebration: Celebration })[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return products.map(product => ({
    ...product,
    celebration: celebrations.find(c => c.id === product.celebration_id)!,
  }));
}

export async function getProductById(id: string): Promise<Product & { celebration: Celebration }> {
  await new Promise(resolve => setTimeout(resolve, 3000));

  const product = products.find(product => product.id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return {
    ...product,
    celebration: celebrations.find(c => c.id === product.celebration_id)!,
  };
}
