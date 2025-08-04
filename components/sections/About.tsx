import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="conocenos" className="rounded-3xl bg-white px-4 py-10 lg:p-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <Badge variant="landing">Nuestra historia ✍️</Badge>
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Sobre
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Chilpas Fiestas
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-balance text-gray-600">
            Desde 2010, hemos sido los aliados perfectos para crear celebraciones memorables. Nuestra pasión por los
            detalles y el ser una empresa 100% poblana nos ha convertido en un referente en la industria de fiestas en
            Puebla.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Creamos momentos que perduran</h3>
              <p className="leading-relaxed text-gray-600">
                En Chilpas Fiestas entendemos que cada celebración es única y especial. Por eso, nos dedicamos a
                proporcionar productos de la más alta calidad que conviertan tu evento en una experiencia inolvidable.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://res.cloudinary.com/dgmsevscb/image/upload/v1754023488/chilpas-miguel_u46fko.jpg"
                  alt="Equipo Chilpas Fiestas"
                  className="h-64 w-full rounded-2xl object-cover shadow-lg"
                />
                <img
                  src="https://res.cloudinary.com/dgmsevscb/image/upload/v1754023489/chilpas-fachada_pq9c6s.jpg"
                  alt="Chilpas Fiestas Fachada"
                  className="h-32 w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="mt-8 space-y-4">
                <img
                  src="https://res.cloudinary.com/dgmsevscb/image/upload/v1754023488/chilpas-interior2_zolpkd.jpg"
                  alt="Chilpas Fiestas Interior"
                  className="h-32 w-full rounded-2xl object-cover shadow-lg"
                />
                <img
                  src="https://res.cloudinary.com/dgmsevscb/image/upload/v1754023488/chilpas-interior1_m40yqk.jpg"
                  alt="Instalaciones"
                  className="h-64 w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
