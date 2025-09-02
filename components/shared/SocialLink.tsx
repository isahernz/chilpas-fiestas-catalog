import { Facebook, Instagram, TikTok } from "@/components/icons";
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  platform: "facebook" | "instagram" | "tiktok";
};

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  tiktok: TikTok,
};

export function SocialLink({ href, platform }: SocialLinkProps) {
  const Icon = icons[platform];

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-10 items-center justify-center rounded-2xl bg-white p-2 transition-transform hover:scale-110"
    >
      <Icon className="size-8" />
    </Link>
  );
}
