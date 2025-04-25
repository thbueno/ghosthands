import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LetsTalkButtonProps {
  variant?: "light" | "dark" | "red";
  className?: string;
}

export function LetsTalkButton({
  variant = "light",
  className = "",
}: LetsTalkButtonProps) {
  const baseClasses = "flex items-center gap-2 px-8 py-4 rounded-full transition-all";
  
  const variants = {
    light: "border border-title text-title hover:border-secondary hover:text-secondary",
    dark: "border border-background text-background hover:border-secondary hover:text-secondary",
    red: "bg-secondary hover:bg-primary text-background",
  };

  return (
    <Link
      href="#contact"
      className={twMerge(baseClasses, variants[variant], className)}
    >
      Let&apos;s Talk <ArrowRight size={16} />
    </Link>
  );
}
