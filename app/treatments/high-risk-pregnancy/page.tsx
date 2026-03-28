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

import { Phone, Calendar, CheckCircle, Activity, Heart, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HighRiskPregnancyPage() {

  const { openModal } = useAppointmentModal()

  return (
    <>
      <Navbar />

      {/* ✅ HERO FIX */}
      <div className="-mt-[72px] sm:-mt-[96px] lg:-mt-[88px]">
        <PageHero
          title="High Risk Pregnancy Care"
          breadcrumb="Home » Treatments » High Risk Pregnancy"
          backgroundImage="/banner.jpeg"
        />
      </div>

      <div className="py-20 bg-[#faf7fb]">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          {/* 🔴 OVERVIEW */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                High Risk Pregnancy Care
              </h2>

              <p className="text-muted-foreground mb-4">
                A high-risk pregnancy involves conditions that may affect the health of the mother or baby.
                With expert monitoring and timely care, most pregnancies result in healthy outcomes.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Advanced maternal & fetal monitoring',
                  'Personalized treatment plans',
                  'Emergency care support'
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
                src="https://emi.parkview.com/media/Image/Dashboard_835_maternal_fetal_medicine_10_23.jpeg"
                alt="High risk pregnancy"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

          </section>


          {/* 🔴 STEP FLOW */}
          <section>
            <h2 className="text-3xl font-semibold text-center mb-12">
              Your Pregnancy Care Journey
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                { icon: Activity, title: 'Monitoring', desc: 'Regular scans and check-ups.' },
                { icon: Shield, title: 'Management', desc: 'Medical support & treatment.' },
                { icon: Heart, title: 'Safe Delivery', desc: 'Healthy mother & baby outcome.' }
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


{/* 🔴 RISK FACTORS + CAUSES (ENHANCED SPLIT SECTION) */}
<section>
  <h2 className="text-3xl font-semibold mb-10 text-center">
    Risk Factors & Causes
  </h2>

  {/* ✅ IMPORTANT: relative added */}
  <div className="relative grid md:grid-cols-2 gap-10 items-start">

    {/* ✅ CENTER DIVIDER */}
    <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-pink-100"></div>

    {/* LEFT → FACTORS */}
    <div className="space-y-4">

      <h3 className="text-xl font-semibold">Risk Factors</h3>

      <ul className="space-y-3 text-muted-foreground">
        {[
          'Age above 35 years',
          'Pre-existing diabetes or hypertension',
          'Multiple pregnancy (twins/triplets)',
          'Previous pregnancy complications',
          'Placental abnormalities',
          'Lifestyle factors (stress, nutrition)'
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#c45166] mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>

    </div>

    {/* RIGHT → CAUSES + SOLUTIONS */}
    <div className="space-y-6 md:pl-10">

      {/* causes */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Common Causes</h3>

        <ul className="space-y-3 text-muted-foreground">
          {[
            'Hormonal imbalances',
            'Chronic medical conditions',
            'Infections or uterine issues',
            'Genetic or fetal abnormalities'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#c45166] mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* solutions */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Our Approach</h3>

        <ul className="space-y-3 text-muted-foreground">
          {[
            'Regular monitoring & early detection',
            'Personalized medical treatment',
            'Nutritional & lifestyle guidance',
            'Close supervision during delivery'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#c45166] mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>

  </div>
</section>


          {/* 🔴 MONITORING */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Advanced Monitoring</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Ultrasound Scans',
                'Doppler Studies',
                'NST & CTG',
                'Blood Pressure Monitoring',
                'Blood Tests',
                'Genetic Screening'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 text-center p-6 hover:shadow-md transition">
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
                <AccordionTrigger>What makes a pregnancy high-risk?</AccordionTrigger>
                <AccordionContent>
                  Conditions like age, diabetes, or complications can make pregnancy high-risk.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>How frequent are check-ups?</AccordionTrigger>
                <AccordionContent>
                  Usually weekly or bi-weekly depending on your condition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>Is normal delivery possible?</AccordionTrigger>
                <AccordionContent>
                  Yes, many high-risk pregnancies still have normal deliveries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>


          {/* 🔴 CTA (UPDATED SAME AS OTHER PAGE) */}
          <section className="bg-white border border-pink-100 rounded-2xl p-10 text-center shadow-sm">

            <h2 className="text-2xl font-semibold mb-3">
              Need Specialized Pregnancy Care?
            </h2>

            <p className="text-muted-foreground mb-6">
              Get expert guidance for a safe and healthy pregnancy journey.
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