const BENEFITS = [
  { icon: '🌱', title: 'Flores del Día', description: 'Seleccionamos las flores más frescas cada mañana para garantizar calidad y durabilidad.' },
  { icon: '✂️', title: 'Diseño Personalizado', description: 'Cada arreglo se crea a mano según tus preferencias, colores y ocasión especial.' },
  { icon: '🚀', title: 'Entrega el Mismo Día', description: 'Realizamos entregas el mismo día dentro de la ciudad, para que nunca llegues tarde.' },
  { icon: '💳', title: 'Pago Seguro', description: 'Múltiples métodos de pago aceptados con cifrado SSL y transacciones 100% seguras.' },
  { icon: '🎁', title: 'Empaque Premium', description: 'Presentación elegante con caja, papel decorativo y tarjeta personalizada incluida.' },
  { icon: '📞', title: 'Atención 24/7', description: 'Nuestro equipo está disponible en cualquier momento para atender tu pedido.' },
]

export default function Benefits() {
  return (
    <section id="beneficios" aria-labelledby="benefits-title" className="py-20 bg-white">
      <div className="container-xl text-center mb-14">
        <h2 id="benefits-title" className="section-title">¿Por qué elegirnos?</h2>
        <p className="section-subtitle mx-auto">
          Más de 10 años creando momentos especiales con flores naturales de la más alta calidad.
        </p>
      </div>

      <div className="container-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BENEFITS.map(({ icon, title, description }) => (
          <article key={title} className="card p-6">
            <span aria-hidden="true" className="text-4xl mb-4 block">{icon}</span>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
