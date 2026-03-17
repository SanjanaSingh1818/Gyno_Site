'use client'

import { Award, Sparkles, UserCheck, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cardContainerVariants, cardItemVariants, scrollFadeInVariants } from "@/lib/animation-variants"

const features = [
  {
    title: "15+ Years Experience",
    description:
      "Dr. Priyadarshini Ghosh brings over 15 years of expert gynecological care, combining modern techniques with a patient-first approach.",
    Icon: Award,
  },
  {
    title: "Advanced Minimally Invasive Care",
    description:
      "Specializing in laparoscopic and minimally invasive procedures, she provides effective treatment with faster recovery and fewer complications.",
    Icon: Sparkles,
  },
  {
    title: "Compassionate Patient Care",
    description:
      "Every patient receives personalized attention and a holistic care plan designed for long-term health and wellbeing.",
    Icon: UserCheck,
  },
]

export default function WhyChoose() {

  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((prev) => Math.max(prev - 1, 0))
  const next = () => setIndex((prev) => Math.min(prev + 1, features.length - 1))

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">

      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={scrollFadeInVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-playfair">
            Why Choose Dr. Priyadarshini Ghosh?
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Dr. Priyadarshini Ghosh is a trusted gynecologist known for her clinical expertise, modern surgical techniques, and warm, patient-centered care.
          </p>
        </motion.div>

        {/* DESKTOP GRID */}
        <motion.div
          className="hidden md:grid gap-8 md:grid-cols-3"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={cardContainerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardItemVariants}
              className="rounded-2xl border border-border/50 bg-white p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#c45166] text-white shadow">
                <feature.Icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden relative">

          {/* slider */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${index * 100}%` }}
              transition={{ duration: 0.5 }}
            >
              {features.map((feature) => (
                <div key={feature.title} className="min-w-full px-2">

                  <div className="rounded-2xl border border-border/50 bg-white p-6 text-center shadow-sm">

                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c45166] text-white shadow">
                      <feature.Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                  </div>

                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* arrows */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            disabled={index === features.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>

          {/* dots */}
          <div className="flex justify-center mt-6 gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  index === i ? "w-6 bg-[#c45166]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}