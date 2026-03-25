'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {

  const banners = [
    {
      desktop: "/banners/banner1.jpeg",
      mobile: "/banners/mobilebanner1.jpeg",
    },
    {
      desktop: "/banners/banner2.jpeg",
      mobile: "/banners/mobilebanner2.jpeg",
    },
    {
      desktop: "/banners/banner3.jpeg",
      mobile: "/banners/mobilebanner3.jpeg",
    },
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
      className="relative w-full 
      aspect-[4/5] sm:h-[320px] md:h-[420px] lg:h-[580px] 
      overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* CAROUSEL */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -80) nextSlide()
            if (info.offset.x > 80) prevSlide()
          }}
        >

          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={banners[current].mobile}
            />
            <img
              src={banners[current].desktop}
              alt="Clinic Banner"
              className="w-full h-full object-cover"
            />
          </picture>

        </motion.div>
      </AnimatePresence>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 md:from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-white/20 md:from-white/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 md:from-black/30 via-transparent to-black/30 md:to-black/40" />

      {/* BADGES */}
      <motion.div
        className="absolute left-3 md:left-10 bottom-16 md:bottom-20 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-md flex items-center gap-2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="text-[#c45166] font-bold text-sm md:text-lg">15+</span>
        <span className="text-[10px] md:text-xs font-semibold text-gray-700">
          Years Experience
        </span>
      </motion.div>

      <motion.div
        className="absolute right-3 md:right-10 bottom-16 md:bottom-20 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-md flex items-center gap-2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <span className="text-yellow-500 text-sm md:text-lg">★</span>
        <span className="text-[10px] md:text-xs font-semibold text-gray-700">
          4.9 Rating
        </span>
      </motion.div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all
            ${index === current ? "w-6 md:w-8 bg-white" : "w-1.5 md:w-2 bg-white/50"}`}
          />
        ))}
      </div>

    </section>
  )
}