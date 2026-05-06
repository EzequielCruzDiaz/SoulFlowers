import Link from 'next/link'

export const metadata = {
  title: 'Pago Seguro — Flores del Alma',
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md">
      {/* Simplified header */}
      <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
          <span className="font-headline-lg text-headline-lg text-primary tracking-tight">Flores del Alma</span>
          <Link
            href="/catalog"
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Volver al Catálogo</span>
          </Link>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Left: Delivery Details ── */}
          <section className="lg:col-span-7 space-y-12">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Detalles de Entrega</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Dinos a dónde van estos tesoros botánicos.
              </p>
            </div>

            {/* Recipient */}
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-primary border-b border-outline-variant pb-2">
                Destinatario
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    placeholder="ej. Elena Rodríguez"
                    className="bg-transparent border-0 border-b border-outline text-body-md py-2 px-0 focus:outline-none focus:border-surface-tint placeholder:text-surface-dim transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="bg-transparent border-0 border-b border-outline text-body-md py-2 px-0 focus:outline-none focus:border-surface-tint placeholder:text-surface-dim transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-primary border-b border-outline-variant pb-2">
                Destino
              </h2>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                  Dirección
                </label>
                <input
                  type="text"
                  placeholder="Calle Botánica 123, Apt 4"
                  className="bg-transparent border-0 border-b border-outline text-body-md py-2 px-0 focus:outline-none focus:border-surface-tint placeholder:text-surface-dim transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">Ciudad</label>
                  <input
                    type="text"
                    placeholder="Santo Domingo"
                    className="bg-transparent border-0 border-b border-outline text-body-md py-2 px-0 focus:outline-none focus:border-surface-tint placeholder:text-surface-dim transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    Código Postal
                  </label>
                  <input
                    type="text"
                    placeholder="10101"
                    className="bg-transparent border-0 border-b border-outline text-body-md py-2 px-0 focus:outline-none focus:border-surface-tint placeholder:text-surface-dim transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Delivery date */}
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-primary border-b border-outline-variant pb-2">
                Fecha de Entrega
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    Seleccionar Fecha
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      aria-label="Fecha de entrega"
                      className="w-full bg-transparent border-0 border-b border-outline text-body-md py-2 px-0 focus:outline-none appearance-none"
                    />
                    <span className="material-symbols-outlined absolute right-0 top-2 pointer-events-none text-on-surface-variant">
                      calendar_today
                    </span>
                  </div>
                </div>
                <p className="font-label-sm text-label-sm text-on-tertiary-container italic">
                  Los pedidos deben realizarse con 24 horas de anticipación para preparación artesanal.
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="space-y-4">
              <label
                htmlFor="florist-note"
                className="font-label-sm text-label-sm uppercase text-on-surface-variant block"
              >
                Nota para el Florista (Opcional)
              </label>
              <textarea
                id="florist-note"
                rows={3}
                placeholder="Agrega un mensaje personal o instrucciones de entrega específicas..."
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 text-body-md focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
          </section>

          {/* ── Right: Order Summary ── */}
          <aside className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-surface-container rounded-xl p-8 border border-outline-variant">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Resumen del Pedido</h2>

              {/* Item */}
              <div className="flex gap-6 pb-8 border-b border-outline-variant mb-8">
                <div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-highest">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Aurora Boreal bouquet"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida/ADBb0uicmZw1oof_lM2sYeYCIjs5XeZkA7TvJTELc-K8LNhxRoktPoCd8eQsP-eg_V7aeSg-KJG31cSTtrfnBY-dcOW3b8LYTwfpwMbQ8qoRARfyeCJMWuzKM0CkDAjNNJl0WYDt-NG1oixnAfnHBnkVDRbdYGBDDPU6G5m0-LUOwwoNcTfnx90WVR8Gk7VbWB4hOyYB6cSvP8eB_cETK9McERw1Ix1ywzkuLbSo65Fx-ytJOr93pn3o_fV5XHlLsxZU3rEW5UnKO0EjsA"
                  />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary">Aurora Boreal</h3>
                    <p className="text-on-surface-variant font-label-sm tracking-wider">COLECCIÓN ARTESANAL</p>
                  </div>
                  <p className="font-headline-md text-primary">RD$ 4,060</p>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Subtotal', value: 'RD$ 4,060' },
                  { label: 'Envío Artesanal', value: 'RD$ 490' },
                  { label: 'Impuesto Eco', value: 'RD$ 334' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between font-body-md text-on-surface">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
                <div className="flex justify-between font-headline-md text-headline-md text-primary pt-4 border-t border-outline-variant">
                  <span>Total</span>
                  <span>RD$ 4,884</span>
                </div>
              </div>

              {/* Payment */}
              <div className="space-y-6">
                <h3 className="font-label-sm text-label-sm uppercase text-on-surface-variant">Pago Seguro</h3>
                <div className="grid grid-cols-1 gap-4">
                  <label className="relative flex items-center p-4 cursor-pointer rounded-lg border-2 border-primary bg-primary-fixed">
                    <input defaultChecked name="payment" type="radio" className="w-4 h-4 text-primary focus:ring-0" />
                    <div className="ml-4 flex items-center justify-between w-full">
                      <span className="font-body-md font-semibold text-primary">Tarjeta de Crédito / Débito</span>
                      <span className="material-symbols-outlined text-primary">credit_card</span>
                    </div>
                  </label>
                  <label className="relative flex items-center p-4 cursor-pointer rounded-lg border border-outline-variant hover:border-primary transition-colors bg-surface-container-low">
                    <input name="payment" type="radio" className="w-4 h-4 text-primary focus:ring-0" />
                    <div className="ml-4 flex items-center justify-between w-full">
                      <span className="font-body-md text-on-surface">Billetera Digital</span>
                      <span className="material-symbols-outlined text-on-surface-variant">account_balance_wallet</span>
                    </div>
                  </label>
                </div>

                <button
                  type="button"
                  className="w-full bg-primary-container text-on-primary-container font-headline-md py-4 rounded-lg hover:brightness-125 active:scale-[0.98] transition-all shadow-sm"
                >
                  Completar Compra
                </button>

                <div className="flex items-center justify-center gap-2 text-on-tertiary-container">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  <span className="font-label-sm text-label-sm">Pago cifrado con SSL de 256 bits</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Simplified footer */}
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
