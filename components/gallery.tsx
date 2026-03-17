'use client'

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { scrollFadeInVariants, cardContainerVariants, cardItemVariants } from "@/lib/animation-variants"

const images = [
{src:"/gallery/clinic1.webp", category:"Clinic"},
{src:"/gallery/clinic2.webp", category:"Clinic"},
{src:"/gallery/award1.webp", category:"Awards"},
{src:"/gallery/award2.webp", category:"Awards"},
{src:"/gallery/patient1.webp", category:"Care Moments"},
{src:"/gallery/patient3.webp", category:"Care Moments"},
{src:"/gallery/clinic3.webp", category:"Clinic"},
{src:"/gallery/patient5.webp", category:"Care Moments"},
]

const filters = ["All","Clinic","Awards","Care Moments"]

export default function GallerySection(){

const [active,setActive] = useState("All")
const [selected,setSelected] = useState<string | null>(null)
const [slide,setSlide] = useState(0)

const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

const filtered =
active === "All"
? images
: images.filter(img => img.category === active)

return(

<section ref={sectionRef} className="relative py-28 bg-[#faf7fb] overflow-hidden">

<div className="max-w-7xl mx-auto px-6">

{/* heading */}
<motion.div
className="text-center mb-14"
initial="initial"
animate={isInView ? "animate" : "initial"}
variants={scrollFadeInVariants}
>
<h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
Photo Gallery
</h2>

<p className="text-gray-600 max-w-xl mx-auto">
Explore moments from our clinic, awards, and happy patient journeys.
</p>
</motion.div>

{/* filters */}
<motion.div
className="flex justify-center flex-wrap gap-4 mb-12"
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ delay: 0.1 }}
>
{filters.map((filter)=>(
<button
key={filter}
onClick={()=>{
setActive(filter)
setSlide(0)
}}
className={`px-6 py-2 rounded-full text-sm font-medium transition
${active === filter
? "bg-[#c45166] text-white shadow"
: "bg-white text-gray-600 hover:bg-[#c45166]/10"}
`}
>
{filter}
</button>
))}
</motion.div>

{/* DESKTOP GRID */}
<motion.div
className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6"
initial="initial"
animate={isInView ? "animate" : "initial"}
variants={cardContainerVariants}
>
{filtered.map((img)=>(
<motion.div
key={img.src}
variants={cardItemVariants}
whileHover={{scale:1.05}}
className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group"
onClick={()=>setSelected(img.src)}
>
<Image
src={img.src}
alt="gallery image"
width={500}
height={400}
className="object-cover w-full h-[220px] group-hover:scale-110 transition duration-500"
/>

<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
<span className="text-white opacity-0 group-hover:opacity-100 text-lg font-medium">
View
</span>
</div>
</motion.div>
))}
</motion.div>

{/* MOBILE CAROUSEL */}
<motion.div
className="md:hidden overflow-hidden"
initial={{ opacity: 0, y: 40 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ delay: 0.15 }}
>

<motion.div
drag="x"
dragConstraints={{left:-((filtered.length-1)*320), right:0}}
className="flex gap-4 cursor-grab"
onDragEnd={(e,info)=>{
if(info.offset.x < -100 && slide < filtered.length-1){
setSlide(slide+1)
}
if(info.offset.x > 100 && slide > 0){
setSlide(slide-1)
}
}}
animate={{x:-slide*320}}
transition={{type:"spring", stiffness:200}}
>

{filtered.map((img)=>(

<div
key={img.src}
className="min-w-[300px] rounded-2xl overflow-hidden shadow-lg"
onClick={()=>setSelected(img.src)}
>

<Image
src={img.src}
alt="gallery image"
width={400}
height={300}
className="object-cover w-full h-[220px]"
/>

</div>
))}

</motion.div>

{/* dots */}
<div className="flex justify-center mt-6 gap-2">
{filtered.map((_,i)=>(

<div
key={i}
onClick={()=>setSlide(i)}
className={`h-2 rounded-full transition-all cursor-pointer
${slide === i ? "w-6 bg-[#c45166]" : "w-2 bg-gray-300"}
`}
/>
))}
</div>

</motion.div>

{/* button */}
<motion.div
className="flex justify-center mt-16"
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ delay: 0.2 }}
>
<motion.a
href="/media-coverage"
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="inline-flex items-center gap-2 bg-[#c45166] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition"
>
See All Photos
</motion.a>
</motion.div>

</div>

{/* LIGHTBOX (unchanged) */}
<AnimatePresence>
{selected && (
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
onClick={()=>setSelected(null)}
>
<motion.div
initial={{scale:0.9}}
animate={{scale:1}}
exit={{scale:0.9}}
transition={{duration:0.3}}
className="relative max-w-3xl w-full flex justify-center"
onClick={(e)=>e.stopPropagation()}
>
<button
onClick={()=>setSelected(null)}
className="absolute -top-10 right-0 text-white text-3xl"
>
×
</button>

<Image
src={selected}
alt="preview"
width={1000}
height={700}
className="rounded-xl max-h-[80vh] w-auto object-contain"
/>
</motion.div>
</motion.div>
)}
</AnimatePresence>

</section>

)
}