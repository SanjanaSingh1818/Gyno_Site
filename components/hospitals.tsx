'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/use-in-view'
import { scrollFadeInVariants, cardItemVariants, cardContainerVariants } from '@/lib/animation-variants'

const hospitals = [
  {
    name: 'Apollo Cradle',
    location: 'Panchsheel Enclave, Delhi',
    specialization: 'Women\'s & Child Healthcare'
  },
  {
    name: 'Fortis La Femme',
    location: 'Greater Kailash 2, Delhi',
    specialization: 'Specialty Women\'s Hospital'
  },
  {
    name: 'Cloud Nine',
    location: 'East of Kailash, Delhi',
    specialization: 'Fertility & Maternity Care'
  },
  {
    name: 'Clinic Office',
    location: 'L23, Kalkaji, New Delhi',
    specialization: 'Direct Patient Consultations'
  },
]

export default function Hospitals() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="hospitals" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={scrollFadeInVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">Associated Hospitals</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practicing at premier healthcare facilities across Delhi
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={cardContainerVariants}
        >
          {hospitals.map((hospital, index) => (
            <motion.div key={index} variants={cardItemVariants} whileHover={{ y: -8 }}>
              <Card className="p-6 border-border/50 bg-white h-full">
                <motion.div
                  className="text-3xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  🏥
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {hospital.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  📍 {hospital.location}
                </p>
                <p className="text-sm font-medium text-secondary">
                  {hospital.specialization}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
