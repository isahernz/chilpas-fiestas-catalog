import Image from "next/image";

export function ChilpasLogo() {
  return (
    <Image
      src="/chilpas-fiestas.webp"
      alt="Chilpas Fiestas Logo"
      className="h-10 w-auto lg:h-12"
      width={142}
      height={64}
    />
  );
}
