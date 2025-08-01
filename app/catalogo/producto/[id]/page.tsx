import { ProductDetails } from "@/app/catalogo/components/products";
import { ProductDetailsSkeleton } from "@/components/ui/skeletons";
import { Product } from "@/app/types";
import { Suspense } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`${API_BASE_URL}/api/products/${id}`);
  const product: Product = await res.json();

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
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductDetails id={id} />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
