export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 md:py-32"
    >
      {/* Decorative circles */}
      <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-200 opacity-30 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-primary-300 opacity-20 blur-3xl" />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
              🌸 Entrega el mismo día
            </span>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-display text-neutral-900 leading-[1.1] mb-6"
            >
              Flores frescas para <em className="text-primary-600 not-italic">cada ocasión</em>
            </h1>
            <p className="text-lg text-neutral-600 mb-8 max-w-lg">
              Arreglos florales personalizados con flores del día, diseñados con amor
              y entregados en tu puerta cuando más los necesitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#catalogo" className="btn-primary">
                Haz tu pedido hoy
              </a>
              <a href="#beneficios" className="btn-secondary">
                Conoce más
              </a>
            </div>
          </div>

          {/* Placeholder image area */}
          <div className="hidden md:flex items-center justify-center">
            <div
              className="w-full max-w-md aspect-square rounded-3xl bg-primary-100 flex items-center justify-center text-primary-300 text-8xl"
              role="img"
              aria-label="Arreglo floral decorativo"
            >
              🌺
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
