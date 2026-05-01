export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 mt-20">
      <div className="container-xl grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-xl text-white font-bold mb-3">Flores del Alma</p>
          <p className="text-sm leading-relaxed">
            Arreglos florales frescos, personalizados y con entrega el mismo día.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm">
            {['#beneficios','#catalogo','#faq','#contacto'].map(href => (
              <li key={href}>
                <a href={href} className="hover:text-primary-400 transition-colors capitalize">
                  {href.replace('#','')}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
          <address className="not-italic text-sm space-y-1">
            <p>info@floresdelalma.com</p>
            <p>+1 (800) 555-FLOR</p>
            <p>Santo Domingo, RD</p>
          </address>
        </div>
      </div>
      <div className="container-xl mt-10 pt-6 border-t border-neutral-700 text-xs text-neutral-500">
        © {year} Flores del Alma. Todos los derechos reservados.
      </div>
    </footer>
  )
}
