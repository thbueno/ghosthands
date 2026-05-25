import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ProfileHeader from './sections/ProfileHeader';
import ProductsSection from './sections/ProductsSection';
import DownloadsSection from './sections/DownloadsSection';
import FigmaCard from './sections/FigmaCard';
import Footer from './sections/Footer';
import TrailCanvas from './components/TrailCanvas';

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.08,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // GSAP Cascade Reveal entrance animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Show all content immediately
      gsap.set('.profile-header, .section-label, .product-card, .downloads-label, .wallpaper-card, .figma-card, .footer', {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      });
      return;
    }

    const tl = gsap.timeline({ delay: 0.2 });

    tl.to('.profile-header', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power2.out',
    })
    .to('.section-label', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.4,
      ease: 'power2.out',
    }, '+=0.1')
    .to('.product-card', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
    }, '+=0.05')
    .to('.downloads-label', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.4,
      ease: 'power2.out',
    }, '-=0.2')
    .to('.wallpaper-card', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
    }, '+=0.05')
    .to('.figma-card', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power2.out',
    }, '+=0.1')
    .to('.footer', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power2.out',
    }, '+=0.1');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* Background trail effect */}
      <TrailCanvas />

      {/* Page content */}
      <div className="relative z-[1]">
        {/* Main content */}
        <main className="max-w-[640px] mx-auto px-6 sm:px-10 pt-10 pb-12 flex flex-col gap-12">
          <ProfileHeader />
          <ProductsSection />
          <DownloadsSection />
          <FigmaCard />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
