import { Badge } from "@/app/components/ui/badge";
import { Product } from "@/app/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.VERCEL_URL || process.env.VERCEL_BRANCH_URL;

export const ProductInfoDetails = async ({ id }: { id: string }) => {
  const res = await fetch(`${API_BASE_URL}/api/products/${id}`);
  const product = (await res.json()) as Product;

  return (
    <section className="grid gap-6 md:grid-cols-2 md:items-center md:gap-x-12">
      <img src={product?.cover} alt={product?.name} className="w-full rounded-lg object-cover" />

      <div className="space-y-6">
        <div className="flex items-center justify-between gap-x-2">
          <h1 className="bg-gradient-to-r from-pink-600 via-blue-600 to-yellow-600 bg-clip-text text-4xl leading-none font-bold text-balance text-transparent">
            {product?.name}
          </h1>
          <Badge variant="spotlight" className="px-4 text-base capitalize">
            {product?.celebrations?.name}
          </Badge>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Descripción</h3>
          <p className="mt-2 text-gray-600">{product?.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Contenido del paquete</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
            {product?.content?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
