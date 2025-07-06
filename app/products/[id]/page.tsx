import ProductDetails from "@/app/components/product/product-details";
import ProductDetailsSkeleton from "@/app/components/ui/skeletons/product-details-skeleton";
import { getCachedProductById } from "@/app/lib/data";
import { Suspense } from "react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: ProductPageProps) => {
  const product = await getCachedProductById((await params).id);
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

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductDetails id={id} />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
