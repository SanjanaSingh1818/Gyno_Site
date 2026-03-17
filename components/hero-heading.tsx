'use client'

import Image from 'next/image'

export default function HeroHeading() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-playfair font-semibold leading-tight">
            Dr. Priyadarshini Ghosh - Best Lady Gynecologist in Kolkata
          </h1>
          <div className="mt-4 mx-auto h-0.5 w-32 rounded-full bg-[#c45166]" />
          <p className="mt-6 text-lg text-muted-foreground">High Risk Pregnancy Expert In Kolkata</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              Dr. Priyadarshini Ghosh is the chief gynecologist, obstetrician & laparoscopic surgeon at RG Stone Urology & Laparoscopy Hospital. She is regarded as one of the most trusted lady gynecologists in Kolkata.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              After completing her MBBS from Calcutta National Medical College with honours in Gynecology, she pursued DGO from Chittaranjan Seva Sadan & Calcutta Medical College. She began her professional journey as Registrar in Gynaecology at Woodlands Hospital, Alipore.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              With a strong passion for compassionate care, Dr. Priyadarshini focuses on providing personalized treatment plans and is fluent in Bengali, English & Hindi.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 h-16 w-16 border-t-2 border-l-2 border-[#1d4ed8]" />
            <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-[#1d4ed8]" />
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/dr"
                alt="Dr. Priyadarshini Ghosh"
                width={700}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
