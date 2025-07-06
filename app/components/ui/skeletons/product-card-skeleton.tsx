import { Skeleton } from "@/app/components/ui/skeleton";
import { Card, CardHeader, CardFooter } from "@/app/components/ui/card";

const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative">
        <Skeleton className="h-64 w-full object-cover" />
      </div>

      <CardHeader>
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-14 w-full" />
      </CardHeader>

      <CardFooter className="pb-4">
        <Skeleton className="h-9 w-full" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
