import React from 'react'
import TechTag, { FRONTEND_TAGS, BACKEND_TAGS } from '@/components/tech-tag'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2>Skills</h2>
            <p className="mt-4">
              These are the tools I've picked up along my journey as a
              developer, not just through courses or tutorials, but by applying
              them in real, production level projects.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="flex flex-col gap-12">
              {/* Frontend Section */}
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
        </div>
      </div>
    </section>
  )
}
