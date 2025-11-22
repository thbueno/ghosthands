import React from 'react'
import TechTag, { FRONTEND_TAGS, BACKEND_TAGS } from '@/components/tech-tag'

export default function SkillsSection() {
  return (
    <section id="skills" className="px-7 py-20 md:px-8 lg:px-12">
      <div className="conteiner flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-col gap-4">
          <h2>Skills</h2>
          <p className="text-gray-500">
            These are the tools I’ve picked up along my journey as a developer,
            not just through courses or tutorials, but by applying them in real,
            production level projects.
          </p>
        </div>

        {/* Frontend Section */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <h3>Frontend</h3>
            <TechTag tags={FRONTEND_TAGS} />

            {/* Divider */}
            <div className="flex items-center">
              <div className="h-[1px] w-full bg-stone-400"></div>
            </div>
          </div>

          {/* Backend Section */}
          <div className="flex flex-col gap-8">
            <h3>Backend</h3>
            <TechTag tags={BACKEND_TAGS} />

            {/* Divider */}
            <div className="flex items-center">
              <div className="h-[1px] w-full bg-stone-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
