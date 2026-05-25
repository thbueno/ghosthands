'use client'

import Image from 'next/image'
import Link from 'next/link'

export function ProfileHeader() {
  return (
    <div className="profile-header opacity-0 translate-y-4 blur-[4px] will-change-transform">
      <Image
        src="/images/profile-photo-light.png"
        alt="Thiago Bueno"
        width={104}
        height={104}
        className="mb-[22px] h-[104px] w-[104px] rounded-full object-cover"
      />
      <h1 className="text-[25px] font-semibold leading-[1.3] tracking-[-0.01em] text-primary-dark">
        I&apos;m Thiago – engineer and product builder
      </h1>
      <p className="mt-2 text-[22px] leading-[1.5] text-secondary-muted">
        Ten years building systems and products with code. Currently crafting
        digital experiences at Esthalo.
      </p>
      <div className="mt-[22px] flex gap-[22px]">
        <Link
          href="https://www.linkedin.com/in/thiago-bueno-dos-santos-28714924/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[19px] text-secondary-muted underline underline-offset-2 decoration-transparent hover:decoration-current transition-colors duration-150"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/thbueno"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[19px] text-secondary-muted underline underline-offset-2 decoration-transparent hover:decoration-current transition-colors duration-150"
        >
          GitHub
        </Link>
        <Link
          href="https://wa.me/84784551070"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[19px] text-secondary-muted underline underline-offset-2 decoration-transparent hover:decoration-current transition-colors duration-150"
        >
          WhatsApp
        </Link>
        <Link
          href="mailto:thinobueno@proton.me"
          className="text-[19px] text-secondary-muted underline underline-offset-2 decoration-transparent hover:decoration-current transition-colors duration-150"
        >
          Email
        </Link>
      </div>
    </div>
  )
}
