import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import Services from '@/components/services'
import Footer from '@/components/footer'

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Treatments"
        breadcrumb="Home » Treatments"
        backgroundImage="/images/hero-bg.jpg"
      />
      <Services />
      <Footer />
    </>
  )
}