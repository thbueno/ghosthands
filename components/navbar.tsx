"use client";

import { DropdownMenu } from "@/components/dropdown-menu";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-24 py-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-stone-800 text-2xl font-bold">
              <span className="text-stone-600 font-normal">Thiago</span>Bueno
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                className="hidden md:flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                Let&apos;s Talk <ArrowRight size={16} />
              </Link>
              <button
                onClick={toggleMenu}
                className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
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
