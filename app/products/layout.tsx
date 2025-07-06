import { ChilpasLogo } from "@/app/components/common/chilpas-logo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProductLayoutProps {
  children: React.ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <>
      <div className="bg-white shadow-sm">
        <header className="mx-auto flex w-full max-w-4xl items-center justify-between p-4">
          <Link
            href="/"
            className="group flex items-center gap-x-2 text-sm font-medium text-neutral-500 duration-100 hover:text-black"
          >
            <ArrowLeft className="size-4 opacity-70 duration-200 group-hover:-translate-x-[2px] group-hover:opacity-100" />
            Volver al catálogo
          </Link>
          <ChilpasLogo />
        </header>
      </div>
      <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
    </>
  );
}
