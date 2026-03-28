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
  Heart,
  AlertTriangle
} from 'lucide-react'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function UterineCancerScreeningPage() {

  const { openModal } = useAppointmentModal()

  return (
    <>
      <Navbar />

      {/* ✅ HERO FIX */}
      <div className="-mt-[72px] sm:-mt-[96px] lg:-mt-[88px]">
        <PageHero
          title="Uterine Cancer Screening"
          breadcrumb="Home » Treatments » Uterine Cancer Screening"
          backgroundImage="/banner.jpeg"
        />
      </div>

      <div className="py-20 bg-[#faf7fb]">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          {/* 🔴 OVERVIEW */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                Early Detection Saves Lives
              </h2>

              <p className="text-muted-foreground mb-4">
                Uterine cancer is one of the most common gynecological cancers,
                but when detected early, treatment outcomes are highly successful.
              </p>

              <p className="text-muted-foreground">
                Regular screening and awareness of symptoms play a key role in
                timely diagnosis and effective treatment.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Early detection improves survival rates',
                  'Personalized treatment planning',
                  'Advanced diagnostic techniques'
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
                src="https://nci-media.cancer.gov/pdq/media/images/618018-750.jpg"
                alt="Uterine cancer screening"
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
                { icon: Activity, title: 'Screening', desc: 'Routine check-ups and tests.' },
                { icon: Shield, title: 'Diagnosis', desc: 'Accurate evaluation and staging.' },
                { icon: Heart, title: 'Treatment', desc: 'Personalized cancer care plan.' }
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


          {/* 🔴 RISK + WARNING SIGNS */}
          <section>
            <h2 className="text-3xl font-semibold text-center mb-10">
              Risk Factors & Warning Signs
            </h2>

            <div className="relative grid md:grid-cols-2 gap-10">

              <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-pink-100"></div>

              {/* LEFT */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="text-[#c45166]" size={18} />
                  Risk Factors
                </h3>

                <ul className="space-y-3 text-muted-foreground">
                  {[
                    'Age above 50',
                    'Obesity or diabetes',
                    'Hormonal imbalance',
                    'Family history',
                    'Late menopause'
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
                <h3 className="text-xl font-semibold">Warning Signs</h3>

                <ul className="space-y-3 text-muted-foreground">
                  {[
                    'Abnormal vaginal bleeding',
                    'Post-menopausal bleeding',
                    'Pelvic pain',
                    'Unexplained weight loss',
                    'Fatigue'
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


          {/* 🔴 SCREENING METHODS */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">
              Screening & Diagnosis
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Pelvic Examination',
                'Transvaginal Ultrasound',
                'Endometrial Biopsy',
                'Hysteroscopy',
                'MRI / CT Scan',
                'Genetic Testing'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 text-center p-6 hover:shadow-md transition">
                  {item}
                </Card>
              ))}
            </div>
          </section>


          {/* 🔴 TREATMENT */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">
              Treatment Options
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Surgery (Hysterectomy)',
                'Radiation Therapy',
                'Chemotherapy & Hormonal Therapy'
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
                <AccordionTrigger>Who should get screened?</AccordionTrigger>
                <AccordionContent>
                  Women above 50 or those with symptoms should consider screening.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>Is uterine cancer curable?</AccordionTrigger>
                <AccordionContent>
                  Yes, especially when detected early.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>What are early signs?</AccordionTrigger>
                <AccordionContent>
                  Abnormal bleeding is the most common early sign.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>


          {/* 🔴 CTA */}
          <section className="bg-white border border-pink-100 rounded-2xl p-10 text-center shadow-sm">

            <h2 className="text-2xl font-semibold mb-3">
              Prioritize Early Screening
            </h2>

            <p className="text-muted-foreground mb-6">
              Early diagnosis leads to better outcomes and peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button
                onClick={openModal}
                className="bg-[#c45166] text-white hover:bg-[#b03f57]"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Screening
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