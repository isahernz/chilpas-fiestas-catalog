import ProductDetails from "@/app/components/product/product-details";
import ProductDetailsSkeleton from "@/app/components/ui/skeletons/product-details-skeleton";
import { Suspense } from "react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  return (
    <section className="mx-auto max-w-4xl">
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetails id={id} />
      </Suspense>
    </section>
  );
}

export const dynamic = "force-dynamic";
