'use client'
import React from 'react'
import TechTag, { FRONTEND_TAGS, BACKEND_TAGS } from '@/components/tech-tag'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export default function SkillsSection() {
  return (
    <div>
      <h2 className="pb-4.5">
        Skills & stack
      </h2>
      <div className="flex flex-col gap-9">
        <AnimateOnScroll
          className="rounded-3xl bg-card-light p-8 flex flex-col gap-5.5"
          threshold={0.15}
        >
          <h3>
            Frontend
          </h3>
          <TechTag
            tags={FRONTEND_TAGS}
            tagClassName="text-xl px-4.5 py-2.5 rounded-full bg-tag text-primary-dark hover:bg-secondary hover:text-background"
          />
        </AnimateOnScroll>

        <AnimateOnScroll
          className="rounded-3xl bg-card-light p-8 flex flex-col gap-5.5"
          threshold={0.15}
          delay={100}
        >
          <h3>
            Backend
          </h3>
          <TechTag
            tags={BACKEND_TAGS}
            tagClassName="text-xl px-4.5 py-2.5 rounded-full bg-tag text-primary-dark hover:bg-secondary hover:text-background"
          />
        </AnimateOnScroll>
      </div>
    </div>
  )
}
