import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { dmMono, myLocalFont } from './fonts';
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
      <body className={`${myLocalFont.className} ${myLocalFont.variable} ${dmMono.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
