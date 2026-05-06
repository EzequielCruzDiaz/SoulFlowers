'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRODUCTS } from '@/data/products'
import { useCart } from '@/context/CartContext'

const CATEGORIES = ['Todos', 'Temporada', 'Condolencias', 'Artesanal', 'Seco', 'Aniversario', 'Vivo']

export default function Catalog() {
  const [active, setActive] = useState('Todos')
  const [added, setAdded] = useState<string | null>(null)
  const { addItem } = useCart()

  const filtered = active === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === active)

  const handleQuickAdd = (e: React.MouseEvent, p: typeof PRODUCTS[0]) => {
    e.preventDefault()
    addItem({ productId: p.id, name: p.name, size: 'Standard', price: p.prices.Standard, img: p.img })
    setAdded(p.id)
    setTimeout(() => setAdded(null), 1800)
  }

  return (
    <section id="catalogo-completo" aria-labelledby="catalog-title" className="py-20 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-gutter mb-12 py-8 border-y border-outline-variant/40">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/80 mr-2">
              Filtrar por
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full font-label-sm text-label-sm transition-colors ${
                    active === cat
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
          {filtered.map(p => (
            <Link key={p.id} href={`/products/${p.id}`} className="group">
              <article>
                <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden mb-6 relative border border-outline-variant/30 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                    src={p.img}
                    alt={p.alt}
                  />
                  <div className="absolute inset-0 botanical-overlay" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      type="button"
                      onClick={e => handleQuickAdd(e, p)}
                      className="bg-on-primary text-primary px-8 py-3 rounded-full font-label-sm text-label-sm flex items-center gap-2 shadow-xl whitespace-nowrap border border-primary/10 hover:bg-primary hover:text-on-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">
                        {added === p.id ? 'check' : 'add'}
                      </span>
                      {added === p.id ? '¡Agregado!' : 'Añadir rápido'}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start px-1">
                  <div>
                    <span className="font-label-sm text-[10px] text-on-primary-container uppercase tracking-wider mb-2 block">
                      {p.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary">{p.name}</h3>
                  </div>
                  <p className="font-headline-md text-headline-md text-primary">
                    RD$ {p.prices.Standard.toLocaleString()}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
