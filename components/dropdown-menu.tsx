"use client";

import { LetsTalkButton } from "@/components/lets-talk-button";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import { SocialLinks } from "./social-links";

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DropdownMenu({ isOpen, onClose }: DropdownMenuProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#050A13] text-white z-50 overflow-auto">
      <div className="container mx-auto px-4 md:px-8 lg:px-24 py-8 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="text-white text-2xl font-light">
            <span className="font-normal">show</span>casy.
          </div>
          <div className="flex items-center gap-4">
            <LetsTalkButton
              variant="light"
              className="border-gray-700 hover:bg-gray-900"
            />
            <button
              onClick={onClose}
              className="p-3 border border-gray-700 rounded-full hover:bg-gray-900 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </header>

        {/* Navigation Menu */}
        <div className="flex-grow">
          <nav className="py-8">
            <ul className="space-y-8">
              <li>
                <div className="flex justify-between items-center">
                  <Link
                    href="/"
                    className="text-5xl md:text-6xl font-bold hover:text-gray-300 transition-colors"
                  >
                    Home{" "}
                    <span className="text-gray-500 text-2xl md:text-3xl">
                      (01)
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className="p-4 border border-gray-700 rounded-full hover:bg-gray-900 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <Link
                    href="/about"
                    className="text-5xl md:text-6xl font-bold hover:text-gray-300 transition-colors"
                  >
                    About Me{" "}
                    <span className="text-gray-500 text-2xl md:text-3xl">
                      (02)
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="p-4 border border-gray-700 rounded-full hover:bg-gray-900 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <Link
                    href="/works"
                    className="text-5xl md:text-6xl font-bold hover:text-gray-300 transition-colors"
                  >
                    Works{" "}
                    <span className="text-gray-500 text-2xl md:text-3xl">
                      (03)
                    </span>
                  </Link>
                  <Link
                    href="/works"
                    className="p-4 border border-gray-700 rounded-full hover:bg-gray-900 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <Link
                    href="/insights"
                    className="text-5xl md:text-6xl font-bold hover:text-gray-300 transition-colors"
                  >
                    Insights{" "}
                    <span className="text-gray-500 text-2xl md:text-3xl">
                      (04)
                    </span>
                  </Link>
                  <Link
                    href="/insights"
                    className="p-4 border border-gray-700 rounded-full hover:bg-gray-900 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-gray-400 mb-6">/Follow me.</h3>
              <SocialLinks variant="dark" />
            </div>
            <div>
              <h3 className="text-xl text-gray-400 mb-6">
                Stay connected w/ me.
              </h3>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-700 py-2 pr-12 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
