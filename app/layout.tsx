import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "@pheralb/toast";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chilpas Fiestas | Catalogo de productos",
  description:
    "Disfruta de los mejores productos de Chilpas Fiestas para tus fiestas en nuestro catalogo de productos. Encuentra todo lo que necesitas para hacer tu fiesta un éxito. 🥳",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: ["Chilpas Fiestas", "Catalogo de productos", "Fiestas", "Productos", "Chilpas", "Fiestas"],
  creator: "Chilpas Fiestas",
  publisher: "Chilpas Fiestas",
  metadataBase: new URL("https://chilpasfiestas.com"),
  openGraph: {
    title: "Chilpas Fiestas | Catalogo de productos",
    description:
      "Disfruta de los mejores productos de Chilpas Fiestas para tus fiestas en nuestro catalogo de productos. Encuentra todo lo que necesitas para hacer tu fiesta un éxito. 🥳",
    siteName: "Chilpas Fiestas",
    url: "https://chilpasfiestas.com",
    images: [
      {
        url: "https://0201.nccdn.net/4_2/000/000/024/ec9/logo-chilpas-fiestas.png#RDAMDAID40202834",
        width: 593,
        height: 266,
        alt: "Chilpas Fiestas",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={geist.className}>
      <body className="relative min-h-screen overflow-x-hidden">
        <div className="bg-gradient-conic fixed inset-0 z-0"></div>
        <div className="bg-gradient-radial fixed inset-0 z-0"></div>
        <div className="relative z-10">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
