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

export default function FibroidsTreatmentPage() {

  const { openModal } = useAppointmentModal()

  return (
    <>
      <Navbar />

      {/* ✅ HERO FIX */}
      <div className="-mt-[72px] sm:-mt-[96px] lg:-mt-[88px]">
        <PageHero
          title="Fibroids Treatment"
          breadcrumb="Home » Treatments » Fibroids Treatment"
          backgroundImage="/banner.jpeg"
        />
      </div>

      <div className="py-20 bg-[#faf7fb]">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          {/* 🔴 OVERVIEW WITH IMAGE */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                Understanding Uterine Fibroids
              </h2>

              <p className="text-muted-foreground mb-4">
                Uterine fibroids are non-cancerous growths that develop in or around the uterus.
                Many women experience no symptoms, while others may face pain, heavy bleeding, or fertility issues.
              </p>

              <p className="text-muted-foreground">
                With modern minimally invasive techniques, fibroids can be treated effectively
                with faster recovery and better outcomes.
              </p>

              {/* highlights */}
              <div className="mt-6 space-y-3">
                {[
                  'Minimally invasive treatments',
                  'Fertility-preserving options',
                  'Personalized care plans'
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
                src="https://brooklyngynplace.com/wp-content/uploads/2017/12/uterine-fibroids.jpg"
                alt="Fibroids"
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
                { icon: Activity, title: 'Diagnosis', desc: 'Accurate scans & evaluation.' },
                { icon: Microscope, title: 'Treatment', desc: 'Medical or surgical care.' },
                { icon: Heart, title: 'Recovery', desc: 'Quick healing & follow-up care.' }
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
                'Heavy bleeding',
                'Pelvic pain',
                'Frequent urination',
                'Constipation',
                'Back pain',
                'Infertility',
                'Miscarriage',
                'Abdominal swelling'
              ].map((item, i) => (
                <Card key={i} className="border-pink-100 hover:shadow-md transition">
                  <CardContent className="p-5 text-center text-sm">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>


          {/* 🔴 TYPES */}
 <section>
  <h2 className="text-3xl font-semibold mb-6">Types of Fibroids</h2>

  {/* cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
    {[
      { title: 'Intramural', desc: 'Inside uterine wall' },
      { title: 'Submucosal', desc: 'Inside cavity' },
      { title: 'Subserosal', desc: 'Outside uterus' },
      { title: 'Pedunculated', desc: 'Attached by stalk' }
    ].map((item, i) => (
      <Card key={i} className="border-pink-100">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </CardContent>
      </Card>
    ))}
  </div>

  {/* 👇 IMAGE BELOW */}
  <div className="relative mx-auto max-w-3xl rounded-3xl overflow-hidden shadow-lg">
    <Image
      src="https://fibroidexpert.com/wp-content/uploads/2025/07/Four-Types-of-Fibroids-and-Their-Location.jpg"
      alt="Types of fibroids illustration"
      width={800}
      height={500}
      className="object-cover w-full h-full"
    />

    {/* soft overlay */}
    <div className="absolute inset-0 bg-gradient-to-t  to-transparent" />
  </div>

  {/* optional caption */}
  <p className="text-center text-sm text-muted-foreground mt-3">
    Visual representation of different types of uterine fibroids
  </p>
</section>


          {/* 🔴 DIAGNOSIS */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Diagnosis</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Ultrasound',
                'MRI Scan',
                'Hysteroscopy',
                'Sonography',
                'CT Scan',
                'Blood Tests'
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
                  <li>• Hormonal therapy</li>
                  <li>• GnRH medications</li>
                  <li>• Pain relief</li>
                  <li>• Bleeding control</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Surgical</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Laparoscopic myomectomy</li>
                  <li>• Hysteroscopy</li>
                  <li>• Embolization</li>
                  <li>• Hysterectomy</li>
                </ul>
              </div>

            </div>
          </section>


          {/* 🔴 FAQ */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">FAQs</h2>

            <Accordion type="single" collapsible>
              <AccordionItem value="1">
                <AccordionTrigger>Do fibroids always need treatment?</AccordionTrigger>
                <AccordionContent>No, only symptomatic cases require treatment.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>Can fibroids affect pregnancy?</AccordionTrigger>
                <AccordionContent>Yes, depending on size and location.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>Is surgery safe?</AccordionTrigger>
                <AccordionContent>Yes, modern techniques are safe and effective.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>


          {/* 🔴 CTA */}
          <section className="bg-white border border-pink-100 rounded-2xl p-10 text-center shadow-sm">

            <h2 className="text-2xl font-semibold mb-3">
              Get Relief from Fibroid Symptoms
            </h2>

            <p className="text-muted-foreground mb-6">
              Consult Dr. Priyadarshini for personalized treatment.
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