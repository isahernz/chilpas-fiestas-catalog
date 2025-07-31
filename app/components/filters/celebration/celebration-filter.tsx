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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function CelebrationFilter({ celebrations }: { celebrations: Celebration[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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
        <SelectValue placeholder="Selecciona una celebración" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
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
