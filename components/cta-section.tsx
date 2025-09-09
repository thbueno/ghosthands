import { LetsTalkButton } from '@/components/lets-talk-button'

export function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <div className="rounded-3xl bg-secondary px-6 py-24 text-center md:py-32">
          <h1 className="mb-8">
            Want to create something{' '}
            <span className="text-background">awesome?</span>
          </h1>
          <div className="flex justify-center">
            <LetsTalkButton
              variant="light"
              className="hover:border-background hover:text-background"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
