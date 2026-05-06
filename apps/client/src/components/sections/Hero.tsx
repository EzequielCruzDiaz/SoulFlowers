export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative h-[90vh] w-full flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbi9RiNWhylrNG_zbJQA6K-hMadZgCfpi8ozXtB5bWq1ihL7ZVqKNHto1ZPkFSWjedgs2dzVgPxjegRpr22yI482gfOOqXdwdfgE8hrkaUEK_nGaPXwMOncGSJedIFJhrEfkEqfkh6KyrKDE9JVonEV_uPQ128U4mnUPdQ5iplT7W4y0hVgN-YPUbt9kElC5gWo_cKQzP8HCdBgsk7MimMxtQPoPuO1XhUG6gzbnPk-qTZAeNTgGVcBHWf5gNVjFQv1UCxAZ2ll2A"
          alt="Jardín botánico con helechos y orquídeas"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full text-surface">
        <div className="max-w-2xl">
          <span className="font-label-sm text-label-sm tracking-[0.2em] text-primary-fixed uppercase block mb-4">
            Established 2024
          </span>
          <h1 id="hero-title" className="font-display-lg text-display-lg mb-6 leading-[1.1] text-surface">
            El Arte de la Botánica.
          </h1>
          <p className="font-body-lg text-body-lg mb-8 text-surface-container-high max-w-lg">
            Arreglos artesanales que capturan la belleza salvaje de las estaciones. Entregados desde nuestro estudio a tu santuario.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-full font-label-sm hover:bg-primary-fixed-dim transition-all active:scale-95 shadow-lg"
            >
              Ver Colección
            </a>
            <a
              href="#proceso"
              className="border border-surface text-surface px-8 py-4 rounded-full font-label-sm hover:bg-surface/10 transition-all active:scale-95"
            >
              Nuestro Proceso
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
