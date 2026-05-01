import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Benefits from '@/components/sections/Benefits'
import Catalog from '@/components/sections/Catalog'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'
import WeatherWidget from '@/components/sections/WeatherWidget'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Benefits />
        <Catalog />
        <Testimonials />
        <WeatherWidget />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
