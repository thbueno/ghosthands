import type React from "react"
import { FooterSection } from "@/components/footer-section"
import { NavBar } from "@/components/navbar"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
