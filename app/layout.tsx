import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dr. Priyadarshini Ghosh | Gynecologist & Infertility Specialist in Delhi',
  description: 'Premium gynecology and infertility services in Kalkaji, New Delhi. Expert specialist offering fertility treatment, high-risk pregnancy care, and advanced women\'s healthcare.',
  keywords: 'gynecologist delhi, infertility specialist, fertility treatment, high-risk pregnancy, laparoscopic surgery, endometriosis, kalkaji',
  generator: 'v0.app',

  openGraph: {
    title: 'Dr. Priyadarshini Ghosh - Gynecologist in Delhi',
    description: 'Trusted gynecologist specializing in infertility, fertility treatment, and high-risk pregnancy management in Kalkaji, Delhi.',
    type: 'website',
  },

  // ✅ UPDATED FAVICONS
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
      },
    ],
  },

  // ✅ VERY IMPORTANT
  manifest: '/site.webmanifest',
}

import AppointmentModal from '@/components/appointment-modal'
import { AppointmentModalProvider } from '@/components/appointment-modal-provider'
import { Toaster } from '@/components/ui/toaster'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AppointmentModalProvider>
          {children}
          <AppointmentModal />
          <Toaster />
        </AppointmentModalProvider>
        <Analytics />
      </body>
    </html>
  )
}
