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

import { Phone, Calendar, CheckCircle, Activity, Microscope, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OvarianCystTreatmentPage() {

  const { openModal } = useAppointmentModal()

  return (
    <>
      <Navbar />

      {/* ✅ HERO FIX */}
      <div className="-mt-[72px] sm:-mt-[96px] lg:-mt-[88px]">
        <PageHero
          title="Ovarian Cyst Treatment"
          breadcrumb="Home » Treatments » Ovarian Cyst Treatment"
          backgroundImage="/banner.jpeg"
        />
      </div>

      <div className="py-20 bg-[#faf7fb]">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          {/* 🔴 OVERVIEW WITH IMAGE */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                Understanding Ovarian Cysts
              </h2>

              <p className="text-muted-foreground mb-4">
                Ovarian cysts are fluid-filled sacs that develop on or within the ovaries.
                Most are harmless, but some may require treatment to prevent complications.
              </p>

              <p className="text-muted-foreground">
                Early diagnosis and advanced laparoscopic treatment ensure effective care
                while preserving fertility.
              </p>

              {/* highlights */}
              <div className="mt-6 space-y-3">
                {[
                  'Advanced laparoscopic treatment',
                  'Fertility preservation focus',
                  'Accurate diagnosis & monitoring'
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
                src="https://aogc.com.sg/wp-content/uploads/2025/10/Ovarian-Cyst-d.jpg"
                alt="Ovarian cyst"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

          </section>


          {/* 🔴 STEP FLOW */}
          <section>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Your Treatment Journey
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                { icon: Activity, title: 'Diagnosis', desc: 'Ultrasound & tests to identify cyst type.' },
                { icon: Microscope, title: 'Treatment', desc: 'Medication or minimally invasive surgery.' },
                { icon: Heart, title: 'Recovery', desc: 'Quick healing with follow-up care.' }
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


          {/* 🔴 TYPES */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Types of Ovarian Cysts</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Functional cysts',
                'Dermoid cysts',
                'Cystadenomas',
                'Endometriomas',
                'Polycystic ovaries',
                'Hemorrhagic cysts'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 text-center p-6 hover:shadow-md transition">
                  {item}
                </Card>
              ))}
            </div>
          </section>


          {/* 🔴 SYMPTOMS */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Symptoms</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                'Pelvic pain',
                'Bloating',
                'Irregular periods',
                'Pain during intercourse',
                'Frequent urination',
                'Nausea',
                'Sudden severe pain',
                'Fever'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 hover:shadow-md transition">
                  <CardContent className="p-5 text-center text-sm">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>


          {/* 🔴 DIAGNOSIS */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Diagnosis</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Pelvic ultrasound',
                'MRI scan',
                'CT scan',
                'Blood tests',
                'Laparoscopy',
                'Doppler ultrasound'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 text-center p-6 hover:shadow-md transition">
                  {item}
                </Card>
              ))}
            </div>
          </section>


          {/* 🔴 TREATMENT */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Treatment Options</h2>

            <div className="grid md:grid-cols-2 gap-10">

              <div>
                <h3 className="text-xl font-semibold mb-4">Conservative</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Watchful waiting</li>
                  <li>• Hormonal therapy</li>
                  <li>• Pain management</li>
                  <li>• Regular monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Surgical</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Laparoscopic cystectomy</li>
                  <li>• Ovary-sparing surgery</li>
                  <li>• Oophorectomy (rare)</li>
                  <li>• Emergency treatment</li>
                </ul>
              </div>

            </div>
          </section>


          {/* 🔴 FAQ */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">FAQs</h2>

            <Accordion type="single" collapsible>
              <AccordionItem value="1">
                <AccordionTrigger>Do all cysts need surgery?</AccordionTrigger>
                <AccordionContent>
                  No, many cysts resolve naturally without treatment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>Is laparoscopy safe?</AccordionTrigger>
                <AccordionContent>
                  Yes, it is safe with faster recovery and minimal pain.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>Can cysts affect fertility?</AccordionTrigger>
                <AccordionContent>
                  Some cysts can affect fertility, but treatment helps preserve it.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>


          {/* 🔴 CTA */}
          <section className="bg-white border border-pink-100 rounded-2xl p-10 text-center shadow-sm">

            <h2 className="text-2xl font-semibold mb-3">
              Concerned About Ovarian Cysts?
            </h2>

            <p className="text-muted-foreground mb-6">
              Get expert evaluation and personalized care.
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