'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import api from '@/services/api'

interface Form {
  name: string; phone: string; address: string; city: string; zip: string; date: string; note: string; email: string
}
interface Errors { [k: string]: string }

const SHIPPING = 490
const TAX_RATE = 0.08

export default function CheckoutPage() {
  const { items, total, count, removeItem, updateQty, clear } = useCart()
  const router = useRouter()

  const [form, setForm] = useState<Form>({
    name: '', phone: '', address: '', city: 'Santo Domingo', zip: '', date: '', note: '', email: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const tax = Math.round(total * TAX_RATE)
  const grandTotal = total + SHIPPING + tax

  const validate = (): Errors => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Nombre requerido.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email válido requerido.'
    if (!form.phone.trim()) e.phone = 'Teléfono requerido.'
    if (!form.address.trim()) e.address = 'Dirección requerida.'
    if (!form.city.trim()) e.city = 'Ciudad requerida.'
    if (!form.date) e.date = 'Fecha de entrega requerida.'
    else {
      const selected = new Date(form.date)
      const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1)
      if (selected < tomorrow) e.date = 'La fecha debe ser al menos mañana.'
    }
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    if (items.length === 0) return

    setStatus('loading')
    const orderSummary = items.map(i => `${i.qty}x ${i.name} (${i.size}) — RD$ ${(i.price * i.qty).toLocaleString()}`).join('\n')
    const message = `PEDIDO:\n${orderSummary}\n\nEntrega: ${form.date}\nDirección: ${form.address}, ${form.city} ${form.zip}\nNota: ${form.note || 'Ninguna'}\n\nTotal: RD$ ${grandTotal.toLocaleString()}`

    try {
      await api.post('/api/contact', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        occasion: 'pedido',
        message,
      })
      clear()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
          </div>
          <h1 className="font-display-md text-display-md text-primary mb-4">¡Pedido Recibido!</h1>
          <p className="font-body-lg text-on-surface-variant mb-8">
            Gracias {form.name}. Te contactaremos en breve para confirmar los detalles de tu entrega.
          </p>
          <Link href="/" className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-sm uppercase tracking-widest hover:bg-primary/90 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md">
      {/* Header */}
      <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
          <span className="font-headline-lg text-headline-lg text-primary tracking-tight">Flores del Alma</span>
          <Link href="/catalog" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Volver al Catálogo</span>
          </Link>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center p-8">
          <span className="material-symbols-outlined text-primary/30 text-8xl">shopping_cart</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Tu carrito está vacío</h2>
          <p className="text-on-surface-variant font-body-md max-w-sm">Agrega productos desde el catálogo para continuar con tu pedido.</p>
          <Link href="/catalog" className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-sm uppercase tracking-widest hover:bg-primary/90 transition-colors">
            Explorar catálogo
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left: Delivery details */}
              <section className="lg:col-span-7 space-y-10">
                <div>
                  <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Detalles de Entrega</h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">Dinos a dónde van estos tesoros botánicos.</p>
                </div>

                {status === 'error' && (
                  <div role="alert" className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm">
                    Ocurrió un error al enviar el pedido. Intenta de nuevo.
                  </div>
                )}

                {/* Recipient */}
                <div className="space-y-6">
                  <h2 className="font-headline-md text-headline-md text-primary border-b border-outline-variant pb-2">Destinatario</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Nombre Completo" id="name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="ej. Elena Rodríguez" />
                    <Field label="Email" id="email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="tu@email.com" />
                    <Field label="Teléfono" id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="+1 809 555 0000" />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-6">
                  <h2 className="font-headline-md text-headline-md text-primary border-b border-outline-variant pb-2">Destino</h2>
                  <Field label="Dirección" id="address" name="address" value={form.address} onChange={handleChange} error={errors.address} placeholder="Calle Botánica 123, Apt 4" />
                  <div className="grid grid-cols-2 gap-6">
                    <Field label="Ciudad" id="city" name="city" value={form.city} onChange={handleChange} error={errors.city} placeholder="Santo Domingo" />
                    <Field label="Código Postal" id="zip" name="zip" value={form.zip} onChange={handleChange} error={errors.zip} placeholder="10101" />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-4">
                  <h2 className="font-headline-md text-headline-md text-primary border-b border-outline-variant pb-2">Fecha de Entrega</h2>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <label htmlFor="date" className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                      Seleccionar Fecha *
                    </label>
                    <input
                      id="date" name="date" type="date"
                      value={form.date} onChange={handleChange}
                      className={`bg-transparent border-0 border-b py-2 px-0 focus:outline-none text-body-md transition-colors ${errors.date ? 'border-red-400' : 'border-outline'}`}
                      aria-invalid={errors.date ? 'true' : 'false'}
                    />
                    {errors.date && <p className="text-red-600 text-xs">{errors.date}</p>}
                    <p className="font-label-sm text-label-sm text-on-tertiary-container italic">
                      Pedidos con al menos 24 h de anticipación.
                    </p>
                  </div>
                </div>

                {/* Note */}
                <div className="space-y-3">
                  <label htmlFor="note" className="font-label-sm text-label-sm uppercase text-on-surface-variant block">
                    Nota para el Florista (Opcional)
                  </label>
                  <textarea
                    id="note" name="note" rows={3}
                    value={form.note} onChange={handleChange}
                    placeholder="Mensaje personal, instrucciones de entrega, colores preferidos..."
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 text-body-md focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
              </section>

              {/* Right: Order summary */}
              <aside className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="bg-surface-container rounded-xl p-8 border border-outline-variant">
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                    Resumen del Pedido ({count} {count === 1 ? 'artículo' : 'artículos'})
                  </h2>

                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-1">
                    {items.map(item => (
                      <div key={`${item.productId}-${item.size}`} className="flex gap-4 pb-4 border-b border-outline-variant/50">
                        <div className="w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-highest">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-body-md font-semibold text-primary truncate">{item.name}</p>
                          <p className="font-label-sm text-on-surface-variant">{item.size}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button type="button" onClick={() => updateQty(item.productId, item.size, item.qty - 1)} className="w-6 h-6 rounded-full border border-outline flex items-center justify-center text-xs hover:border-primary transition-colors">
                              <span className="material-symbols-outlined text-[14px]">remove</span>
                            </button>
                            <span className="font-label-sm w-4 text-center">{item.qty}</span>
                            <button type="button" onClick={() => updateQty(item.productId, item.size, item.qty + 1)} className="w-6 h-6 rounded-full border border-outline flex items-center justify-center text-xs hover:border-primary transition-colors">
                              <span className="material-symbols-outlined text-[14px]">add</span>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button type="button" onClick={() => removeItem(item.productId, item.size)} aria-label="Eliminar producto" className="text-on-surface-variant hover:text-red-600 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">close</span>
                          </button>
                          <p className="font-headline-md text-primary text-sm">RD$ {(item.price * item.qty).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price breakdown */}
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Subtotal', value: `RD$ ${total.toLocaleString()}` },
                      { label: 'Envío Artesanal', value: `RD$ ${SHIPPING.toLocaleString()}` },
                      { label: 'Impuesto Eco (8%)', value: `RD$ ${tax.toLocaleString()}` },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between font-body-md text-on-surface">
                        <span>{label}</span><span>{value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-headline-md text-headline-md text-primary pt-4 border-t border-outline-variant">
                      <span>Total</span><span>RD$ {grandTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Payment selector (decorative — no gateway yet) */}
                  <div className="space-y-4 mb-6">
                    <h3 className="font-label-sm text-label-sm uppercase text-on-surface-variant">Método de Pago</h3>
                    <label className="relative flex items-center p-4 cursor-pointer rounded-lg border-2 border-primary bg-primary-fixed">
                      <input defaultChecked name="payment" type="radio" className="w-4 h-4 text-primary" readOnly />
                      <div className="ml-4 flex items-center justify-between w-full">
                        <span className="font-body-md font-semibold text-primary">Pago contra entrega</span>
                        <span className="material-symbols-outlined text-primary">payments</span>
                      </div>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-primary text-on-primary font-headline-md py-4 rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all shadow-sm disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[20px]">autorenew</span>
                        Procesando…
                      </>
                    ) : 'Confirmar Pedido'}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-on-surface-variant mt-4">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span className="font-label-sm text-label-sm">Pago cifrado con SSL de 256 bits</span>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </form>
      )}

      <footer className="w-full py-gutter bg-surface-container-highest border-t border-outline-variant mt-24">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <div className="font-headline-md text-headline-md text-primary mb-2">Flores del Alma</div>
          <p className="text-on-surface-variant font-label-sm text-label-sm">
            © {new Date().getFullYear()} Flores del Alma. Artisanal Botanicals.
          </p>
        </div>
      </footer>
    </div>
  )
}

function Field({
  label, id, name, type = 'text', value, onChange, error, placeholder,
}: {
  label: string; id: string; name: string; type?: string
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>
  error?: string; placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-label-sm text-label-sm uppercase text-on-surface-variant">{label}</label>
      <input
        id={id} name={name} type={type} value={value} onChange={onChange}
        placeholder={placeholder} aria-invalid={error ? 'true' : 'false'}
        className={`bg-transparent border-0 border-b py-2 px-0 focus:outline-none text-body-md transition-colors placeholder:text-surface-dim ${error ? 'border-red-400' : 'border-outline focus:border-primary'}`}
      />
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  )
}
