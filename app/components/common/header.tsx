import { ChilpasLogo } from "@/app/components/common/chilpas-logo";
import { SearchInput } from "@/app/components/product/search-input";

export const Header = () => {
  return (
    <div className="bg-white shadow-sm">
      <header className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-y-3 p-4">
        <div className="flex w-full flex-col items-center gap-y-3 sm:flex-row sm:justify-between sm:gap-y-0">
          <ChilpasLogo />
          <div className="flex flex-col items-center gap-y-1 sm:items-end">
            <h1 className="bg-gradient-to-r from-pink-600 via-blue-600 to-yellow-600 bg-clip-text text-center text-xl leading-none font-bold text-balance text-transparent sm:text-right sm:text-2xl">
              Catalogo de Productos
            </h1>
            <span className="text-sm text-gray-500">Encuentra el producto perfecto para tu fiesta 🥳</span>
          </div>
        </div>
        <SearchInput placeholder="¿Listo para armar tu fiesta?... 🎉🎈🥳" />
      </header>
    </div>
  );
};
