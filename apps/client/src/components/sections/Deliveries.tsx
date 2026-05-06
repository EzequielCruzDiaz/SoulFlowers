const BENEFITS = [
  'Entrega el mismo día para pedidos antes de las 10 AM.',
  'Cajas de suscripción entregadas cada lunes por la mañana.',
  'Transporte floral con control de temperatura.',
]

export default function Deliveries() {
  return (
    <section id="entregas" aria-labelledby="deliveries-title" className="py-32 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left: text panel */}
          <div className="lg:col-span-7 bg-surface rounded-[32px] p-12 lg:p-16 flex flex-col justify-center border border-outline-variant/30 shadow-sm">
            <span className="font-label-sm text-label-sm tracking-[0.2em] text-primary uppercase block mb-6">
              Excelencia de Servicio
            </span>
            <h2 id="deliveries-title" className="font-display-md text-display-md text-primary mb-6">
              Entregas Diarias
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Desde gestos discretos de aprecio hasta grandes declaraciones, brindamos entregas confiables en toda el área metropolitana.
            </p>

            <ul className="space-y-6 mb-12">
              {BENEFITS.map(b => (
                <li key={b} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-fixed-dim">check_circle</span>
                  <span className="font-body-md text-body-md">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="bg-primary text-on-primary w-fit px-12 py-4 rounded-full font-label-sm hover:bg-primary-container transition-all active:scale-95 uppercase tracking-widest"
            >
              Reservar Entrega
            </a>
          </div>

          {/* Right: image + tracking card */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-12">
            <div className="rounded-[32px] overflow-hidden relative group min-h-[200px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWzGK274KhDSWEUhbPUg77Cr5b30we0D85HJvwgM-kk7bjA6PtHjgv6WeP8J31uZHOg0hBbyPEWpaPJzov-1_RpQg4gidGLzcQ-8VXKW8RCrdC2vxeGJcGi-sW4y8rYQKcxQz4Csi9nVgcsvvSTSvqgL3EGyhmNkLsKTQSWMyQwx6ZXU6clSNMjmJbAkEMdfdn1MBeLb88a3U8Xb0fopcGkXuIcFjZkUTxu1qoBy_92iPxlchkIn719jNc26JevG4QxJI-a2j2lp4"
                alt="Bicicleta de entrega artesanal con flores"
              />
              <div className="relative p-10 h-full flex flex-col justify-end bg-gradient-to-t from-primary/60 to-transparent">
                <span className="font-headline-md text-headline-md text-white">Artesanos Locales</span>
              </div>
            </div>

            <div className="bg-primary-fixed rounded-[32px] p-10 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-on-primary-fixed/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl text-on-primary-fixed">local_shipping</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-primary-fixed">Rastrea tus Pétalos</h3>
              <p className="font-body-md text-body-md text-on-primary-fixed-variant mt-2">
                Actualizaciones por SMS en tiempo real desde la cosecha hasta tu puerta.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
