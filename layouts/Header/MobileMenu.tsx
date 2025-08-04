import { links } from "@/app/consts/navbar-links";
import Link from "next/link";

export function MobileMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <nav className={`flex w-full flex-col items-start ${isOpen ? "block" : "hidden"}`}>
      <ul className="my-3 flex w-full flex-col gap-y-1">
        {links.map(link => (
          <li key={link.href} className="w-full">
            <Link href={link.href} className="block rounded-full p-1 pl-2 text-sm hover:bg-sky-100">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/catalogo"
        className="group flex w-full shrink-0 justify-center gap-x-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 shadow-lg hover:from-purple-700 hover:to-pink-700"
      >
        <span className="text-xs font-medium text-white">Explora nuestro catálogo digital</span>
      </Link>
    </nav>
  );
}
