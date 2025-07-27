import { Header } from "@/app/components/common/header";
import { ProductList } from "@/app/components/product/product-list";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl p-4">
        <ProductList />
      </main>
    </>
  );
}

export const dynamic = "force-dynamic";
