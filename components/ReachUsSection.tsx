'use client'

import { useEffect, useState } from "react"
import { Phone, MapPin, Navigation, Clock, CalendarCheck } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { scrollFadeInVariants } from "@/lib/animation-variants"

export default function ReachUsSection(){

const [isOpen,setIsOpen] = useState(false)
const [isModalOpen,setIsModalOpen] = useState(false)

const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

const openModal = () => setIsModalOpen(true)
const closeModal = () => setIsModalOpen(false)

useEffect(()=>{

const now = new Date()
const day = now.getDay()
const hour = now.getHours()
const minute = now.getMinutes()
const current = hour + minute/60

const morningOpen = 9.5
const morningClose = 13.5
const eveningOpen = 17.5
const eveningClose = 20

if(day !== 0 && (
(current >= morningOpen && current <= morningClose) ||
(current >= eveningOpen && current <= eveningClose)
)){
setIsOpen(true)
}

},[])

return(

<section ref={sectionRef} className="py-20 md:py-28 bg-white">

<div className="max-w-7xl mx-auto px-5 md:px-6">

{/* heading */}
<motion.div
className="text-center mb-12 md:mb-16"
initial="initial"
animate={isInView ? "animate" : "initial"}
variants={scrollFadeInVariants}
>
<h2 className="text-4xl md:text-5xl font-bold font-playfair mb-3">
Reach Us
</h2>

<p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
Visit our clinic during consultation hours or easily locate us on the map.
</p>
</motion.div>

<div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">

{/* LEFT SIDE */}
<motion.div
className="space-y-6 md:space-y-8"
initial={{ opacity: 0, y: 40 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6 }}
>

{/* ADDRESS */}
<div className="bg-[#faf7fb] p-5 md:p-6 rounded-2xl border border-pink-100 shadow-sm">

<div className="flex items-start gap-4">

<div className="bg-[#c45166]/10 p-3 rounded-lg">
<MapPin className="text-[#c45166]" size={20}/>
</div>

<div>
<h3 className="font-semibold mb-1">
Advanced Gynae Care Clinic
</h3>

<p className="text-gray-600 text-sm leading-relaxed">
L23, Block L, Kalkaji,<br/>
New Delhi, Delhi 110019
</p>
</div>

</div>

</div>

{/* TIMINGS */}
<div className="bg-[#faf7fb] p-5 md:p-6 rounded-2xl border border-pink-100 shadow-sm">

<div className="flex items-center justify-between mb-4">

<div className="flex items-center gap-3 md:gap-4">

<div className="bg-[#c45166]/10 p-3 rounded-lg">
<Clock className="text-[#c45166]" size={20}/>
</div>

<h3 className="font-semibold">
Clinic Timings
</h3>

</div>

<span className={`text-xs font-medium px-3 py-1 rounded-full ${
isOpen
? "bg-green-100 text-green-600"
: "bg-red-100 text-red-600"
}`}>
{isOpen ? "Open Now" : "Closed"}
</span>

</div>

<div className="text-gray-600 text-sm space-y-2">

<p>
<strong>Monday – Saturday:</strong><br/>
9:30 AM – 1:30 PM | 5:30 PM – 8:00 PM
</p>

<p>
<strong>Sunday:</strong> Closed
</p>

</div>

</div>

{/* ACTION BUTTONS */}
<div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-4">

<a
href="tel:+919910391381"
className="flex items-center gap-2 bg-[#c45166] text-white px-4 md:px-5 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium shadow-sm hover:shadow transition"
>
<div className="bg-white/20 p-1.5 rounded-md">
<Phone size={14}/>
</div>
Call
</a>

<a
href="https://maps.google.com/?q=Dr.Priyadarshini+Ghosh+Advanced+Gynae+Care+Clinic"
target="_blank"
className="flex items-center gap-2 bg-white border border-gray-200 px-4 md:px-5 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium hover:bg-gray-50 transition"
>
<div className="bg-[#c45166]/10 p-1.5 rounded-md">
<Navigation className="text-[#c45166]" size={14}/>
</div>
Directions
</a>

<button
onClick={openModal}
className="flex items-center gap-2 bg-[#c45166]/10 text-[#c45166] px-4 md:px-5 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium hover:bg-[#c45166]/20 transition"
>
<div className="bg-[#c45166]/10 p-1.5 rounded-md">
<CalendarCheck size={14}/>
</div>
<span className="md:hidden">Book</span>
<span className="hidden md:inline">Book Appointment</span>
</button>

</div>

</motion.div>

{/* RIGHT SIDE MAP */}
<motion.div
className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
initial={{ opacity: 0, y: 40 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6, delay: 0.15 }}
>

<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0636670103545!2d77.25533967495328!3d28.537805988377112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ae68475fd3%3A0x7335b00add2a4029!2sDr.Priyadarshini%20Ghosh(Advanced%20Gynae%20Care%20Clinic)!5e0!3m2!1sen!2sin!4v1773694776970!5m2!1sen!2sin"
width="100%"
height="420"
style={{border:0}}
loading="lazy"
/>

</motion.div>

</div>

</div>

{/* MODAL (unchanged) */}
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

<input type="text" placeholder="Full Name" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c45166]" />
<input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c45166]" />
<input type="date" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c45166]" />

<textarea placeholder="Message" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c45166]" />

<button type="submit" className="w-full bg-[#c45166] text-white py-2 rounded-lg hover:bg-[#b03f57]">
Submit Appointment
</button>

</form>

</div>

</div>

)}

</section>

)
}