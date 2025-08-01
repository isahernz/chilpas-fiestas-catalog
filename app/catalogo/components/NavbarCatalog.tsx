import { FilterPanel } from "@/app/catalogo/components/filters";
import { SearchBar } from "@/app/catalogo/components/SearchBar";
import { ChilpasLogo } from "@/components/common/ChilpasLogo";
import Link from "next/link";

export function NavbarCatalog() {
  return (
    <div className="bg-white shadow-sm">
      <header className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-y-3 p-4">
        <div className="flex w-full flex-col items-center gap-y-3 sm:flex-row sm:justify-between sm:gap-y-0">
          <Link href="/">
            <ChilpasLogo />
          </Link>
          <div className="flex flex-col items-center gap-y-1 sm:items-end">
            <h1 className="bg-gradient-to-r from-pink-600 via-blue-600 to-yellow-600 bg-clip-text text-center text-xl leading-none font-bold text-balance text-transparent sm:text-right sm:text-2xl">
              Catálogo de Productos
            </h1>
            <span className="text-sm text-gray-500">Encuentra el producto perfecto para tu fiesta 🥳</span>
          </div>
        </div>
        <div className="flex w-full items-center gap-x-3">
          <SearchBar placeholder="¿Listo para armar tu fiesta?... 🎉🎈🥳" />
          <FilterPanel />
        </div>
      </header>
    </div>
  );
}
