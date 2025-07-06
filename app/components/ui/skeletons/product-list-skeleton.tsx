import ProductCardSkeleton from "@/app/components/ui/skeletons/product-card-skeleton";

const ProductListSkeleton = () => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </section>
  );
};

export default ProductListSkeleton;
