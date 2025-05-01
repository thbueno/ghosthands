"use client";

import { DropdownMenu } from "@/components/dropdown-menu";
import { LetsTalkButton } from "@/components/lets-talk-button";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 bg-stone-200 z-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-24 py-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-title text-2xl font-extrabold">
              <span className="text-2xl font-extrabold">Thiago</span>Bueno
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <LetsTalkButton />
              </div>
              <button
                onClick={toggleMenu}
                className={twMerge(
                  "p-3 border rounded-full transition-all duration-300",
                  !menuOpen
                    ? "border-title hover:border-secondary hover:text-secondary"
                    : "opacity-0 pointer-events-none"
                )}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative"
                >
                  <line
                    x1="4" y1="6" x2="20" y2="6"
                    className={twMerge(
                      "stroke-current stroke-2 origin-center transition-all duration-300",
                      menuOpen && "rotate-45 translate-y-[6px]"
                    )}
                    strokeLinecap="round"
                  />
                  <line
                    x1="4" y1="12" x2="20" y2="12"
                    className={twMerge(
                      "stroke-current stroke-2 transition-all duration-300",
                      menuOpen && "opacity-0"
                    )}
                    strokeLinecap="round"
                  />
                  <line
                    x1="4" y1="18" x2="20" y2="18"
                    className={twMerge(
                      "stroke-current stroke-2 origin-center transition-all duration-300",
                      menuOpen && "-rotate-45 -translate-y-[6px]"
                    )}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown Menu */}
      <DropdownMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
