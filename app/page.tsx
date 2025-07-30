import { Header } from "@/app/components/common/header";
import { ProductList } from "@/app/components/product/product-list";
import { Suspense } from "react";
import ProductListSkeleton from "@/app/components/ui/skeletons/product-list-skeleton";

type PageProps = {
  searchParams?: Promise<{
    query: string | undefined;
    celebration: string | undefined;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const { query, celebration } = params || {};

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl p-4">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList query={query || ""} celebration={celebration || ""} />
        </Suspense>
      </main>
    </>
  );
}

export const dynamic = "force-dynamic";
