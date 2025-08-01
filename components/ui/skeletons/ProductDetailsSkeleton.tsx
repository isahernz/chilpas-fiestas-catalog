import { Skeleton } from "@/components/ui/skeleton";

export function ProductDetailsSkeleton() {
  return (
    <section className="grid gap-6 md:grid-cols-2 md:items-center md:gap-x-12">
      <Skeleton className="h-96 w-full rounded-lg object-cover md:h-96" />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-10 w-1/3" />
        </div>

        <div>
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="mt-2 h-48 w-full" />
        </div>

        <div>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="mt-2 h-48 w-full" />
        </div>
      </div>
    </section>
  );
}
