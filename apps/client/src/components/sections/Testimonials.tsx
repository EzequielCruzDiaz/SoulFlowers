const TESTIMONIALS = [
  { name: 'María González', role: 'Cliente frecuente', text: 'El arreglo llegó puntual y hermoso. Mi mamá lloró de felicidad. Definitivamente repetiré.', stars: 5 },
  { name: 'Carlos Pérez', role: 'Cliente corporativo', text: 'Utilizamos Flores del Alma para todos nuestros eventos empresariales. Calidad y profesionalismo impecable.', stars: 5 },
  { name: 'Ana Rodríguez', role: 'Novia 2024', text: 'Las flores de mi boda superaron todas mis expectativas. El equipo fue súper atento en cada detalle.', stars: 5 },
]

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-20 bg-white">
      <div className="container-xl text-center mb-14">
        <h2 id="testimonials-title" className="section-title">Lo que dicen nuestros clientes</h2>
        <p className="section-subtitle mx-auto">
          Más de 2,000 clientes felices nos respaldan.
        </p>
      </div>

      <div className="container-xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map(({ name, role, text, stars }) => (
          <blockquote key={name} className="card p-6 flex flex-col gap-4">
            <p className="text-sm text-neutral-600 leading-relaxed">"{text}"</p>
            <footer className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                {name[0]}
              </div>
              <div>
                <cite className="not-italic font-semibold text-neutral-900 text-sm block">{name}</cite>
                <span className="text-xs text-neutral-500">{role}</span>
              </div>
              <div className="ml-auto text-yellow-400 text-sm" aria-label={`${stars} estrellas`}>
                {'★'.repeat(stars)}
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
