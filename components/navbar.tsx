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
            <Link href="/" className="flex items-center align-middle text-title text-2xl font-bold">
            <Image
              src="/images/profile_photo.jpeg"
              alt="Designer portrait"
              width={180}
              height={180}
              className="w-14 h-auto object-contain rounded-xl"
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
