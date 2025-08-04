import { NavbarCatalog } from "@/app/catalogo/components/NavbarCatalog";
import { ProductList } from "@/app/catalogo/components/products";
import { ProductListSkeleton } from "@/components/ui/skeletons/";
import { Suspense } from "react";

type PageProps = {
  searchParams?: Promise<{
    query: string | undefined;
    celebration: string | undefined;
  }>;
};

export default async function Catalog({ searchParams }: PageProps) {
  const params = await searchParams;
  const { query, celebration } = params || {};

  return (
    <>
      <main className="mx-auto w-[95%] max-w-6xl space-y-10 pt-30">
        <NavbarCatalog />
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList query={query || ""} celebration={celebration || ""} />
        </Suspense>
      </main>
    </>
  );
}

export const dynamic = "force-dynamic";
