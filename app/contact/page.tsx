import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Contact Us"
        breadcrumb="Home » Contact"
        backgroundImage="/banner.png"
      />
      <Contact />
      <Footer />
    </>
  )
}