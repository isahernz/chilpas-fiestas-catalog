import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { About } from "@/components/sections/About";
import { Celebrations } from "@/components/sections/Celebrations";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { ProductsGrid } from "@/components/sections/ProductsGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col items-center justify-center space-y-16 px-4 py-10">
        <Hero />
        <Celebrations />
        <ProductsGrid />
        <About />
        <Location />
      </main>

      <Footer />
    </>
  );
}
