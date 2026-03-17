import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import About from '@/components/about'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="About Dr. Priyadarshini Ghosh"
        breadcrumb="Home » About"
        backgroundImage="/banner.png"
      />
      <About />
      <Footer />
    </>
  )
}