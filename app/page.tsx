"use client";

import { AboutSection } from "@/components/about-section";
import { AwardsSection } from "@/components/awards-section";
import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";
import { LetsTalkButton } from "@/components/lets-talk-button";
import { NavBar } from "@/components/navbar";
import { PartnersSection } from "@/components/partners-section";
import { SocialLinks } from "@/components/social-links";
import { WorksSection } from "@/components/works-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <NavBar />

      <div className="container mx-auto px-8 md:px-8 lg:px-24 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-24 mt-12">
          <div className="col-span-1">
            <h1 className=" leading-[1.1] mb-8">
              I&apos;m a SSoftware Engineer with passion to create{" "}
              <span> great experiences</span>
            </h1>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="w-full h-[1px] bg-stone-400"></div>
              </div>
              <div className="lg:col-start-2 flex items-center">
                <p className="text-lg md:text-xl">
                Virtual greetings to you, I&apos;m Thiago Bueno and this is my work space on the Internet. Here you can browse through my current projects, my past works and learn more about me. Feel free!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <SocialLinks />
          <LetsTalkButton variant="red" />
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
