import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import MediaCoverage from '@/components/media-coverage'
import Footer from '@/components/footer'

export default function MediaCoveragePage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Media Coverage"
        breadcrumb="Home » Media Coverage"
        backgroundImage="/banner.png"
      />
      <MediaCoverage />
      <Footer />
    </>
  )
}