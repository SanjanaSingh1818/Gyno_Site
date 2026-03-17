import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
