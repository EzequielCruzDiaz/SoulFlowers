const BENEFITS = [
  { icon: 'eco',           title: 'Flores del Día',        description: 'Seleccionamos las flores más frescas cada mañana para garantizar calidad y durabilidad.' },
  { icon: 'design_services', title: 'Diseño Personalizado', description: 'Cada arreglo se crea a mano según tus preferencias, colores y ocasión especial.' },
  { icon: 'delivery_dining', title: 'Entrega el Mismo Día', description: 'Realizamos entregas el mismo día dentro de la ciudad, para que nunca llegues tarde.' },
  { icon: 'lock',          title: 'Pago Seguro',           description: 'Múltiples métodos de pago con cifrado SSL y transacciones 100% seguras.' },
  { icon: 'redeem',        title: 'Empaque Premium',       description: 'Presentación elegante con caja, papel decorativo y tarjeta personalizada incluida.' },
  { icon: 'support_agent', title: 'Atención 24/7',         description: 'Nuestro equipo está disponible en cualquier momento para atender tu pedido.' },
]

export default function Benefits() {
  return (
    <section id="beneficios" aria-labelledby="benefits-title" className="py-20 bg-surface-container-low">
      <div className="container-xl text-center mb-14">
        <h2 id="benefits-title" className="section-title">¿Por qué elegirnos?</h2>
        <p className="section-subtitle mx-auto">
          Más de 10 años creando momentos especiales con flores naturales de la más alta calidad.
        </p>
      </div>

      <div className="container-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BENEFITS.map(({ icon, title, description }) => (
          <article key={title} className="bg-surface rounded-2xl border border-outline-variant/30 p-8 transition-all duration-300 hover:shadow-md hover:border-primary/30">
            <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6 shadow-md shadow-primary/20">
              <span className="material-symbols-outlined !text-[22px]">{icon}</span>
            </div>
            <h3 className="font-serif text-xl text-primary mb-3">{title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
