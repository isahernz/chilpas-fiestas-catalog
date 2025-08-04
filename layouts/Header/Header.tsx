"use client";

import { ChilpasLogo } from "@/components/shared/ChilpasLogo";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "@/layouts/Header/MobileMenu";
import { Navigation } from "@/layouts/Header/Navigation";

export function Header() {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className="fixed right-0 left-0 z-10 mx-auto mt-5 flex w-[95%] max-w-6xl flex-col items-center justify-center gap-y-4 rounded-4xl bg-white px-4 py-2 shadow-sm lg:flex-row">
      <div className="flex w-full items-center justify-between gap-x-4">
        <ChilpasLogo />

        <Button variant="ghost" className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="size-5" /> : <MenuIcon className="size-5" />}
        </Button>
      </div>
      <Navigation className="hidden lg:block" />
      <MobileMenu isOpen={isOpen} />
    </header>
  );
}
