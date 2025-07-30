"use client";

import { Input } from "@/app/components/ui/input";
import { useDebouncedCallback } from "@/app/hooks/useDebounce";
import { Search as SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function ProductSearch({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex w-full">
      <label htmlFor="search" className="sr-only">
        Buscar
      </label>
      <SearchIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
      <Input
        id="search"
        className="w-full pl-10 text-sm"
        type="search"
        placeholder={placeholder}
        onChange={e => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
