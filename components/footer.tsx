'use client'

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

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
<Link href="/treatments/infertility-treatment" className="hover:text-white transition">
Infertility Treatment
</Link>
</li>

<li>
<Link href="/treatments/high-risk-pregnancy" className="hover:text-white transition">
High Risk Pregnancy
</Link>
</li>

<li>
<Link href="/treatments/endometriosis-treatment" className="hover:text-white transition">
Endometriosis
</Link>
</li>

<li>
<Link href="/treatments/uterine-cancer-screening" className="hover:text-white transition">
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
<Link href="/about" className="hover:text-white transition">
About Doctor
</Link>
</li>

<li>
<Link href="/media-coverage" className="hover:text-white transition">
Gallery
</Link>
</li>

<li>
<Link href="/faqs" className="hover:text-white transition">
FAQs
</Link>
</li>

<li>
<Link href="/contact" className="hover:text-white transition">
Contact Us
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
<a href="tel:+918595274949" className="hover:text-white">
+91-8595274949
</a>
</li>

<li className="flex items-center gap-2">
<Mail size={16}/>
<a href="mailto:advancedgynaecare@gmail.com" className="hover:text-white">
advancedgynaecare@gmail.com
</a>
</li>

<li className="flex items-start gap-2">
<MapPin size={16}/>
<a href="https://maps.app.goo.gl/kHoYaSEgzXvFUeUg8" target="_blank" rel="noopener noreferrer">
  <span>
    L23, Block L, Kalkaji<br/>
    New Delhi 110019
  </span>
</a>
</li>

</ul>

</div>

</div>

{/* DIVIDER */}

<div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">

<p>
© {new Date().getFullYear()} Dr. Priyadarshini Ghosh. All rights reserved.
</p>

{/* SOCIAL ICONS */}

{/* SOCIAL ICONS */}

<div className="flex gap-4 mt-4 md:mt-0">

<Link
  href="mailto:advancedgynaecare@gmail.com"
  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
>
  <Mail size={18} />
</Link>

<Link
  href="https://api.whatsapp.com/send/?phone=918595274949&text&type=phone_number&app_absent=0"
  target="_blank"
  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
>
  {/* WhatsApp icon (custom SVG since lucide doesn't have official WA icon) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.52 3.48A11.9 11.9 0 0012.01 0C5.38 0 .01 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6.18-1.61A11.94 11.94 0 0012.01 24C18.64 24 24 18.63 24 12c0-3.2-1.25-6.2-3.48-8.52zM12.01 22c-1.82 0-3.6-.49-5.15-1.42l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 012.01 12c0-5.52 4.48-10 10-10 2.67 0 5.17 1.04 7.07 2.93A9.93 9.93 0 0122.01 12c0 5.52-4.48 10-10 10zm5.44-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.07 2.86 1.22 3.05.15.2 2.1 3.2 5.1 4.48.71.3 1.26.48 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
  </svg>
</Link>

<Link
  href="https://www.instagram.com/advancedgynaecare?igsh=MXY0MWE3NW1jZWh6bw%3D%3D"
  target="_blank"
  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
>
  <Instagram size={18} />
</Link>

</div>

</div>

</div>

</footer>

)
}