'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { scrollFadeInVariants } from "@/lib/animation-variants"

const testimonials = [
{
name:"Priya M.",
title:"IVF Patient",
content:"Dr. Priyadarshini's compassionate approach gave me confidence throughout my IVF journey. Her guidance made everything easier.",
rating:5
},
{
name:"Anjali S.",
title:"High Risk Pregnancy",
content:"My pregnancy was high risk but Dr. Priyadarshini handled it beautifully. Her constant support gave me peace of mind.",
rating:5
},
{
name:"Neha K.",
title:"Endometriosis Treatment",
content:"She truly understands endometriosis. The treatment plan she created changed my life and relieved years of pain.",
rating:5
},
{
name:"Isha R.",
title:"General Gynecology",
content:"Dr. Priyadarshini is incredibly patient and explains everything clearly. I always felt comfortable during consultations.",
rating:5
},
{
name:"Riya P.",
title:"Fertility Consultation",
content:"Professional, kind and extremely knowledgeable. One of the best fertility specialists I have met.",
rating:5
},
{
name:"Kavya D.",
title:"Pregnancy Care",
content:"The clinic environment is welcoming and the doctor truly listens to patients. Highly recommended.",
rating:5
}
]

export default function Testimonials(){

const [index,setIndex] = useState(0)
const [isPaused, setIsPaused] = useState(false)
const [itemsPerView, setItemsPerView] = useState(3)

const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

// responsive items
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) setItemsPerView(1)
    else if (window.innerWidth < 1024) setItemsPerView(2)
    else setItemsPerView(3)
  }

  handleResize()
  window.addEventListener("resize", handleResize)
  return () => window.removeEventListener("resize", handleResize)
}, [])

// autoplay
useEffect(()=>{
  if(isPaused) return

  const interval=setInterval(()=>{
    setIndex((prev)=> (prev+1)%(testimonials.length-itemsPerView+1))
  },4500)

  return ()=> clearInterval(interval)
},[itemsPerView,isPaused])

// swipe
const handleDragEnd = (_: any, info: any) => {
  if (info.offset.x < -80) {
    setIndex((prev) => Math.min(prev + 1, testimonials.length - itemsPerView))
  } else if (info.offset.x > 80) {
    setIndex((prev) => Math.max(prev - 1, 0))
  }
}

return(

<section ref={sectionRef} className="relative py-28 overflow-hidden bg-[#faf7fb]">

{/* background */}
<div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#c45166]/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#c45166]/10 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] [background-size:20px_20px]"></div>

<div className="relative max-w-7xl mx-auto px-6">

{/* heading */}
<motion.div
className="text-center mb-16"
initial="initial"
animate={isInView ? "animate" : "initial"}
variants={scrollFadeInVariants}
>
<h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
Patient Testimonials
</h2>

<p className="text-gray-600 max-w-xl mx-auto">
Real experiences from patients treated by Dr. Priyadarshini
</p>
</motion.div>

{/* slider */}
<div
className="overflow-hidden"
onMouseEnter={() => setIsPaused(true)}
onMouseLeave={() => setIsPaused(false)}
onTouchStart={() => setIsPaused(true)}
>

<motion.div
className="flex gap-6 md:gap-10 cursor-grab active:cursor-grabbing"
drag="x"
dragConstraints={{ left: 0, right: 0 }}
onDragEnd={handleDragEnd}
style={{
transform:`translateX(-${index * (100/itemsPerView)}%)`
}}
transition={{ duration: 0.5 }}
>

{testimonials.map((t,i)=>{

const initial = t.name.charAt(0)

return(

<div 
key={i} 
className="min-w-full sm:min-w-[50%] lg:min-w-[33.33%] px-2"
>

<div className="relative pt-16">

{/* capsule */}
<div className="absolute right-6 top-0 translate-y-1/2 flex items-center gap-3 bg-[#c45166] text-white px-5 py-2 rounded-full shadow z-10">

<div className="w-8 h-8 rounded-full bg-white text-[#c45166] flex items-center justify-center font-bold text-sm">
{initial}
</div>

<div className="text-left">
<p className="text-sm font-semibold leading-none">{t.name}</p>
<p className="text-xs opacity-80">{t.title}</p>
</div>

</div>

{/* card */}
<div className="relative bg-white rounded-[28px] shadow-md border border-pink-100 p-8 sm:p-10 pt-14 overflow-hidden">

<div className="absolute right-0 bottom-0 w-40 h-40 bg-pink-100/40 rounded-full blur-3xl"></div>

<div className="absolute top-6 left-6 text-[#c45166] text-[42px] sm:text-[54px] leading-none font-serif">
“
</div>

<p className="relative text-gray-600 leading-relaxed text-[15px] sm:text-[16px] mb-8 max-w-[320px] z-10">
{t.content}
</p>

<div className="flex gap-1 relative z-10">
{[...Array(t.rating)].map((_,i)=>(
<Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#c45166] text-[#c45166]"/>
))}
</div>

</div>

{/* closing quote */}
<div className="absolute -bottom-4 right-4 text-[#c45166] text-[50px] sm:text-[70px] leading-none font-serif">
”
</div>

</div>

</div>

)

})}

</motion.div>

</div>

{/* dots (mobile) */}
<div className="flex justify-center mt-8 gap-2 sm:hidden">

{Array.from({ length: testimonials.length - itemsPerView + 1 }).map((_, i) => (

<button
key={i}
onClick={() => setIndex(i)}
className={`h-2.5 rounded-full transition-all ${
index === i ? "w-6 bg-[#c45166]" : "w-2.5 bg-gray-300"
}`}
></button>

))}

</div>

{/* button */}
<motion.div
className="text-center mt-16"
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ delay: 0.2 }}
>

<a
href="https://share.google/Z48MaXm6RG4zO3zyl"
target="_blank"
className="inline-flex items-center gap-3 bg-[#c45166] text-white px-7 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
>

<img
src="https://toppng.com/uploads/preview/google-g-logo-icon-11609362962anodywxeaz.png"
className="w-5"
/>

Read Reviews on Google

</a>

</motion.div>

</div>

</section>

)
}