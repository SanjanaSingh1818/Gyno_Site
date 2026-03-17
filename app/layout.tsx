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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
