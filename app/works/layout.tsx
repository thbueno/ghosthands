import { FooterSection } from '@/components/footer-section'
import { NavBar } from '@/components/navbar'
import type React from 'react'

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
