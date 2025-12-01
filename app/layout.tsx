import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'
import { dmMono, myLocalFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thiago Bueno - Dev Portfolio',
  description:
    'Portfolio of a software engineer with passion to create great applications',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${myLocalFont.className} ${myLocalFont.variable} ${dmMono.variable} mx-auto bg-background px-7 antialiased md:px-10 lg:px-40`}
      >
        {children}
      </body>
    </html>
  )
}

import './globals.css'
