import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import FAQs from '@/components/faqs'
import Footer from '@/components/footer'

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Frequently Asked Questions"
        breadcrumb="Home » FAQs"
        backgroundImage="/banner.png"
      />
      <FAQs />
      <Footer />
    </>
  )
}