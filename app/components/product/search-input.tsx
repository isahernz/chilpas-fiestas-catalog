"use client";

import { Input } from "@/app/components/ui/input";
import { useDebounce } from "@/app/hooks/useDebounce";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchInputProps {
  placeholder: string;
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") ?? "");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedSearchTerm) {
      params.set("query", debouncedSearchTerm);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearchTerm, pathname, replace, searchParams]);

  return (
    <div className="relative w-full">
      <label htmlFor="search" className="sr-only">
        Buscar
      </label>
      <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />

      <Input
        id="search"
        className="h-10 pl-10 text-sm"
        type="search"
        placeholder={placeholder}
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
};
