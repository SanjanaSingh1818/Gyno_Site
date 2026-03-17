'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { services } from "@/lib/services"
import { useInView } from "@/hooks/use-in-view"
import { cardContainerVariants, cardItemVariants, scrollFadeInVariants } from "@/lib/animation-variants"

export default function Services() {

  const [active, setActive] = useState<number | null>(null)

  // 👇 same logic as WhyChoose
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

  return (

    <section ref={sectionRef} className="py-24 bg-[#f6f6f7]">

      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={scrollFadeInVariants}
        >
          <h2 className="text-5xl font-bold font-playfair mb-4">
            Comprehensive Gynecological Treatments
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our array of specialized services designed with compassion,
            precision and advanced medical expertise.
          </p>
        </motion.div>

        {/* grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={cardContainerVariants}
        >

          {services.map((service, index) => {

            const isActive = active === index

            return (

              <Link key={index} href={`/services/${service.slug}`}>
                <motion.div
                  variants={cardItemVariants} // 👈 scroll animation per card
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  className="relative overflow-hidden rounded-[26px] border border-gray-300 shadow-md bg-white cursor-pointer"
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    y: isActive ? -6 : 0
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18
                  }}
                >

                  {/* image */}
                  <motion.div
                    className="relative h-[260px]"
                    animate={{ scale: isActive ? 1.08 : 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* glass curved panel */}
                  <motion.div
                    className="absolute bottom-0 w-full px-6 text-center flex items-center justify-center"
                    animate={{
                      height: isActive ? "100%" : "85px",
                      borderTopLeftRadius: isActive ? "0px" : "100% 60px",
                      borderTopRightRadius: isActive ? "0px" : "100% 60px"
                    }}
                    transition={{ duration: 0.45 }}
                    style={{
                      background: "rgba(255,255,255,0.35)",
                      backdropFilter: "blur(16px)",
                      borderTop: "1px solid rgba(255,255,255,0.4)"
                    }}
                  >
                    <div className="flex flex-col items-center justify-center max-w-[260px] translate-y-[14px]">

                      <h3 className="text-[18px] font-semibold leading-tight">
                        {service.title}
                      </h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.35 }}
                        className="text-gray-700 text-sm mt-2"
                      >
                        {service.desc}
                      </motion.p>

                    </div>
                  </motion.div>

                </motion.div>
              </Link>

            )
          })}

        </motion.div>

      </div>

    </section>

  )
}