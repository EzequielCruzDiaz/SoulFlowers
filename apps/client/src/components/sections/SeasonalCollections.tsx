import Link from 'next/link'
import { PRODUCTS } from '@/data/products'

const SEASONAL_IDS = ['verdant-solstice', 'morning-mist', 'wild-moss']

export default function SeasonalCollections() {
  const collections = SEASONAL_IDS.map(id => PRODUCTS.find(p => p.id === id)!)

  return (
    <section id="catalogo" aria-labelledby="seasonal-title" className="py-24 linen-texture">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 id="seasonal-title" className="font-headline-lg text-headline-lg text-primary mb-2">
              Colecciones de Temporada
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Las flores más frescas de la cosecha de esta semana.
            </p>
          </div>
          <Link
            href="/catalog"
            className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:translate-x-1 transition-transform group uppercase tracking-widest"
          >
            Ver Todo el Catálogo
            <span className="material-symbols-outlined text-[16px] group-hover:ml-1 transition-all">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {collections.map(p => (
            <Link key={p.id} href={`/products/${p.id}`} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src={p.img}
                  alt={p.alt}
                />
                {p.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 backdrop-blur px-3 py-1 rounded-full font-label-sm text-label-sm text-on-primary uppercase">
                      {p.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-surface/90 backdrop-blur text-primary px-4 py-2 rounded-full font-label-sm text-label-sm flex items-center gap-1 shadow-lg">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    Ver producto
                  </span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1">{p.name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {p.description.split('.')[0]}. RD$ {p.prices.Standard.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
