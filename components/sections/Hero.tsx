import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { HighlightedText } from "@/components/shared/HighlightedText";

export function Hero() {
  return (
    <section
      id="inicio"
      className="mt-30 w-full space-y-10 text-center lg:mt-40 lg:flex lg:items-center lg:justify-between lg:space-y-0 lg:gap-x-5"
    >
      <div className="flex flex-col items-center gap-y-5 md:mx-auto md:my-10 md:max-w-2xl lg:mx-0 lg:w-2/3 lg:max-w-full lg:items-start">
        <Badge variant="landing" className="animate-bounce">
          ¡Hacemos realidad tu fiesta ideal! 🥳
        </Badge>
        <h1 className="text-4xl font-bold text-balance text-gray-900 md:text-[40px] lg:text-start xl:text-[54px]">
          Celebraciones que <HighlightedText>inspiran</HighlightedText> y <HighlightedText>emocionan</HighlightedText>
        </h1>
        <p className="text-center text-sm leading-relaxed text-balance text-gray-600 md:text-base lg:text-start xl:text-lg">
          En Chilpas Fiestas tenemos todo lo que necesitas para hacer de tu celebración un éxito. Desde decoraciones
          personalizadas hasta productos únicos. ¡Podemos ayudarte a encontrar lo que buscas!
        </p>
        <Link
          href="/catalogo"
          className="group flex max-w-max gap-x-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 shadow-lg hover:from-purple-700 hover:to-pink-700"
        >
          <span className="text-center text-sm font-medium text-white">Explora nuestro catálogo digital</span>
          <ArrowRight className="size-5 stroke-white transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source
            src="https://res.cloudinary.com/dgmsevscb/video/upload/v1754011866/intro_chilpas_kubbqm.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta videos HTML5.
        </video>

        <Badge variant="landing" className="absolute top-3 right-3 px-2 py-0.5 text-xs text-purple-700">
          ¡Todo para tus fiestas! 🎉
        </Badge>
      </div>
    </section>
  );
}
