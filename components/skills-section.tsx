import React from 'react'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="conteiner">
        <div className="flex flex-col gap-4">
          <h2>Skills</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>

        {/* Frontend Section */}

        <div className="flex flex-col">
          <div>
            <h3>Frontend</h3>
            <div></div>
          </div>
          {/* Divider */}
          <div className="flex items-center">
            <div className="h-[1px] w-full bg-stone-400"></div>
          </div>

          {/* Backend Section */}
          <div>
            <h3>Backend</h3>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
