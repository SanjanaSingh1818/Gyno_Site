'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '@/hooks/use-in-view'
import { scrollFadeInVariants } from '@/lib/animation-variants'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const msg = `Hello Doctor,

I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Date: ${formData.date}

Message:
${formData.message}`

    window.open(`https://wa.me/918595274949?text=${encodeURIComponent(msg)}`)

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', date: '', message: '' })
    }, 2500)
  }

  return (
    <section className="py-20 px-4 bg-[#faf7fb]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🔴 HEADING */}
        <motion.div
          className="text-center"
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={scrollFadeInVariants}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold">
            Contact & Appointment
          </h2>

          <p className="text-gray-600 mt-3">
            We’re here to support your health journey. Reach out anytime.
          </p>

          <div className="mt-5 h-[2px] w-24 mx-auto bg-[#c45166]/60 rounded-full" />
        </motion.div>


        {/* 🔴 TOP BLOCK (INFO + FORM) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* 🟢 LEFT → SINGLE PREMIUM INFO BLOCK */}
          <motion.div
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={scrollFadeInVariants}
          >

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100 space-y-6">

              <h3 className="text-xl font-semibold mb-4">
                Clinic Information
              </h3>

              {/* item */}
              <div className="flex items-start gap-4">
                <div className="bg-[#c45166]/10 p-3 rounded-xl">
                  <Phone className="text-[#c45166]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <a href="tel:+918595274949" className="font-semibold">
                    +91-8595274949
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#c45166]/10 p-3 rounded-xl">
                  <Mail className="text-[#c45166]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:advancedgynaecare@gmail.com" className="font-semibold">
                    advancedgynaecare@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#c45166]/10 p-3 rounded-xl">
                  <MapPin className="text-[#c45166]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">
                    L23, Kalkaji, New Delhi – 110019
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#c45166]/10 p-3 rounded-xl">
                  <Clock className="text-[#c45166]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Timings</p>
                  <p className="font-medium text-sm">
                    Mon–Sat: 11:00 AM – 7:00 PM
                  </p>
                 
                  <p className="text-red-500 text-sm mt-1">Sunday Closed</p>
                </div>
              </div>

            </div>

          </motion.div>


          {/* 🟣 RIGHT → FORM */}
          <motion.div
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={scrollFadeInVariants}
          >

            <Card className="p-8 rounded-3xl border-pink-100 shadow-lg">

              <h3 className="text-2xl font-semibold mb-6">
                Book Appointment
              </h3>

              <AnimatePresence>

                {submitted ? (
                  <motion.div className="text-center py-6">
                    <p className="text-green-600 font-semibold">
                      Request Sent Successfully
                    </p>
                  </motion.div>
                ) : (

                  <form onSubmit={handleSubmit} className="space-y-4">

                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                    <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
                    <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                    <Input type="date" name="date" value={formData.date} onChange={handleChange} required />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your concern..."
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md"
                    />

                    <Button className="w-full bg-[#c45166] hover:bg-[#b03f57] text-white">
                      Send via WhatsApp
                    </Button>

                  </form>

                )}

              </AnimatePresence>

            </Card>

          </motion.div>

        </div>


        {/* 🔴 MAP (FULL WIDTH BELOW) */}
        <motion.div
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={scrollFadeInVariants}
          className="rounded-3xl overflow-hidden shadow-xl border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0636670103545!2d77.25533967495328!3d28.537805988377112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ae68475fd3%3A0x7335b00add2a4029!2sDr.Priyadarshini%20Ghosh(Advanced%20Gynae%20Care%20Clinic)!5e0!3m2!1sen!2sin!4v1773737951526!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  )
}