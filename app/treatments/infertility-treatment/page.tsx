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

export default function InfertilityTreatmentPage() {

  const { openModal } = useAppointmentModal()
  return (
    <>
      <Navbar />

      {/* HERO FIX */}
      <div className="-mt-[72px] sm:-mt-[96px] lg:-mt-[88px]">
        <PageHero
          title="Infertility Treatment"
          breadcrumb="Home » Treatments » Infertility Treatment"
          backgroundImage="/banner.jpeg"
        />
      </div>

      <div className="py-20 bg-[#faf7fb]">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          {/* OVERVIEW */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                Understanding Infertility
              </h2>

              <p className="text-muted-foreground mb-4">
                Infertility is the inability to conceive after 12 months of regular unprotected intercourse.
                With the right diagnosis and treatment, many couples successfully achieve pregnancy.
              </p>

              <p className="text-muted-foreground">
                Dr. Priyadarshini Ghosh offers advanced, evidence-based fertility treatments tailored
                to each patient with a compassionate and personalized approach.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Personalized fertility treatment plans',
                  'Advanced IVF & IUI techniques',
                  'High-risk pregnancy expertise'
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
                src="https://fertilityfamily.b-cdn.net/wp-content/uploads/2025/11/7-signs-of-Infertility-in-women-scaled.jpg"
                alt="Infertility treatment"
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
                {
                  icon: Activity,
                  title: 'Diagnosis',
                  desc: 'Detailed tests and evaluation to identify root causes.'
                },
                {
                  icon: Microscope,
                  title: 'Treatment',
                  desc: 'Personalized treatment using advanced techniques.'
                },
                {
                  icon: Heart,
                  title: 'Success',
                  desc: 'Continuous care and support for a healthy pregnancy.'
                }
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


          {/* SYMPTOMS */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Symptoms</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                'Irregular periods',
                'Hormonal imbalance',
                'Pain during intercourse',
                'Weight fluctuations',
                'Excess hair growth',
                'Difficulty conceiving',
                'Recurrent miscarriages',
                'Pelvic infections'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 hover:shadow-md transition">
                  <CardContent className="p-5 text-center text-sm">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>


          {/* CAUSES */}
          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">Female Factors</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• PCOS</li>
                <li>• Endometriosis</li>
                <li>• Tubal blockage</li>
                <li>• Uterine issues</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Male Factors</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Low sperm count</li>
                <li>• Poor motility</li>
                <li>• Hormonal imbalance</li>
                <li>• Lifestyle factors</li>
              </ul>
            </div>
          </section>


          {/* DIAGNOSIS */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Diagnosis</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Hormone Testing',
                'Semen Analysis',
                'Ultrasound',
                'HSG Test',
                'Laparoscopy',
                'Genetic Testing'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 text-center p-6 hover:shadow-md transition">
                  {item}
                </Card>
              ))}
            </div>
          </section>


          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">FAQs</h2>

            <Accordion type="single" collapsible>
              <AccordionItem value="1">
                <AccordionTrigger>Is infertility treatable?</AccordionTrigger>
                <AccordionContent>
                  Yes, most infertility cases can be treated successfully with modern medical approaches.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>How long does treatment take?</AccordionTrigger>
                <AccordionContent>
                  Typically 3–12 months depending on the condition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>Is IVF safe?</AccordionTrigger>
                <AccordionContent>
                  Yes, IVF is a safe and widely used procedure when performed under expert care.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>


          {/* CTA */}
          <section className="bg-white border border-pink-100 rounded-2xl p-10 text-center shadow-sm">

            <h2 className="text-2xl font-semibold mb-3">
              Take the First Step Towards Parenthood
            </h2>

            <p className="text-muted-foreground mb-6">
              Book a consultation and get expert guidance tailored to your journey.
            </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center">

      {/* ✅ BOOK APPOINTMENT → MODAL */}
      <Button
        onClick={openModal}
        className="bg-[#c45166] text-white hover:bg-[#b03f57]"
      >
        <Calendar className="mr-2 h-4 w-4" />
        Book Appointment
      </Button>

      {/* ✅ CALL NOW → DIRECT CALL */}
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
