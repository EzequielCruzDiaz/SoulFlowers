'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { findProduct } from '@/data/products'
import { useCart } from '@/context/CartContext'

type Size = 'Standard' | 'Deluxe' | 'Premium'

const SIZES: Size[] = ['Standard', 'Deluxe', 'Premium']

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
  const params = useParams()
  const router = useRouter()
  const { addItem } = useCart()

  const product = findProduct(params.id as string)
  const [selectedSize, setSelectedSize] = useState<Size>('Standard')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const price = product.prices[selectedSize]

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ productId: product.id, name: product.name, size: selectedSize, price, img: product.img })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ productId: product.id, name: product.name, size: selectedSize, price, img: product.img })
    }
    router.push('/checkout')
  }

  return (
    <>
      <Header />
      <main id="contenido" className="max-w-container-max mx-auto px-margin-desktop py-16">

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Gallery */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="col-span-2 relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-container-low group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={product.img}
                alt={product.alt}
              />
              <div className="absolute inset-0 linen-texture pointer-events-none opacity-30" />
            </div>
            <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src={product.img} alt={product.alt} />
            </div>
            <div className="aspect-square bg-surface-container rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/20">eco</span>
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">

            {/* Breadcrumb */}
            <nav className="flex gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              <Link href="/catalog" className="hover:text-primary transition-colors">Catálogo</Link>
              <span>/</span>
              <span>{product.category}</span>
            </nav>

            <div>
              {product.badge && (
                <span className="inline-block bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase mb-3">
                  {product.badge}
                </span>
              )}
              <h1 className="font-display-lg text-display-lg text-primary mb-2">{product.name}</h1>
              <p className="font-headline-md text-headline-md text-on-surface">
                RD$ {product.prices.Standard.toLocaleString()} — RD$ {product.prices.Premium.toLocaleString()}
              </p>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {product.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-surface-container border border-outline-variant font-label-sm text-label-sm rounded-full text-on-surface-variant">
                  {tag}
                </span>
              ))}
            </div>

            {/* Size selector */}
            <div className="space-y-3">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block">
                Tamaño — RD$ {price.toLocaleString()}
              </span>
              <div className="grid grid-cols-3 gap-3">
                {SIZES.map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex flex-col items-center justify-center py-5 rounded-xl transition-all border ${
                      selectedSize === size
                        ? 'border-2 border-primary bg-primary-container text-primary shadow-sm'
                        : 'border-outline-variant hover:border-primary bg-surface text-primary'
                    }`}
                  >
                    <span className="font-label-sm text-label-sm">{size}</span>
                    <span className="text-[11px] opacity-70 mt-1">RD$ {product.prices[size].toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block">
                Cantidad
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Disminuir cantidad"
                >
                  <span className="material-symbols-outlined text-[20px]">remove</span>
                </button>
                <span className="font-headline-md text-headline-md text-primary w-8 text-center">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
                <span className="font-body-md text-on-surface-variant ml-2">
                  Total: RD$ {(price * qty).toLocaleString()}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-5 bg-primary text-on-primary font-headline-md text-headline-md rounded-2xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg shadow-primary/10"
              >
                <span className="material-symbols-outlined text-[20px]">local_mall</span>
                Comprar Ahora
              </button>
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-4 border-2 font-headline-md rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] ${
                  added
                    ? 'border-primary bg-primary-container text-primary'
                    : 'border-primary text-primary hover:bg-primary-container'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{added ? 'check_circle' : 'add_shopping_cart'}</span>
                {added ? '¡Añadido al carrito!' : 'Añadir al Carrito'}
              </button>
            </div>

            {/* Trust badges */}
            <div className="pt-8 border-t border-outline-variant/30 space-y-5">
              {[
                { icon: 'eco',            text: 'Cultivado de forma sostenible con productores locales' },
                { icon: 'delivery_dining', text: 'Entrega el mismo día para pedidos antes de las 10 AM' },
                { icon: 'lock',           text: 'Compra segura con cifrado SSL de 256 bits' },
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

        {/* Care section */}
        <section className="mt-32 bg-surface-container rounded-[40px] p-16 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-primary-container opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
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
