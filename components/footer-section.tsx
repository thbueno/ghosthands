"use client";

import { ArrowUpRight, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { type FormEvent, useState } from "react";

export function FooterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="py-12 px-4 md:px-8 lg:px-24">
      <div className="bg-stone-800 text-white rounded-3xl overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 pt-16 pb-12">
          <div className="mb-16">
            <p className="text-lg mb-6">
              HAVE A NICE WORKS? LET&apos;S TALK WITH ME
            </p>
            <div className="flex items-center">
              <Link
                href="mailto:hello@kazarov.com"
                className="text-4xl md:text-5xl lg:text-6xl text-stone-200 font-bold hover:text-white transition-colors"
              >
                hello@kazarov.com
              </Link>
              <Link
                href="mailto:hello@kazarov.com"
                className="ml-4 p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <ArrowUpRight size={24} />
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <nav className="flex flex-wrap gap-8 mb-6 md:mb-0">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  ABOUT ME
                </Link>
                <Link
                  href="/works"
                  className="text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  WORKS
                </Link>
                <Link
                  href="/insights"
                  className="text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  INSIGHTS
                </Link>
              </nav>

              <div className="flex gap-6">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-gray-400 mb-6">Keep up with me if you can.</p>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-700 py-2 pr-12 focus:outline-none focus:border-white transition-colors text-white"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  aria-label="Subscribe"
                >
                  <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
