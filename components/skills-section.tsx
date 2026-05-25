'use client'
import React from 'react'
import TechTag, { FRONTEND_TAGS, BACKEND_TAGS } from '@/components/tech-tag'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export default function SkillsSection() {
  return (
    <div>
      <p className="pb-3 text-[13px] leading-[1.4] text-secondary-muted">
        Skills & stack
      </p>
      <div className="flex flex-col gap-6">
        <AnimateOnScroll
          className="rounded-2xl bg-card-light p-5 flex flex-col gap-4"
          threshold={0.15}
        >
          <p className="text-[13px] font-semibold leading-[1.4] text-primary-dark">
            Frontend
          </p>
          <TechTag
            tags={FRONTEND_TAGS}
            tagClassName="text-[12px] px-3 py-1.5 rounded-xl border-[#d0d0d0] text-primary-dark hover:border-[#229eff] hover:text-[#229eff]"
          />
        </AnimateOnScroll>

        <AnimateOnScroll
          className="rounded-2xl bg-card-light p-5 flex flex-col gap-4"
          threshold={0.15}
          delay={100}
        >
          <p className="text-[13px] font-semibold leading-[1.4] text-primary-dark">
            Backend
          </p>
          <TechTag
            tags={BACKEND_TAGS}
            tagClassName="text-[12px] px-3 py-1.5 rounded-xl border-[#d0d0d0] text-primary-dark hover:border-[#229eff] hover:text-[#229eff]"
          />
        </AnimateOnScroll>
      </div>
    </div>
  )
}
