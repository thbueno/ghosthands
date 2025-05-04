import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { myLocalFont } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Bueno - Visual Designer Portfolio",
  description:
    "Portfolio of a visual designer with passion to create great experiences",
};


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${myLocalFont.className} ${inter.className} antialiased tracking-tight`}>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
