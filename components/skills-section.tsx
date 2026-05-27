'use client'
import React from 'react'
import TechTag, { FRONTEND_TAGS, BACKEND_TAGS, CLOUD_TAGS, AI_TAGS } from '@/components/tech-tag'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

const TAG_CLASS = 'text-xl px-4.5 py-2.5 rounded-full bg-tag text-primary-dark hover:bg-secondary hover:text-background'

const CATEGORIES = [
  { label: 'Frontend', tags: FRONTEND_TAGS, delay: 0 },
  { label: 'Backend', tags: BACKEND_TAGS, delay: 50 },
  { label: 'Cloud & Infra', tags: CLOUD_TAGS, delay: 100 },
  { label: 'AI / ML', tags: AI_TAGS, delay: 150 },
]

export default function SkillsSection() {
  return (
    <div>
      <h2 className="pb-4.5">
        Skills & stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        {CATEGORIES.map(({ label, tags, delay }) => (
          <AnimateOnScroll
            key={label}
            className="rounded-3xl bg-card-light p-8 flex flex-col gap-5.5"
            threshold={0.15}
            delay={delay}
          >
            <h3>{label}</h3>
            <TechTag tags={tags} tagClassName={TAG_CLASS} />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  )
}
