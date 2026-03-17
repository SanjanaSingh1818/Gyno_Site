'use client'

import Image from "next/image"

export default function PageHero({
  title,
  breadcrumb,
  backgroundImage
}: {
  title: string
  breadcrumb: string
  backgroundImage: string
}) {
  return (
    <section className="relative w-full h-[55vh] min-h-[380px] max-h-[520px] overflow-hidden">

      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c45166]/85 via-[#c45166]/60 to-transparent" />

      {/* Soft white fade (bottom for elegance) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">

        <div>
          <p className="text-white/80 text-sm md:text-base mb-3">
            {breadcrumb}
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-playfair font-semibold leading-tight">
            {title}
          </h1>
        </div>

      </div>

    </section>
  )
}