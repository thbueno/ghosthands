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
  const baseClasses =
    "flex items-center gap-2 px-8 py-4 rounded-full transition-colors";
  const variantClasses =
    variant === "dark"
      ? "bg-secondary text-background border border-background hover:bg-primary"
      : "border border-title hover:border-secondary hover:text-secondary transition";

  return (
    <Link
      href="#contact"
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      Let&apos;s Talk <ArrowRight size={16} />
    </Link>
  );
}
