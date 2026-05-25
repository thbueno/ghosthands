'use client'
import React from 'react'
import TechTag, { FRONTEND_TAGS, BACKEND_TAGS } from '@/components/tech-tag'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export default function SkillsSection() {
  return (
    <div>
      <p className="pb-4.5 text-19 leading-[1.4] text-secondary-muted">
        Skills & stack
      </p>
      <div className="flex flex-col gap-9">
        <AnimateOnScroll
          className="rounded-3xl bg-card-light p-8 flex flex-col gap-5.5"
          threshold={0.15}
        >
          <p className="text-19 font-semibold leading-[1.4] text-primary-dark">
            Frontend
          </p>
          <TechTag
            tags={FRONTEND_TAGS}
            tagClassName="text-lg px-4.5 py-2.5 rounded-full bg-tag text-primary-dark hover:bg-secondary hover:text-background"
          />
        </AnimateOnScroll>

        <AnimateOnScroll
          className="rounded-3xl bg-card-light p-8 flex flex-col gap-5.5"
          threshold={0.15}
          delay={100}
        >
          <p className="text-19 font-semibold leading-[1.4] text-primary-dark">
            Backend
          </p>
          <TechTag
            tags={BACKEND_TAGS}
            tagClassName="text-lg px-4.5 py-2.5 rounded-full bg-tag text-primary-dark hover:bg-secondary hover:text-background"
          />
        </AnimateOnScroll>
      </div>
    </div>
  )
}
