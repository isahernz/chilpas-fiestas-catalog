import { Header } from "@/app/components/common/header";
import { ProductList } from "@/app/components/product/product-list";
import ProductListSkeleton from "@/app/components/ui/skeletons/product-list-skeleton";
import { Suspense } from "react";

type PageProps = {
  searchParams?: Promise<{
    query?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = typeof params?.query === "string" ? params.query : "";

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl p-4">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList query={query} />
        </Suspense>
      </main>
    </>
  );
}

export const dynamic = "force-dynamic";
