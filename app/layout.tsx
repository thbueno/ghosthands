import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Showcasy - Visual Designer Portfolio",
  description:
    "Portfolio of a visual designer with passion to create great experiences",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased tracking-tight`}>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
