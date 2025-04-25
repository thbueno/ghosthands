import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface LetsTalkButtonProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LetsTalkButton({
  variant = "light",
  className = "",
}: LetsTalkButtonProps) {
  const baseClasses = "flex items-center gap-2 px-8 py-4 rounded-full transition-all";
  const variantClasses =
    variant === "dark"
      ? "bg-secondary hover:bg-primary text-background border border-background"
      : "text-title border border-title hover:border-secondary hover:text-secondary";

  return (
    <Link
      href="#contact"
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      Let&apos;s Talk <ArrowRight size={16} />
    </Link>
  );
}
