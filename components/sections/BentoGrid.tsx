import { Celebration } from "@/app/types";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function BentoGrid({ celebrations }: { celebrations: Celebration[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-pink-50 to-purple-50 shadow-sm transition-all duration-300 hover:shadow-xl lg:col-span-2">
        <Link href={`/catalogo?celebration=${celebrations[0].slug}`}>
          <CardContent className="p-8">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500">
                  💅
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{celebrations[0].name}</h3>
                </div>
              </div>
            </div>
            <div className="aspect-video h-[250px] w-full overflow-hidden rounded-2xl">
              <img
                src={celebrations[0].cover || "/celebrations/celebracion-graduacion.png"}
                alt={celebrations[0].name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardContent>
        </Link>
      </Card>
      <Card className="group items-between overflow-hidden border-0 bg-gradient-to-br from-rose-50 to-pink-50 shadow-sm transition-all duration-300 hover:shadow-xl">
        <Link href={`/catalogo?celebration=${celebrations[1].slug}`}>
          <CardContent className="p-6">
            <div className="mb-4 flex space-x-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-500">
                🎓
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{celebrations[1].name}</h3>
              </div>
            </div>
            <div className="aspect-square h-[257px] overflow-hidden rounded-xl">
              <img
                src={celebrations[1].cover || "/celebrations/celebracion-15.png"}
                alt={celebrations[1].name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardContent>
        </Link>
      </Card>

      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm transition-all duration-300 hover:shadow-xl">
        <Link href={`/catalogo?celebration=${celebrations[2].slug}`}>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                👼
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{celebrations[2].name}</h3>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src={celebrations[2].cover || "/celebrations/despedida-solter.jpg"}
                alt={celebrations[2].name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardContent>
        </Link>
      </Card>

      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm transition-all duration-300 hover:shadow-xl">
        <Link href={`/catalogo?celebration=${celebrations[3].slug}`}>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                🕊️
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{celebrations[3].name}</h3>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src={celebrations[3].cover || "/celebrations/bautizo.jpg"}
                alt={celebrations[3].name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardContent>
        </Link>
      </Card>

      <Card className="group overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-sm transition-all duration-300 hover:shadow-xl">
        <Link href={`/catalogo?celebration=${celebrations[4].slug}`}>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500">
                🎅
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{celebrations[4].name}</h3>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src={celebrations[4].cover || "/celebrations/navidad.png"}
                alt={celebrations[4].name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
