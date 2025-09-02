import { links } from "@/app/consts/navbar-links";
import { ChilpasLogo } from "@/components/shared/ChilpasLogo";
import { SocialLink } from "@/components/shared/SocialLink";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <section className="space-y-6 lg:col-span-1">
            <div>
              <ChilpasLogo />
              <p className="leading-relaxed text-gray-300">
                Hacemos realidad tus celebraciones con productos de calidad premium y un servicio excepcional que supera
                expectativas.
              </p>
            </div>

            <ul className="flex space-x-4" aria-label="Redes sociales">
              <li>
                <SocialLink platform="facebook" href="https://www.facebook.com/share/1Fmu1UJ7YH/?mibextid=wwXIfr" />
              </li>
              <li>
                <SocialLink
                  platform="instagram"
                  href="https://www.instagram.com/chilpas.fiestas?igsh=cjEyNHIwcG9iNHM3"
                />
              </li>
              <li>
                <SocialLink platform="tiktok" href="https://www.tiktok.com/@chilpas.fiestas?_t=ZS-8yVQGjeIwK2&_r=1" />
              </li>
            </ul>
          </section>

          {/* Quick Links */}
          <nav className="space-y-6" aria-label="Enlaces rápidos">
            <h3 className="bg-gradient-to-r from-pink-400 via-orange-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-pink-400"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-transform group-hover:scale-125" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <section className="space-y-6" aria-labelledby="contact-title">
            <h3
              id="contact-title"
              className="bg-gradient-to-r from-pink-400 via-orange-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent"
            >
              Contacto
            </h3>
            <address className="space-y-4 text-gray-300 not-italic">
              <div className="group flex items-start space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-cyan-400 transition-transform group-hover:scale-110">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <p className="leading-relaxed">
                  Av 14 Pte 114, Centro histórico de Puebla, 72000 Heroica Puebla de Zaragoza, Puebla
                </p>
              </div>

              <div className="group flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-orange-400 to-yellow-400 transition-transform group-hover:scale-110">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <Link href="tel:+522211732338" className="text-gray-300 transition-colors hover:text-orange-400">
                  +52 221 173 2338
                </Link>
              </div>

              <div className="group flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-green-400 transition-transform group-hover:scale-110">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <Link
                  href="mailto:contacto@chilpasfiestas.com"
                  className="text-gray-300 transition-colors hover:text-cyan-400"
                >
                  contacto@chilpasfiestas.com
                </Link>
              </div>

              <div className="group flex items-start space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-red-400 to-pink-500 transition-transform group-hover:scale-110">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </address>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <small className="flex items-center text-gray-400">
              Hecho con ♥️ por RC Ingeniería y Diseño © {new Date().getFullYear()}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
