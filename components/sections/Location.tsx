import { cn } from "@/app/utils/cn";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

export function Location() {
  return (
    <section id="ubicacion" className="rounded-3xl bg-white px-4 py-10 lg:p-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <Badge variant="landing">Encuéntranos 🧐</Badge>
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Nuestra{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ubicación
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Visítanos en nuestras instalaciones y descubre todo lo que tenemos para ofrecerte. Un ambiente acogedor para
            que disfrutes de una experiencia única.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">¡Te esperamos en nuestra tienda!</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">
                      Av 14 Pte 114, Centro histórico de Puebla, 72000 Heroica Puebla de Zaragoza, Pue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-gray-900">Horarios</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="https://maps.app.goo.gl/t3KRSjE8g1JPWEfT6"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "rounded-2xl border-2 border-gray-200 px-8 py-4 text-gray-700 hover:bg-gray-50"
              )}
            >
              Ver en Google Maps
            </Link>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-pink-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.41317338527483!2d-98.1967435!3d19.0503061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc1a1bda97c45%3A0xfc718be4c84e0b65!2sChilpas%20Fiestas!5e0!3m2!1ses-419!2smx!4v1754023169898!5m2!1ses-419!2smx"
                    width={600}
                    height={450}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
