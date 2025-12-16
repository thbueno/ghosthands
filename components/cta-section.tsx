import { LetsTalkButton } from '@/components/lets-talk-button'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="perspective-3d container mx-auto md:px-8 lg:px-12">
        <AnimateOnScroll variant="rotate-3d" threshold={0.8}>
          <div className="rounded-3xl bg-secondary px-6 py-24 text-center md:py-32">
            <AnimateOnScroll delay={100} threshold={0.2}>
              <h1 className="mb-8">
                Want to create something{' '}
                <span className="text-background">awesome?</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200} threshold={0.2}>
              <div className="flex justify-center">
                <LetsTalkButton
                  variant="light"
                  className="hover:border-background hover:text-background"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
