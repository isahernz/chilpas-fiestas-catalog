import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/app/styles/globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
