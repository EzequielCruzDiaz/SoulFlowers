import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Catalog from '@/components/sections/Catalog'

export const metadata = {
  title: 'Catálogo — Flores del Alma',
  description: 'Colecciones botánicas artesanales para cada momento especial.',
}

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        {/* Catalog page hero */}
        <div className="pt-32 pb-8 max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mb-20">
            <div className="md:col-span-6 lg:col-span-7">
              <h1 className="font-display-lg text-display-lg text-primary mb-6">
                Botánica Artesanal para los Momentos de la Vida
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Colecciones cultivadas con intención y arregladas con precisión artística en nuestro estudio bañado de sol.
              </p>
            </div>
            <div className="md:col-span-6 lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Arreglo floral en estudio iluminado"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRV6gqtk_YplPYwGpjgo5S-1efT-Q2XADe8zWHHrFTTQgUZypOlvFvrSQcxIRSynraAB-KbvSBvxp9tqFUdqVNHQxQBnWS9gpNJusEPRlvgn0MS3y3fThBlHWMhoJJZOf9BM8RsmDJB4NvA3nYHJxeHFWwxJkHQqYgJad0D09mv-uQLxJcVX1TzI8U10YeHo72R-CIRXyAXhpzDG_x1GOdxo0Al89-fmqEfvC4lfv0n6tNxP057DGRITx1k_XUDlqLN5lN1NZ-SH0"
              />
              <div className="absolute inset-0 botanical-overlay" />
            </div>
          </div>
        </div>

        <Catalog />
      </main>
      <Footer />
    </>
  )
}
