"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Celebration } from "@/app/types/celebration";
import { useApi } from "@/app/hooks/useApi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function CelebrationFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { data: celebrations, isLoading, error } = useApi<Celebration[]>(`${API_BASE_URL}/api/celebrations`);

  const handleSelectChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === "*") {
      params.delete("celebration");
    } else if (value) {
      params.set("celebration", value);
    } else {
      params.delete("celebration");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-full max-w-[200px]">
        <SelectValue placeholder="Celebraciones" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{isLoading ? "Cargando..." : "Celebraciones"}</SelectLabel>
          {error && <SelectLabel>Error al cargar celebraciones</SelectLabel>}
          {celebrations?.length === 0 && <SelectLabel>No hay celebraciones disponibles</SelectLabel>}

          <SelectItem value="*">Todos las celebraciones</SelectItem>
          {celebrations?.map(celebration => (
            <SelectItem key={celebration.id} value={celebration.slug}>
              {celebration.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
