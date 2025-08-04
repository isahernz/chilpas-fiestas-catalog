interface NavLink {
  href: string;
  label: string;
}

export const links: NavLink[] = [
  { href: "/#conocenos", label: "Conócenos" },
  { href: "/#inicio", label: "Inicio" },
  { href: "/#celebraciones", label: "Celebraciones" },
  { href: "/#catalogo", label: "Cátalogo" },
  { href: "/catalogo", label: "Buscador de productos" },
  { href: "/#contacto", label: "Contáctanos" },
];
