import { links } from "@/app/consts/navbar-links";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Navigation({ className }: { className?: string }) {
  return (
    <nav className={`hidden w-full grow lg:block ${className}`}>
      <ul className="flex w-full items-center justify-center gap-x-2">
        <Link
          href="/catalogo"
          className="group flex max-w-max shrink-0 gap-x-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 shadow-lg hover:from-purple-700 hover:to-pink-700"
        >
          <span className="text-center text-sm font-medium text-white">Explora nuestro catálogo digital</span>
          <ArrowRight className="size-5 stroke-white transition-transform group-hover:translate-x-1" />
        </Link>
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="max-w-max rounded-full px-3 py-1 text-sm text-nowrap hover:bg-sky-100">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
