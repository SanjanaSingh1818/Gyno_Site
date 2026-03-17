'use client'

import { useParams } from 'next/navigation'
import { services } from '@/lib/services'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/use-in-view'
import { scrollFadeInVariants } from '@/lib/animation-variants'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug as string
  const service = services.find(s => s.slug === slug)

  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={scrollFadeInVariants}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={scrollFadeInVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-playfair mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {service.desc}
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={scrollFadeInVariants}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={scrollFadeInVariants}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-foreground">About This Service</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.details}
            </p>
            <div className="pt-6">
              <Link
                href="/#appointment"
                className="inline-flex items-center px-6 py-3 bg-[#c45166] text-white font-medium rounded-lg hover:bg-[#b03d58] transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}