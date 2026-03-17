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

export default function EndometriosisTreatmentPage() {

  const { openModal } = useAppointmentModal()

  return (
    <>
      <Navbar />

      {/* ✅ HERO FIX */}
      <div className="-mt-[72px] sm:-mt-[96px] lg:-mt-[88px]">
        <PageHero
          title="Endometriosis Treatment"
          breadcrumb="Home » Treatments » Endometriosis Treatment"
          backgroundImage="/banner.jpeg"
        />
      </div>

      <div className="py-20 bg-[#faf7fb]">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          {/* 🔴 OVERVIEW WITH IMAGE */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                Understanding Endometriosis
              </h2>

              <p className="text-muted-foreground mb-4">
                Endometriosis is a chronic condition where tissue similar to the uterine lining grows outside the uterus,
                causing pain and affecting fertility.
              </p>

              <p className="text-muted-foreground">
                With early diagnosis and advanced treatment, symptoms can be effectively managed and quality of life improved.
              </p>

              {/* highlights */}
              <div className="mt-6 space-y-3">
                {[
                  'Advanced laparoscopic treatment',
                  'Pain management & fertility care',
                  'Long-term personalized treatment'
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
                src="https://www.obgynecologistnyc.com/wp-content/uploads/2020/06/12diagnosing-endometriosis.jpg"
                alt="Endometriosis"
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
                { icon: Activity, title: 'Diagnosis', desc: 'Scans & laparoscopy for accurate detection.' },
                { icon: Microscope, title: 'Treatment', desc: 'Medication or surgical intervention.' },
                { icon: Heart, title: 'Relief', desc: 'Pain control & improved fertility outcomes.' }
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


  
          {/* 🔴 STAGES */}
<section>
  <h2 className="text-3xl font-semibold mb-8 text-center">
    Stages of Endometriosis
  </h2>

  {/* Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
    {[
      { title: 'Stage 1 (Minimal)', desc: 'Small lesions, minimal scarring' },
      { title: 'Stage 2 (Mild)', desc: 'More lesions, some scarring' },
      { title: 'Stage 3 (Moderate)', desc: 'Many lesions, ovarian involvement' },
      { title: 'Stage 4 (Severe)', desc: 'Extensive lesions, adhesions' }
    ].map((item, i) => (
      <Card key={i} className="border-pink-100 text-center p-6 hover:shadow-md transition">
        <h3 className="font-semibold mb-2">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.desc}</p>
      </Card>
    ))}
  </div>

  {/* 👇 IMAGE BELOW */}
  <div className="relative mx-auto max-w-3xl rounded-3xl overflow-hidden shadow-lg">
    <Image
      src="https://www.patientsengage.com/sites/default/files/patients%20engage%20image31.jpg"
      alt="Stages of Endometriosis"
      width={800}
      height={500}
      className="object-cover w-full h-full"
    />
    {/* subtle overlay */}
    <div className="absolute inset-0 bg-gradient-to-t  to-transparent" />
  </div>
  <p className="text-center text-md text-muted-foreground mt-3">
  Visual representation of progression across stages
</p>
</section>


          {/* 🔴 SYMPTOMS */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Symptoms</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                'Chronic pelvic pain',
                'Painful periods',
                'Pain during intercourse',
                'Heavy bleeding',
                'Infertility',
                'Fatigue',
                'Bowel issues',
                'Back pain'
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
                'Pelvic exam',
                'Ultrasound',
                'MRI scan',
                'Laparoscopy',
                'Biopsy',
                'Blood tests'
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
                <h3 className="text-xl font-semibold mb-4">Medical</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pain medications</li>
                  <li>• Hormonal therapy</li>
                  <li>• GnRH agonists</li>
                  <li>• Progestins</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Surgical</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Laparoscopic excision</li>
                  <li>• Adhesiolysis</li>
                  <li>• Cyst removal</li>
                  <li>• Hysterectomy (rare)</li>
                </ul>
              </div>

            </div>
          </section>


          {/* 🔴 FAQ */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">FAQs</h2>

            <Accordion type="single" collapsible>
              <AccordionItem value="1">
                <AccordionTrigger>Can endometriosis be cured?</AccordionTrigger>
                <AccordionContent>
                  It cannot be fully cured, but symptoms can be effectively managed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>Does it always cause infertility?</AccordionTrigger>
                <AccordionContent>
                  Not always, many women conceive successfully with treatment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>Is surgery safe?</AccordionTrigger>
                <AccordionContent>
                  Yes, laparoscopic surgery is safe and effective.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>


          {/* 🔴 CTA */}
          <section className="bg-white border border-pink-100 rounded-2xl p-10 text-center shadow-sm">

            <h2 className="text-2xl font-semibold mb-3">
              Find Relief from Endometriosis Pain
            </h2>

            <p className="text-muted-foreground mb-6">
              Get expert diagnosis and personalized care.
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