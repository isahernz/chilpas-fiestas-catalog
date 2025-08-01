import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section id="inicio" className="w-full space-y-10 text-center">
      <Badge variant="landing">¡Hacemos realidad tu fiesta ideal! 🥳</Badge>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 lg:text-7xl">
          Celebraciones que
          <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            inspiran y emocionan
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-balance text-gray-600">
          En Chilpas Fiestas tenemos todo lo que necesitas para hacer de tu celebración un éxito. Desde decoraciones
          personalizadas hasta productos únicos, ¡podemos ayudarte a encontrar lo que buscas
        </p>
        <Link
          href="/catalogo"
          className="group mx-auto flex max-w-max gap-x-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:from-purple-700 hover:to-pink-700"
        >
          <span>Explora nuestros productos en nuestro catálogo digital</span>
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="relative">
        <div className="aspect-video overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dgmsevscb/video/upload/v1754011866/intro_chilpas_kubbqm.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta videos HTML5.
          </video>

          <Badge className="absolute top-3 right-3 rounded-full border border-purple-200 bg-gradient-to-r from-purple-100 to-pink-100 text-xs text-purple-700">
            ¡Todo para tus fiestas! 🎉
          </Badge>
        </div>
      </div>
    </section>
  );
}
