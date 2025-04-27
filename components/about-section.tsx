import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Column */}
          <div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Showcasy_about_section.jpg-bUqRlOdy9atvjR6mivxT9jhrJIV3vU.jpeg"
                alt="Designer portrait"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              About me
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              Concentrate on your primary objective which is expanding your
              business, and leave it to me to ensure that your business is
              efficiently portrayed in the digital realm and distinguishes
              itself from the rivals.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-lg font-medium hover:opacity-80 transition-opacity"
            >
              Learn More <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
