'use client'

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {

return(

<footer className="bg-gradient-to-b from-[#c45166] to-[#a63d52] text-white pt-16 pb-10">

<div className="max-w-7xl mx-auto px-6">

{/* TOP GRID */}

<div className="grid md:grid-cols-4 gap-10 mb-12">

{/* CLINIC INFO */}

<div>

<Image
src="/logo.webp"
alt="Clinic Logo"
width={180}
height={60}
className="mb-4"
/>

<p className="text-white/90 text-sm leading-relaxed mb-4">
Advanced reproductive healthcare and high-risk pregnancy management with compassionate care.
</p>

<div className="text-sm text-white/80">
<p className="font-medium mb-1">Languages</p>
<p>English • Hindi • Bengali</p>
</div>

</div>

{/* SPECIALIZATIONS */}

<div>

<h4 className="font-semibold text-lg mb-4">
Specializations
</h4>

<ul className="space-y-2 text-sm text-white/90">

<li>
<Link href="#services" className="hover:text-white transition">
Infertility Treatment
</Link>
</li>

<li>
<Link href="#services" className="hover:text-white transition">
High Risk Pregnancy
</Link>
</li>

<li>
<Link href="#services" className="hover:text-white transition">
Endometriosis
</Link>
</li>

<li>
<Link href="#services" className="hover:text-white transition">
Cancer Screening
</Link>
</li>

</ul>

</div>

{/* QUICK LINKS */}

<div>

<h4 className="font-semibold text-lg mb-4">
Quick Links
</h4>

<ul className="space-y-2 text-sm text-white/90">

<li>
<Link href="#about" className="hover:text-white transition">
About Doctor
</Link>
</li>

<li>
<Link href="#testimonials" className="hover:text-white transition">
Testimonials
</Link>
</li>

<li>
<Link href="#gallery" className="hover:text-white transition">
Gallery
</Link>
</li>

<li>
<Link href="#reach-us" className="hover:text-white transition">
Reach Us
</Link>
</li>

</ul>

</div>

{/* CONTACT */}

<div>

<h4 className="font-semibold text-lg mb-4">
Contact
</h4>

<ul className="space-y-3 text-sm text-white/90">

<li className="flex items-center gap-2">

<Phone size={16}/>
<a href="tel:+919910391381" className="hover:text-white">
+91 99103 91381
</a>

</li>

<li className="flex items-center gap-2">

<Mail size={16}/>
<a href="mailto:dr.priyadarshini@clinic.com" className="hover:text-white">
dr.priyadarshini@clinic.com
</a>

</li>

<li className="flex items-start gap-2">

<MapPin size={16}/>
<span>
L23, Block L, Kalkaji<br/>
New Delhi 110019
</span>

</li>

</ul>

</div>

</div>

{/* DIVIDER */}

<div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">

<p>
© {new Date().getFullYear()} Dr. Priyadarshini Ghosh. All rights reserved.
</p>

<div className="flex gap-6 mt-4 md:mt-0">

<Link href="#" className="hover:text-white transition">
Facebook
</Link>

<Link href="#" className="hover:text-white transition">
Instagram
</Link>

<Link href="#" className="hover:text-white transition">
LinkedIn
</Link>

</div>

</div>

</div>

</footer>

)
}
