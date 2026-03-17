'use client'

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {

  const banners = [
    "/banners/banner1.jpeg",
    "/banners/banner2.jpeg",
    "/banners/banner3.jpeg",
  ]

  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [paused])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (

    <section
      className="relative w-full h-[320px] md:h-[420px] lg:h-[580px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* CAROUSEL */}

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) nextSlide()
            if (info.offset.x > 100) prevSlide()
          }}
        >

          <Image
            src={banners[current]}
            alt="Clinic Banner"
            fill
            priority
            className="object-cover"
          />

        </motion.div>
      </AnimatePresence>


      {/* CINEMATIC DARK GRADIENT */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />


      {/* FLOATING BADGE — EXPERIENCE */}

      <motion.div
        className="absolute left-4 md:left-10 bottom-16 md:bottom-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md flex items-center gap-2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="text-[#c45166] font-bold text-lg">15+</span>
        <span className="text-xs font-semibold text-gray-700">
          Years Experience
        </span>
      </motion.div>


      {/* FLOATING BADGE — RATING */}

      <motion.div
        className="absolute right-4 md:right-10 bottom-16 md:bottom-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md flex items-center gap-2"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-xs font-semibold text-gray-700">
          4.9 Patient Rating
        </span>
      </motion.div>


      {/* LEFT ARROW */}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ‹
      </button>


      {/* RIGHT ARROW */}

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ›
      </button>


      {/* DOT INDICATORS */}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all
            ${index === current ? "w-8 bg-white" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>

    </section>
  )
}