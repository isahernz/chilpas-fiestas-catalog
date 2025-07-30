"use client";

import { Badge } from "@/app/components/ui/badge";
import { buttonVariants } from "@/app/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/app/components/ui/card";
import { Product } from "@/app/types";
import Link from "next/link";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="group overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={product.cover}
        alt={product.name}
        className="h-64 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
      />

      <CardHeader>
        <Badge variant="spotlight" className="text-xs capitalize">
          {product.celebrations?.name}
        </Badge>
        <h3 className="line-clamp-2 text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="line-clamp-3 text-sm text-pretty text-gray-600">{product.description}</p>
      </CardHeader>

      <CardFooter className="pb-4">
        <Link
          href={`/products/${product.id}`}
          className={buttonVariants({
            variant: "default",
            className:
              "w-full bg-gradient-to-r from-pink-500 to-blue-500 transition-colors hover:from-pink-300 hover:to-blue-300",
          })}
        >
          Ver detalles
        </Link>
      </CardFooter>
    </Card>
  );
};
