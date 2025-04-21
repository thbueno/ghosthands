"use client";

import { ArrowUpRight, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";

export function FooterSection() {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-24">
      <div className="bg-title text-background rounded-3xl overflow-hidden">
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
                className="ml-4 p-3 border border-background rounded-full hover:border-secondary hover:text-secondary transition-colors"
              >
                <ArrowUpRight size={24} />
              </Link>
            </div>
          </div>

          <div className="border-t border-text py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <nav className="flex flex-wrap gap-8 mb-6 md:mb-0">
                <Link
                  href="/"
                  className="text-sm text-background font-medium hover:text-secondary transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-background font-medium hover:text-secondary transition-colors"
                >
                  ABOUT ME
                </Link>
                <Link
                  href="/works"
                  className="text-sm text-background font-medium hover:text-secondary transition-colors"
                >
                  WORKS
                </Link>
                <Link
                  href="/insights"
                  className="text-sm text-background font-medium hover:text-secondary transition-colors"
                >
                  INSIGHTS
                </Link>
              </nav>

              <div className="flex gap-6">
                <Link
                  href="#"
                  className="text-background hover:text-secondary transition-colors"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-background hover:text-secondary transition-colors"
                >
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="#"
                  className="text-background hover:text-secondary transition-colors"
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
                  className="text-background hover:text-secondary transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
