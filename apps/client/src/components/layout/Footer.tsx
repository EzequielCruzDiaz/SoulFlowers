export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary text-on-primary w-full py-24">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-gutter">

        {/* Brand */}
        <div className="col-span-1 md:col-span-2 space-y-8">
          <span className="font-headline-lg text-headline-lg text-primary-fixed block">Flores del Alma</span>
          <p className="font-body-md text-body-md text-on-primary-container/80 max-w-sm">
            Un estudio artesanal dedicado a la elegancia salvaje de la vida botánica. Cultivado con amor, arreglado con alma.
          </p>
          <div className="flex gap-6">
            <a href="#" aria-label="Facebook" className="text-on-primary-container/60 hover:text-primary-fixed transition-all">
              <span className="material-symbols-outlined">social_leaderboard</span>
            </a>
            <a href="#" aria-label="Instagram" className="text-on-primary-container/60 hover:text-primary-fixed transition-all">
              <span className="material-symbols-outlined">camera</span>
            </a>
            <a href="#" aria-label="Email" className="text-on-primary-container/60 hover:text-primary-fixed transition-all">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="grid grid-cols-2 gap-8 col-span-1">
          <div>
            <h5 className="font-label-sm text-label-sm text-primary-fixed mb-8 uppercase tracking-wider">
              Explorar
            </h5>
            <ul className="space-y-4">
              {['Temporada', 'Artesanal', 'Eventos'].map(l => (
                <li key={l}>
                  <a href="#" className="font-body-md text-body-md text-on-primary-container/70 hover:text-primary-fixed transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-label-sm text-label-sm text-primary-fixed mb-8 uppercase tracking-wider">
              Studio
            </h5>
            <ul className="space-y-4">
              {['Contacto', 'Ubicaciones', 'Guía de Cuidados'].map(l => (
                <li key={l}>
                  <a href="#contacto" className="font-body-md text-body-md text-on-primary-container/70 hover:text-primary-fixed transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-8">
          <h5 className="font-label-sm text-label-sm text-primary-fixed mb-8 uppercase tracking-wider">
            Contacto
          </h5>
          <address className="not-italic font-body-md text-body-md text-on-primary-container/70 space-y-1">
            <p>Santo Domingo, República Dominicana</p>
          </address>
          <p className="font-body-md text-body-md text-on-primary-container/70">
            studio@floresdelalma.com<br />
            +1 (800) 555-FLOR
          </p>
          <p className="font-label-sm text-label-sm text-on-primary-container/40 pt-8">
            © {year} Flores del Alma.<br />Artisanal Botanicals.
          </p>
        </div>

      </div>
    </footer>
  )
}
