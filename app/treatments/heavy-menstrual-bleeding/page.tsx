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
  Heart,
  Shield
} from 'lucide-react'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeavyMenstrualBleedingPage() {

  const { openModal } = useAppointmentModal()

  return (
    <>
      <Navbar />

      {/* ✅ HERO FIX */}
      <div className="-mt-[72px] sm:-mt-[96px] lg:-mt-[88px]">
        <PageHero
          title="Heavy Menstrual Bleeding"
          breadcrumb="Home » Treatments » Heavy Menstrual Bleeding"
          backgroundImage="/banner.jpeg"
        />
      </div>

      <div className="py-20 bg-[#faf7fb]">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          {/* 🔴 OVERVIEW WITH IMAGE */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                Understanding Heavy Periods
              </h2>

              <p className="text-muted-foreground mb-4">
                Heavy menstrual bleeding (menorrhagia) can disrupt daily life,
                causing fatigue, anemia, and emotional stress.
              </p>

              <p className="text-muted-foreground">
                With the right diagnosis and treatment, symptoms can be effectively
                managed and menstrual health restored.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Accurate diagnosis of root cause',
                  'Personalized treatment plans',
                  'Advanced minimally invasive care'
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
                src="https://thumbs.dreamstime.com/b/heavy-menstrual-bleeding-menorrhagia-flashcard-illustration-explaining-left-female-reproductive-system-labeled-fallopian-401601375.jpg"
                alt="Heavy menstrual bleeding"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

          </section>


          {/* 🔴 STEP FLOW */}
          <section>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Your Care Journey
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                { icon: Activity, title: 'Diagnosis', desc: 'Identify underlying causes through tests.' },
                { icon: Shield, title: 'Treatment', desc: 'Personalized medical or procedural care.' },
                { icon: Heart, title: 'Relief', desc: 'Improved cycle and better quality of life.' }
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


          {/* 🔴 SYMPTOMS */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Symptoms</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                'Bleeding more than 7 days',
                'Frequent pad/tampon changes',
                'Large blood clots',
                'Fatigue & anemia',
                'Irregular bleeding',
                'Pain during periods',
                'Weakness or dizziness',
                'Disrupted daily routine'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 hover:shadow-md transition">
                  <CardContent className="p-5 text-center text-sm">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>


          {/* 🔴 CAUSES + SOLUTIONS */}
          <section>
            <h2 className="text-3xl font-semibold text-center mb-10">
              Causes & Treatment Approach
            </h2>

            <div className="relative grid md:grid-cols-2 gap-10">

              {/* center line */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-pink-100"></div>

              {/* LEFT */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Common Causes</h3>

                <ul className="space-y-3 text-muted-foreground">
                  {[
                    'Hormonal imbalance',
                    'Fibroids or polyps',
                    'Thyroid disorders',
                    'PCOS or ovulatory issues',
                    'Medications or lifestyle factors'
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
                <h3 className="text-xl font-semibold">Our Approach</h3>

                <ul className="space-y-3 text-muted-foreground">
                  {[
                    'Detailed evaluation & diagnosis',
                    'Medication & hormonal therapy',
                    'Minimally invasive procedures',
                    'Lifestyle & nutritional guidance',
                    'Long-term monitoring & care'
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


          {/* 🔴 FAQ */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">FAQs</h2>

            <Accordion type="single" collapsible>
              <AccordionItem value="1">
                <AccordionTrigger>What causes heavy periods?</AccordionTrigger>
                <AccordionContent>
                  Hormonal imbalance, fibroids, and medical conditions are common causes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>Is it serious?</AccordionTrigger>
                <AccordionContent>
                  It may not always be serious but requires evaluation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>Can it be treated without surgery?</AccordionTrigger>
                <AccordionContent>
                  Yes, many cases are treated with medications and non-surgical methods.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>


          {/* 🔴 CTA */}
          <section className="bg-white border border-pink-100 rounded-2xl p-10 text-center shadow-sm">

            <h2 className="text-2xl font-semibold mb-3">
              Take Control of Your Menstrual Health
            </h2>

            <p className="text-muted-foreground mb-6">
              Get expert care and personalized treatment today.
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
                onClick={() => window.location.href = 'tel:+918595274949'}
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