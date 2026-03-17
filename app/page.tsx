import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import WhyChoose from '@/components/why-choose'
import AboutDr from '@/components/about-dr'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import AwardsSection from '@/components/AwardsSection'
import Gallery from '@/components/gallery'
import ReachUsSection from '@/components/ReachUsSection'
import Footer from '@/components/footer'
import SchemaMarkup from '@/components/schema-markup'


export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <WhyChoose />
        <AboutDr />
        <Services />
        <Testimonials />
        <AwardsSection />
        <Gallery />
        <ReachUsSection />
        <Footer />
      </main>
    </>
  )
}
