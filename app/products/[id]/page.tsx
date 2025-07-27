import { Badge } from "@/app/components/ui/badge";
import ProductDetailsSkeleton from "@/app/components/ui/skeletons/product-details-skeleton";
import { getProductById } from "@/app/lib/get-product-by-id";
import { Suspense } from "react";

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProductById(id);

  return {
    title: `Chilpas Fiestas | ${product?.name} 🥳`,
    description: product?.description,
    openGraph: {
      title: product?.name,
      description: product?.description,
      images: [
        {
          url: product?.cover,
          width: 1200,
          height: 630,
          alt: product?.name,
        },
      ],
    },
  };
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
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
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
