import { ProductCardSkeleton } from "@/components/ui/skeletons/ProductCardSkeleton";

export function ProductListSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </section>
  );
}
