import type { Metadata } from 'next'
import type React from 'react'
import { ThemeProvider } from 'next-themes'
import { sfProDisplay } from './fonts'
import './globals.css'
import ObserverProvider from '@/components/ObserverProvider'

export const metadata: Metadata = {
  title: 'Thiago Bueno - Dev Portfolio',
  description:
    'Portfolio of a software engineer with passion to create great applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sfProDisplay.className} ${sfProDisplay.variable} mx-auto bg-background px-7 antialiased md:px-10 lg:px-40`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ObserverProvider>{children}</ObserverProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
