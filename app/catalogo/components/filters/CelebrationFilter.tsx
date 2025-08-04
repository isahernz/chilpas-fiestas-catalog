"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Celebration } from "@/app/types/celebration";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function CelebrationFilter({ celebrations }: { celebrations: Celebration[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentCelebration = searchParams.get("celebration") || "*";

  const handleSelectChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value !== currentCelebration) {
      params.delete("query");

      if (value === "*") {
        params.delete("celebration");
      } else {
        params.set("celebration", value);
      }

      replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <Select onValueChange={handleSelectChange} defaultValue={currentCelebration} value={currentCelebration}>
      <SelectTrigger className="w-full md:max-w-[200px]">
        <SelectValue placeholder="Selecciona una celebración" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {celebrations?.length === 0 && <SelectLabel>No hay celebraciones disponibles</SelectLabel>}

          <SelectItem value="*">Todas las celebraciones</SelectItem>
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
