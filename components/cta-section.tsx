import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <div className="bg-gray-100 rounded-3xl py-24 md:py-32 px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 max-w-4xl mx-auto">
            Want to create something <span className="text-gray-400">awesome?</span>
          </h2>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
