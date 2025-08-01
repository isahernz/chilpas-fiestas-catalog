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
      <NavbarCatalog />
      <main className="mx-auto max-w-4xl p-4">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList query={query || ""} celebration={celebration || ""} />
        </Suspense>
      </main>
    </>
  );
}

export const dynamic = "force-dynamic";
