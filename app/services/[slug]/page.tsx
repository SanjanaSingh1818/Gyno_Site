'use client'

import { useParams } from 'next/navigation'
import { services } from '@/lib/services'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/use-in-view'
import { scrollFadeInVariants } from '@/lib/animation-variants'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug as string
  const service = services.find(s => s.slug === slug)

  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

  // ✅ Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

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
    <>
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
              <h2 className="text-2xl font-semibold text-foreground">
                About This Service
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.details}
              </p>

              {/* ✅ Modal Trigger Button */}
              <div className="pt-6">
                <button
                  onClick={openModal}
                  className="inline-flex items-center px-6 py-3 bg-[#c45166] text-white font-medium rounded-lg hover:bg-[#b03d58] transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ✅ APPOINTMENT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 md:p-8 relative">

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              Book Appointment
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c45166]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c45166]"
              />

              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c45166]"
              />

              <textarea
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c45166]"
              />

              <button
                type="submit"
                className="w-full bg-[#c45166] text-white py-2 rounded-lg hover:bg-[#b03f57]"
              >
                Submit Appointment
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  )
}