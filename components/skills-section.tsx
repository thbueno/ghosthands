'use client'
import React from 'react'
import TechTag, { FRONTEND_TAGS, BACKEND_TAGS } from '@/components/tech-tag'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export default function SkillsSection() {
  return (
    <div>
      <p className="pb-[18px] text-[19px] leading-[1.4] text-secondary-muted">
        Skills & stack
      </p>
      <div className="flex flex-col gap-[35px]">
        <AnimateOnScroll
          className="rounded-3xl bg-card-light p-8 flex flex-col gap-[22px]"
          threshold={0.15}
        >
          <p className="text-[19px] font-semibold leading-[1.4] text-primary-dark">
            Frontend
          </p>
          <TechTag
            tags={FRONTEND_TAGS}
            tagClassName="text-[18px] px-4 py-2 rounded-xl border-[#d0d0d0] text-primary-dark hover:border-[#229eff] hover:text-[#229eff]"
          />
        </AnimateOnScroll>

        <AnimateOnScroll
          className="rounded-3xl bg-card-light p-8 flex flex-col gap-[22px]"
          threshold={0.15}
          delay={100}
        >
          <p className="text-[19px] font-semibold leading-[1.4] text-primary-dark">
            Backend
          </p>
          <TechTag
            tags={BACKEND_TAGS}
            tagClassName="text-[18px] px-4 py-2 rounded-xl border-[#d0d0d0] text-primary-dark hover:border-[#229eff] hover:text-[#229eff]"
          />
        </AnimateOnScroll>
      </div>
    </div>
  )
}
