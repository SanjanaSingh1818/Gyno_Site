'use client'

import Image from "next/image";
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, Mail, Youtube, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAppointmentModal } from '@/components/appointment-modal-provider'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)
  const { openModal } = useAppointmentModal()

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Treatments',
      children: [
        { label: 'Infertility Treatment', href: '/treatments/infertility-treatment' },
        { label: 'High Risk Pregnancy', href: '/treatments/high-risk-pregnancy' },
        { label: 'Fibroids', href: '/treatments/fibroids-treatment' },
        { label: 'Ovarian Cyst', href: '/treatments/ovarian-cyst-treatment' },
        { label: 'Endometriosis', href: '/treatments/endometriosis-treatment' },
        { label: 'Heavy Menstrual Bleeding', href: '/treatments/heavy-menstrual-bleeding' },
        { label: 'Laparoscopic Gynecology', href: '/treatments/laparoscopic-gynecology' },
        { label: 'Uterine Cancer Screening', href: '/treatments/uterine-cancer-screening' },
      ],
    },
    { label: 'Media Coverage', href: '/media-coverage' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ]

  const linkTextClass = 'text-sm font-medium text-foreground hover:text-[#C95A6A] transition-colors'
  const dropdownItemClass =
    'block px-4 py-2 text-sm text-foreground hover:bg-[#F6E9EC] hover:text-[#C95A6A] transition-colors'

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >

        {/* TOP BAR */}
        <div className="hidden sm:block bg-[#c45166] text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-6">
                <a href="tel:+918595274949" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91-8595274949
                </a>

                <a href="mailto:advancedgynaecare@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  advancedgynaecare@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/advancedgynaecare" target="_blank">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-20">

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image src="/logo.webp" alt="logo" width={200} height={60} />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-6">
                {menuItems.map((item) => {

                  if (item.children) {
                    return (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setTreatmentsOpen(true)}
                        onMouseLeave={() => setTreatmentsOpen(false)}
                      >
                        <button
                          onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                          className={`${linkTextClass} flex items-center gap-1`}
                        >
                          {item.label}
                          <ChevronDown className="h-4 w-4" />
                        </button>

                        {/* 👇 INVISIBLE HOVER BRIDGE (IMPORTANT FIX) */}
                        <div className="absolute left-0 top-full w-full h-4" />

                        {/* DROPDOWN */}
                        {treatmentsOpen && (
                          <div className="absolute left-0 top-[calc(100%+8px)] w-64 bg-white border rounded-xl shadow-xl py-2 z-50">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={dropdownItemClass}
                                onClick={() => setTreatmentsOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }

                  return (
                    <Link key={item.label} href={item.href} className={linkTextClass}>
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="hidden lg:flex">
                <button
                  onClick={openModal}
                  className="bg-[#c45166] text-white px-5 py-2 rounded-lg"
                >
                  Book Appointment
                </button>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden"
              >
                {isOpen ? <X /> : <Menu />}
              </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="lg:hidden py-4 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href || '#'}
                    className="block px-3 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <button
                  onClick={() => {
                    openModal()
                    setIsOpen(false)
                  }}
                  className="w-full bg-[#c45166] text-white py-2 rounded-lg"
                >
                  Book Appointment
                </button>
              </div>
            )}

          </div>
        </div>

      </motion.nav>

      {/* SPACER */}
      <div className="h-[72px] sm:h-[96px] lg:h-[88px]" />
    </>
  )
}