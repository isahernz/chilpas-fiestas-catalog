import { FilterPanel } from "@/app/catalogo/components/filters";
import { SearchBar } from "@/app/catalogo/components/SearchBar";

export function NavbarCatalog() {
  return (
    <div className="mx-auto flex flex-col items-center gap-3 rounded-lg bg-white p-4 shadow-md sm:flex-row sm:justify-between">
      <SearchBar placeholder="¿Listo para armar tu fiesta?... 🎉🎈🥳" />
      <FilterPanel />
    </div>
  );
}
