'use client'

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { scrollFadeInVariants } from "@/lib/animation-variants"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function AboutDr() {

  const { ref: sectionRef, isInView } = useInView({ threshold: 0.15 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (

    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >

      {/* Subtle background pattern */}

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <Image
          src="/maa.png"
          alt="decorative background"
          fill
          className="object-cover"
        />
      </div>


      <div className="max-w-7xl mx-auto relative">

        {/* HEADING */}

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={scrollFadeInVariants}
          className="text-center mb-20 relative"
        >

          {/* Decorative hand */}

          <div className="absolute -left-36 md:-left-44 top-1/2 -translate-y-1/2 hidden md:block opacity-90">
            <Image
              src="/hand2.png"
              alt="mother child hand"
              width={360}
              height={360}
              className="object-contain"
            />
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Dr. Priyadarshini Ghosh – Best Lady
            <br />
            Gynecologist in Delhi
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "460px" } : { width: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto mt-6 h-[2px] bg-[#c45166]"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-4 text-lg md:text-xl text-muted-foreground"
          >
            High Risk Pregnancy Expert In Delhi
          </motion.p>

        </motion.div>


        {/* CONTENT */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">


          {/* TEXT */}
          
<motion.div
  initial="initial"
  animate={isInView ? "animate" : "initial"}
  variants={scrollFadeInVariants}
  className="space-y-6 text-lg leading-relaxed text-muted-foreground"
>

  <h3 className="text-2xl font-semibold text-foreground font-playfair">
    About the Doctor
  </h3>

  <p>
    <strong>Dr. Priyadarshini Ghosh</strong> is a trusted gynecologist and infertility
    specialist providing advanced care for women’s reproductive health.
    She has extensive experience in treating conditions such as fibroids,
    ovarian cysts, infertility, endometriosis and high-risk pregnancies
    using modern evidence-based medical practices.
  </p>

  <p>
    Trained by the prestigious <strong>Royal College of Obstetricians and
    Gynaecologists, London</strong>, she practices according to international
    medical protocols to ensure safe and effective treatment for every patient.
  </p>

  <p>
    She consults at her modern clinic in <strong>L-23 Kalkaji, New Delhi</strong> and
    is also associated with renowned hospitals including Apollo Cradle,
    Fortis La Femme and Cloud Nine.
  </p>

  <a
    href="/about"
    className="inline-block mt-4 text-[#c45166] font-semibold hover:underline"
  >
    Read Full Profile →
  </a>

</motion.div>


          {/* IMAGE AREA */}

          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={scrollFadeInVariants}
            style={{ y: scrollY * 0.06 }}
            className="relative flex justify-center"
          >

            {/* Soft glow behind image */}

            <div className="absolute w-[420px] h-[420px] rounded-full bg-[#c45166]/20 blur-3xl" />

            {/* Decorative frame layer */}

            <div className="absolute w-[440px] h-[520px] border border-[#c45166]/30 rounded-[36px]" />

            {/* Floating accents */}

            <motion.div
              className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-[#c45166]/20"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.div
              className="absolute -bottom-10 -right-8 w-16 h-16 rounded-full bg-[#c45166]/15"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />


            {/* Image reveal animation */}

            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 2 }}
              className="relative rounded-[36px] overflow-hidden shadow-2xl"
            >

              <Image
                src="/dr-removebg.png"
                alt="Dr Priyadarshini Ghosh"
                width={380}
                height={540}
                className="object-cover"
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

  )
}