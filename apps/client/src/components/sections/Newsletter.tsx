'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section aria-labelledby="newsletter-title" className="py-32 px-margin-desktop">
      <div className="max-w-[1000px] mx-auto bg-surface border border-outline-variant p-16 lg:p-24 rounded-[48px] text-center linen-texture relative overflow-hidden">
        {/* Decorative blurs */}
        <div aria-hidden="true" className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-fixed/10 rounded-full blur-3xl pointer-events-none" />

        <h2 id="newsletter-title" className="font-display-md text-display-md text-primary mb-6 relative z-10">
          Únete a Nuestro Círculo Botánico
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-lg mx-auto relative z-10">
          Consejos de temporada, novedades del estudio y acceso anticipado a colecciones de edición limitada directo a tu bandeja de entrada.
        </p>

        <form
          className="flex flex-col md:flex-row gap-6 max-w-md mx-auto relative z-10"
          onSubmit={e => { e.preventDefault(); setEmail('') }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className="flex-1 bg-transparent border-b-2 border-outline-variant focus:border-primary focus:outline-none px-0 py-4 font-body-md placeholder:text-outline transition-colors"
          />
          <button
            type="submit"
            className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-sm hover:bg-primary-container transition-all uppercase tracking-widest"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  )
}
