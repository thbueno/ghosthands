import { ArrowRight } from "lucide-react";
import Link from "next/link";

type SocialLink = {
  name: string;
  href: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  { name: "INSTAGRAM", href: "#" },
  { name: "BEHANCE", href: "#" },
  { name: "DRIBBBLE", href: "#" },
];

export function SocialLinks() {
  return (
    <div className="flex gap-8 mb-8 md:mb-0">
      {SOCIAL_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex items-center gap-1 text-sm font-medium hover:text-secondary transition-opacity"
        >
          {link.name} <ArrowRight size={14} className="transform -rotate-45" />
        </Link>
      ))}
    </div>
  );
}
