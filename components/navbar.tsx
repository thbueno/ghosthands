"use client";

import { DropdownMenu } from "@/components/dropdown-menu";
import { LetsTalkButton } from "@/components/lets-talk-button";
import { MenuButton } from "@/components/menu-button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 bg-background z-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-24 py-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-title text-2xl font-bold">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Showcasy_about_section.jpg-bUqRlOdy9atvjR6mivxT9jhrJIV3vU.jpeg"
              alt="Designer portrait"
              width={100}
              height={600}
              className="w-full h-auto object-cover"
            />
              <span className="text-2xl font-bold">Thiago</span>Bueno
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <LetsTalkButton />
              </div>
              <MenuButton isOpen={menuOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown Menu */}
      <DropdownMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
