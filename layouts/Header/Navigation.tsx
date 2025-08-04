import { links } from "@/app/consts/navbar-links";
import Link from "next/link";

export function Navigation({ className }: { className?: string }) {
  return (
    <nav className={`hidden w-full lg:block ${className}`}>
      <ul className="flex w-full items-center justify-center gap-x-2">
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
