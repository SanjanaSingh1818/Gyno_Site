'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from '@/hooks/use-in-view'
import { scrollFadeInVariants } from '@/lib/animation-variants'

export default function About() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="about"
      className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={scrollFadeInVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold leading-tight">
            Trusted Women’s Healthcare Specialist in Delhi NCR
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining clinical excellence with compassionate care for every stage of a woman’s health journey.
          </p>

          <div className="mt-6 h-[2px] w-24 md:w-32 mx-auto rounded-full bg-[#c45166]/60" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-5 md:space-y-6"
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={scrollFadeInVariants}
          >

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              If you are looking for a gynecologist who combines compassion with advanced medical expertise,
              Dr. Priyadarshini Ghosh is a trusted name in Delhi NCR. She specializes in treating conditions
              such as infertility, fibroids, ovarian cysts, endometriosis, high-risk pregnancy, and menstrual disorders.
            </p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Trained at the prestigious Royal College of Obstetricians and Gynaecologists (London),
              she follows evidence-based medicine and international treatment protocols to ensure the highest
              standard of care for her patients.
            </p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Her clinic at Kalkaji, New Delhi is a state-of-the-art facility offering comprehensive services,
              including diagnostics, blood collection, and personalized nutrition & fitness plans.
            </p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              She is also associated with leading hospitals like Apollo Cradle Panchsheel Enclave,
              Fortis La Femme GK2, and Cloudnine East of Kailash—ensuring advanced care backed by top infrastructure.
            </p>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5 pt-2">

              <div className="rounded-xl bg-[#faf7fb] p-5 border border-pink-100 hover:shadow-md transition duration-300">
                <h3 className="text-base md:text-lg font-semibold mb-2">Specialities</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Gynecologist</li>
                  <li>• Infertility Specialist</li>
                  <li>• High Risk Obstetrics</li>
                  <li>• Laparoscopic Surgery</li>
                </ul>
              </div>

              <div className="rounded-xl bg-[#faf7fb] p-5 border border-pink-100 hover:shadow-md transition duration-300">
                <h3 className="text-base md:text-lg font-semibold mb-2">Languages</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• বাংলা (Bengali)</li>
                  <li>• English</li>
                  <li>• हिंदी (Hindi)</li>
                </ul>
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative max-w-md mx-auto lg:max-w-none"
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={scrollFadeInVariants}
          >

            <div className="relative overflow-hidden rounded-3xl shadow-xl group">

              <Image
                src="/doctor.png"
                alt="Dr Priyadarshini"
                width={600}
                height={700}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />

              {/* soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />

            </div>

            {/* floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-xl px-4 py-2 border border-pink-100">
              <p className="text-xs md:text-sm font-semibold text-[#c45166]">
                15+ Years Experience
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}