import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import SeasonalCollections from '@/components/sections/SeasonalCollections'
import Process from '@/components/sections/Process'
import Deliveries from '@/components/sections/Deliveries'
import Newsletter from '@/components/sections/Newsletter'
import ContactForm from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <SeasonalCollections />
        <Process />
        <Deliveries />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
