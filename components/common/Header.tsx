"use client";

import { MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { ChilpasLogo } from "./ChilpasLogo";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#celebraciones", label: "Celebraciones" },
  { href: "#catalogo", label: "Cátalogo" },
  { href: "/catalogo", label: "Buscador de productos" },
  { href: "#acerca-de", label: "Acerca de" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Header() {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="p-4">
      <header className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-y-4 rounded-4xl bg-white px-4 py-2 shadow-sm lg:flex-row">
        <div className="flex w-full items-center justify-between gap-x-4">
          <Link href="/" className="flex items-center gap-x-2">
            <ChilpasLogo />
          </Link>

          <Button variant="ghost" className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </Button>
        </div>

        <nav className={`hidden w-full lg:block ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex w-full items-center justify-center gap-x-2">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="max-w-max rounded-full px-3 py-1 text-sm text-nowrap hover:bg-sky-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={`flex w-full flex-col items-start lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="my-3 flex w-full flex-col gap-y-1">
            {links.map(link => (
              <li key={link.href} className="w-full">
                <Link href={link.href} className="block rounded-full p-1 pl-2 text-sm hover:bg-sky-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
