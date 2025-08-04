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
    </nav>
  );
}
