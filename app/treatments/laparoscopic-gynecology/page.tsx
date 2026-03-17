'use client'

import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import { useAppointmentModal } from '@/components/appointment-modal-provider'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import {
  Phone,
  Calendar,
  CheckCircle,
  Activity,
  Shield,
  Heart
} from 'lucide-react'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LaparoscopicGynecologyPage() {

  const { openModal } = useAppointmentModal()

  return (
    <>
      <Navbar />

      {/* ✅ HERO FIX */}
      <div className="-mt-[72px] sm:-mt-[96px] lg:-mt-[88px]">
        <PageHero
          title="Laparoscopic Gynecology"
          breadcrumb="Home » Treatments » Laparoscopic Gynecology"
          backgroundImage="/banner.jpeg"
        />
      </div>

      <div className="py-20 bg-[#faf7fb]">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          {/* 🔴 OVERVIEW WITH IMAGE */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                Minimally Invasive Surgery
              </h2>

              <p className="text-muted-foreground mb-4">
                Laparoscopic gynecology allows complex surgeries through small incisions,
                ensuring faster recovery, minimal pain, and better outcomes.
              </p>

              <p className="text-muted-foreground">
                Advanced techniques combined with precision ensure safe and effective
                treatment for various gynecological conditions.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Smaller incisions & minimal scars',
                  'Faster recovery time',
                  'Reduced pain & hospital stay'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-[#c45166]" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://sukhipariwarclinic.com.np/wp-content/uploads/2024/08/Understanding-Laparoscopic-Gynecological-Surgeries-Benefits-Procedures-and-Recovery.png"
                alt="Laparoscopic surgery"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

          </section>


          {/* 🔴 STEP FLOW */}
          <section>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Your Surgical Journey
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                { icon: Activity, title: 'Evaluation', desc: 'Detailed diagnosis and planning.' },
                { icon: Shield, title: 'Procedure', desc: 'Minimally invasive surgery.' },
                { icon: Heart, title: 'Recovery', desc: 'Faster healing & follow-up care.' }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="text-center bg-white p-8 rounded-2xl shadow-md border border-pink-100"
                >
                  <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-[#c45166]/10">
                    <step.icon className="text-[#c45166]" />
                  </div>

                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}

            </div>
          </section>


          {/* 🔴 PROCEDURES */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">
              Procedures We Offer
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Laparoscopic Hysterectomy',
                'Myomectomy (Fibroid Removal)',
                'Ovarian Cystectomy',
                'Endometriosis Excision',
                'Adhesiolysis',
                'Tubal Surgery'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 hover:shadow-md transition">
                  <CardContent className="p-5 text-center text-sm">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>


          {/* 🔴 BENEFITS + TECHNOLOGY */}
          <section>
            <h2 className="text-3xl font-semibold text-center mb-10">
              Benefits & Technology
            </h2>

            <div className="relative grid md:grid-cols-2 gap-10">

              {/* center line */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-pink-100"></div>

              {/* LEFT */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Benefits</h3>

                <ul className="space-y-3 text-muted-foreground">
                  {[
                    'Minimal scarring',
                    'Less pain after surgery',
                    'Quick return to routine',
                    'Reduced infection risk',
                    'Short hospital stay'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#c45166]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT */}
              <div className="space-y-4 md:pl-6">
                <h3 className="text-xl font-semibold">Technology Used</h3>

                <ul className="space-y-3 text-muted-foreground">
                  {[
                    'HD laparoscopic cameras',
                    'Advanced surgical instruments',
                    'Robotic-assisted techniques',
                    'Precision energy devices',
                    'Modern operation theatres'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#c45166]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>


          {/* 🔴 RECOVERY */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">
              Recovery & Aftercare
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                '1–2 days hospital stay',
                'Resume work in 1–2 weeks',
                'Complete recovery in 4–6 weeks'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 text-center p-6">
                  {item}
                </Card>
              ))}
            </div>
          </section>


          {/* 🔴 FAQ */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">FAQs</h2>

            <Accordion type="single" collapsible>
              <AccordionItem value="1">
                <AccordionTrigger>Is laparoscopic surgery safe?</AccordionTrigger>
                <AccordionContent>
                  Yes, it is safe and widely used with excellent outcomes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>Will there be scars?</AccordionTrigger>
                <AccordionContent>
                  Scars are minimal and usually barely visible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>How fast is recovery?</AccordionTrigger>
                <AccordionContent>
                  Most patients recover within 1–2 weeks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>


          {/* 🔴 CTA */}
          <section className="bg-white border border-pink-100 rounded-2xl p-10 text-center shadow-sm">

            <h2 className="text-2xl font-semibold mb-3">
              Choose Advanced Surgical Care
            </h2>

            <p className="text-muted-foreground mb-6">
              Experience safer, faster, and more effective treatment options.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button
                onClick={openModal}
                className="bg-[#c45166] text-white hover:bg-[#b03f57]"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>

              <Button
                variant="outline"
                onClick={() => window.location.href = 'tel:+919910391381'}
                className="border-[#c45166] text-[#c45166] hover:bg-[#c45166] hover:text-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>

            </div>

          </section>

        </div>
      </div>
    </>
  )
}