'use client'

import Image from 'next/image'
import Link from 'next/link'

export function ProfileHeader() {
  return (
    <div className="profile-header translate-y-4 opacity-0 blur-sm will-change-transform">
      <Image
        src="/images/profile-photo-light.png"
        alt="Thiago Bueno"
        width={104}
        height={104}
        className="mb-5.5 h-32 w-32 rounded-full object-cover"
      />
      <h1 className="text-30 text-primary-dark font-semibold leading-[1.3] tracking-[-0.01em]">
        I&apos;m Thiago Bueno, engineer and AI solutions Architect
      </h1>
      <p className="text-24 text-secondary-muted mt-2 leading-[1.5]">
        Ten years building systems and products with code. Currently crafting
        digital experiences at Esthalo.
      </p>
      <div className="mt-5.5 gap-5.5 flex">
        {/* <Link
          href="https://www.linkedin.com/in/thiago-bueno-dos-santos-28714924/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-19 text-secondary-muted underline decoration-transparent underline-offset-2 transition-colors duration-150 hover:decoration-current"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/thbueno"
          target="_blank"
          rel="noopener noreferrer"
          className="text-19 text-secondary-muted underline decoration-transparent underline-offset-2 transition-colors duration-150 hover:decoration-current"
        >
          GitHub
        </Link>
        <Link
          href="https://wa.me/84784551070"
          target="_blank"
          rel="noopener noreferrer"
          className="text-19 text-secondary-muted underline decoration-transparent underline-offset-2 transition-colors duration-150 hover:decoration-current"
        >
          WhatsApp
        </Link>
        <Link
          href="mailto:thinobueno@proton.me"
          className="text-19 text-secondary-muted underline decoration-transparent underline-offset-2 transition-colors duration-150 hover:decoration-current"
        >
          Email
        </Link> */}
      </div>
    </div>
  )
}
