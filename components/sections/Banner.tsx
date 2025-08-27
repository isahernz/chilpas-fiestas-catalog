import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Banner() {
  return (
    <div className="relative w-full">
      <Card className="w-full overflow-hidden border-0 bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-cyan-900/20" />
        <CardContent className="relative space-y-6 p-12 text-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold lg:text-4xl">¿Necesitas algún producto especial?</h3>
            <p className="mx-auto max-w-2xl text-lg text-pink-100">
              Contactanos via WhatsApp para solicitar una cotización personalizada. Estamos aquí para ayudarte a hacer
              de tu celebración un momento inolvidable.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              target="_blank"
              href="https://wa.me/522222425496?&text=Hola,%20me%20gustaría%20cotizar%20un%20evento."
              className="group flex rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-pink-600 hover:bg-gray-50"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
