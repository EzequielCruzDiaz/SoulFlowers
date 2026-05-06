import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const SIZES = [
  { label: 'Standard', price: 'RD$ 2,800' },
  { label: 'Deluxe',   price: 'RD$ 3,750' },
  { label: 'Premium',  price: 'RD$ 4,750' },
]

const CARE = [
  {
    icon: 'water_drop',
    title: 'Hidratación',
    description: 'Corta los tallos en ángulo de 45° cada dos días y cambia el agua fría para maximizar la vida de las flores.',
  },
  {
    icon: 'light_mode',
    title: 'Luz y Aire',
    description: 'Coloca el arreglo en un lugar fresco, lejos de la luz solar directa, ventiladores y frutas maduras.',
  },
  {
    icon: 'content_cut',
    title: 'Poda',
    description: 'Retira las hojas que queden bajo el agua para evitar bacterias y mantener el agua cristalina.',
  },
]

export default function ProductDetailPage() {
  return (
    <>
      <Header />
      <main id="contenido" className="max-w-container-max mx-auto px-margin-desktop py-16">

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ── Bento Gallery ── */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {/* Main wide image */}
            <div className="col-span-2 relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-container-low group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBMlepaMGlSLsRmUjYKleePoju8dIMpNP0ZYX1FJMaYVQ4U5myM1hDGzMFUAbHIlTeqZg6XNF-iaLUfEEX-3RDUTeKJ6k-1Sa1ilxAfxuDKIfZFIZtDBCxPzhFQxIrUotqEf0TUtzWUuXhq0KTApGD3AkgdmUIrhILsv9qODxl3o9n4D665Kj3HVjGvu1xnaWZJTwDndoOZ0tAXRQ4YyECDtnCZu5PUtYo9uO675fLYZUBAu4e0-KxZAxfQVpiKq5nKP3BdUJ_cQ"
                alt="Arreglo Aurora Boreal con ranúnculos y eucalipto"
              />
              <div className="absolute inset-0 linen-texture pointer-events-none opacity-30" />
            </div>

            {/* Secondary images */}
            {[
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj8a--H6nrdp3XMmv5t_NIsBzaP8DVNGnFvYEiPF68GPA89a9d6OQHVy_V-gSaxhbQrXuaos6L9IudZhi1tAIeINxqCDpY5joPGLjt1dcs4W0tJkyxaVjsEsEMDAKs-RgeKys0lRrvDbNOICfv22rjZdrPlkIKvK_2wyU7KyuRzMOMSkKMi8KMmQoUOzVnmHJIeA49uBG7S_0wYnhm9jfnO-GZw2HJHriuNc3SwrzyZ6iLuUHVBhQoooD2fYCgQ3aFhbrNkqkoq-0',
                alt: 'Tallos de eucalipto plateado sobre superficie de lino',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe_qG2R_6rH90jOlROBgakMZs7cJWIM8KwyKz-w3n9sT7WK5o9cm1d14eUCJRAI5Mr17ZpirwPwqBVZPS2WNRSS8DGyDP9XCZfJeSBzsjoqnAzh9G24z4b_ETzhPhQWUFq9SpS9Am86ZV5sloog25tXQsvxvFwbzEXEpqE8U1R3CWHX8j9CCfVnDCugaWDi7I2N8KnWIcy2bptpTZPA4bVK724HZN9m-4Sdd86glKkrbsy0PUIFI8VUrGjPqKEbfdrkrrJAjBh51g',
                alt: 'Pétalos de ranúnculo en tonos crema y rubor',
              },
            ].map(({ src, alt }) => (
              <div key={alt} className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src={src}
                  alt={alt}
                />
                <div className="absolute inset-0 linen-texture pointer-events-none opacity-30" />
              </div>
            ))}
          </div>

          {/* ── Product Info (sticky) ── */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-28">

            {/* Breadcrumb */}
            <nav className="flex gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              <Link href="/catalog" className="hover:text-primary transition-colors">Catálogo</Link>
              <span>/</span>
              <span>Colecciones de Temporada</span>
            </nav>

            <div>
              <h1 className="font-display-lg text-display-lg text-primary mb-3">Aurora Boreal</h1>
              <p className="font-headline-md text-headline-md text-on-surface">RD$ 2,800 — RD$ 4,750</p>
            </div>

            <div className="space-y-6">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Inspirado en la danza etérea de las auroras boreales, este arreglo artesanal combina ranúnculos premium y eucalipto aromático. Una composición celestial para quienes aprecian la belleza natural del mundo vegetal.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Temporada', 'Artesanal', 'Follaje Premium'].map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-surface-container border border-outline-variant font-label-sm text-label-sm rounded-full text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="space-y-4">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block">
                Seleccionar Tamaño
              </span>
              <div className="grid grid-cols-3 gap-3">
                {SIZES.map(({ label, price }, i) => (
                  <button
                    key={label}
                    type="button"
                    className={`flex flex-col items-center justify-center py-5 rounded-xl transition-all border ${
                      i === 0
                        ? 'border-2 border-primary bg-primary-container text-primary-fixed shadow-sm'
                        : 'border-outline-variant hover:border-primary bg-surface text-primary'
                    }`}
                  >
                    <span className="font-label-sm text-label-sm">{label}</span>
                    <span className="text-[11px] opacity-80 mt-1">{price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message card */}
            <div className="space-y-4">
              <label
                htmlFor="card-message"
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block"
              >
                Tarjeta Personalizada
              </label>
              <textarea
                id="card-message"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full bg-surface-container border-none focus:ring-1 focus:ring-primary text-body-md rounded-2xl p-5 resize-none placeholder:text-outline outline-none transition-all"
              />
            </div>

            {/* CTA */}
            <Link
              href="/checkout"
              className="w-full py-5 bg-primary text-on-primary font-headline-md text-headline-md rounded-2xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg shadow-primary/10"
            >
              <span className="material-symbols-outlined text-[20px]">local_mall</span>
              Añadir a la Colección
            </Link>

            {/* Trust badges */}
            <div className="pt-10 border-t border-outline-variant/30 space-y-5">
              {[
                { icon: 'eco',            text: 'Cultivado de forma sostenible con productores locales' },
                { icon: 'delivery_dining', text: 'Entrega el mismo día disponible en áreas metropolitanas' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4 text-on-surface-variant">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
                  </div>
                  <span className="font-label-sm text-label-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Care & Longevity ── */}
        <section className="mt-32 bg-surface-container rounded-[40px] p-16 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-primary-container opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
          />
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-12 border-b border-outline-variant pb-6">
              Cuidado y Longevidad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {CARE.map(({ icon, title, description }) => (
                <div key={title} className="space-y-6">
                  <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-[28px]">{icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary">{title}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
