import { ChilpasLogo } from "@/app/components/common/chilpas-logo";
import { TitleSectionHeader } from "@/app/components/common/title-section-header";
import { FilterPanel } from "@/app/components/filters/filter-panel";
import { ProductSearch } from "@/app/components/product/product-search";

export const Header = () => {
  return (
    <div className="bg-white shadow-sm">
      <header className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-y-3 p-4">
        <div className="flex w-full flex-col items-center gap-y-3 sm:flex-row sm:justify-between sm:gap-y-0">
          <ChilpasLogo />
          <TitleSectionHeader
            title="Catálogo de Productos"
            subtitle="Encuentra el producto perfecto para tu fiesta 🥳"
          />
        </div>
        <div className="flex w-full items-center gap-x-3">
          <ProductSearch placeholder="¿Listo para armar tu fiesta?... 🎉🎈🥳" />
          <FilterPanel />
        </div>
      </header>
    </div>
  );
};
