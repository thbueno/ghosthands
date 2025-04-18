"use client";

import { AboutSection } from "@/components/about-section";
import { AwardsSection } from "@/components/awards-section";
import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";
import { LetsTalkButton } from "@/components/lets-talk-button";
import { NavBar } from "@/components/navbar";
import { PartnersSection } from "@/components/partners-section";
import { WorksSection } from "@/components/works-section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Navigation */}
      <NavBar />

      <div className="container mx-auto px-8 md:px-8 lg:px-24 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-24 mt-12">
          <div className="col-span-1">
            <h1 className=" leading-[1.1] mb-8">
              I&apos;m a visual designer with passion to create{" "}
              <span>a great experiences</span>
            </h1>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="w-full h-[1px] bg-text"></div>
              </div>
              <div className="lg:col-start-2 flex items-center">
                <p className="text-lg md:text-xl">
                  I&apos;m Ivan, a Visual Designer living in Munich, and I focus
                  on making digital experiences that are easy to use, enjoyable,
                  and get the job done.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex gap-8 mb-8 md:mb-0">
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              INSTAGRAM{" "}
              <ArrowRight size={14} className="transform -rotate-45" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              BEHANCE <ArrowRight size={14} className="transform -rotate-45" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              DRIBBBLE <ArrowRight size={14} className="transform -rotate-45" />
            </Link>
          </div>
          <LetsTalkButton variant="dark" />
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Works Section */}
      <WorksSection />

      {/* Partners Section */}
      <PartnersSection
        baseSpeed={40}
        decelerationFactor={0.1}
        transitionDuration={400}
      />

      {/* CTA Section */}
      <CTASection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
