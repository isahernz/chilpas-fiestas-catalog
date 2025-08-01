import { ChilpasLogo } from "@/components/common/ChilpasLogo";
import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import { TikTok } from "@/components/icons/TikTok";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1Fmu1UJ7YH/?mibextid=wwXIfr",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/chilpas.fiestas?igsh=cjEyNHIwcG9iNHM3",
      color: "hover:bg-pink-600",
    },
    {
      name: "TikTok",
      icon: TikTok,
      url: "https://www.tiktok.com/@chilpas.fiestas?_t=ZS-8yVQGjeIwK2&_r=1",
      color: "hover:bg-black",
    },
  ];

  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#celebraciones", label: "Celebraciones" },
    { href: "#catalogo", label: "Cátalogo" },
    { href: "/catalogo", label: "Buscador de productos" },
    { href: "#acerca-de", label: "Acerca de" },
    { href: "#ubicacion", label: "Ubicación" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <ChilpasLogo />
              <p className="leading-relaxed text-gray-300">
                Hacemos realidad tus celebraciones con productos de calidad premium y un servicio excepcional que supera
                expectativas.
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <Link
                  key={social.name}
                  href={social.url}
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-700 transition-all duration-300 ${social.color} group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-purple-400"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-transform group-hover:scale-125" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="group flex items-start space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 transition-transform group-hover:scale-110">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="leading-relaxed text-gray-300">
                    Av 14 Pte 114, Centro histórico de Puebla, 72000 Heroica Puebla de Zaragoza, Puebla
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 transition-transform group-hover:scale-110">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <Link href="tel:+522222425496" className="text-gray-300 transition-colors hover:text-purple-400">
                  +52 222 242 5496
                </Link>
              </div>

              <div className="group flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 transition-transform group-hover:scale-110">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <Link
                  href="mailto:contacto@chilpasfiestas.com"
                  className="text-gray-300 transition-colors hover:text-purple-400"
                >
                  contacto@chilpasfiestas.com
                </Link>
              </div>

              <div className="group flex items-start space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 transition-transform group-hover:scale-110">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="text-gray-300">
                  <p>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="flex items-center text-gray-400">
              Hecho con ♥️ por RC Ingeniería y Diseño © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
