'use client'

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const awards = [
{
title:"Dr N Haldar Memorial Award",
description:"Awarded by Bengal Society of Obstetricians and Gynaecologists",
year:"2007"
},
{
title:"Gold Medalist",
description:"Awarded by Bengal Obstetrics and Gynaecological Society",
year:"2007"
}
]

export default function AwardsSection(){

return(

<section className="relative">

{/* TITLE */}

<div className="bg-white pt-24 pb-12 text-center">

<h2 className="text-4xl font-bold font-playfair mb-2">
Awards & Recognitions
</h2>

<p className="text-lg text-gray-600">
Honouring Excellence in Obstetrics & Gynecology
</p>

</div>

{/* CARDS */}

<div className="bg-white pb-20">

<div className="max-w-6xl mx-auto px-6 relative z-10">

<div className="grid md:grid-cols-2 gap-12 mb-[-140px]">

{awards.map((award,index)=>(

<motion.div
key={index}
whileHover={{y:-10}}
transition={{duration:0.35}}
className="relative group"

>

{/* GOLD BORDER */}

<div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">

<div className="relative bg-white rounded-3xl p-14 text-center shadow-xl overflow-visible">

{/* CERTIFICATE GLOW */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.15),transparent_70%)]"></div>

{/* RIBBON BADGE */}

<div className="absolute -top-4 left-8 bg-[#c45166] text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
Award
</div>

{/* SHINE */}

<div className="absolute -left-20 top-0 h-full w-32 bg-white/40 blur-xl rotate-12 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_2s_linear]"></div>

{/* MEDAL + LAUREL */}

<div className="relative flex justify-center mb-6">

{/* laurel wreath */}

<div className="absolute inset-0 flex items-center justify-center text-yellow-400 opacity-60 text-[90px] leading-none">
❧
</div>

{/* medal circle */}

<div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-md">

<Award size={30} className="text-white"/>

</div>

</div>

{/* TITLE */}

<h3 className="text-2xl font-semibold mb-4">
{award.title}
</h3>

{/* DIVIDER */}

<div className="w-16 h-[2px] bg-yellow-400 mx-auto mb-4"></div>

{/* DESCRIPTION */}

<p className="text-gray-600 mb-6 leading-relaxed">
{award.description}
</p>

{/* YEAR */}

<span className="inline-block text-sm font-medium bg-[#c45166]/10 text-[#c45166] px-4 py-1 rounded-full">
{award.year}
</span>

{/* GOLD GLOW */}

<div className="absolute right-0 bottom-0 w-44 h-44 bg-yellow-200/30 rounded-full blur-3xl"></div>

</div>

</div>

</motion.div>

))}

</div>

</div>

</div>

{/* IMAGE BACKGROUND */}

<div
className="h-[380px] bg-cover bg-center pt-40 pb-16 flex items-end justify-center text-white text-center relative"
style={{backgroundImage:"url('/award-banner.jpg')"}}
>

<div className="absolute inset-0 bg-black/40"></div>

</div>

<style jsx>{`
@keyframes shine {
0% { transform: translateX(-120%) rotate(12deg); }
100% { transform: translateX(500%) rotate(12deg); }
}
`}</style>

</section>

)
}
