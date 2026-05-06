const PILLARS = [
  { icon: 'eco',          title: 'Cultivado de Forma Sostenible',   desc: 'Alianzas con agricultores locales de bajo impacto.' },
  { icon: 'palette',      title: 'Diseño Artesanal',                desc: 'Cada arreglo es una pieza única, hecha a mano.' },
  { icon: 'inventory_2',  title: 'Empaque Compostable',             desc: 'Sin plástico: solo fibras naturales y papel.' },
  { icon: 'auto_awesome', title: 'Abastecimiento Ético',            desc: 'Cadenas transparentes desde la semilla hasta el ramo.' },
]

export default function Process() {
  return (
    <section id="proceso" aria-labelledby="process-title" className="bg-primary-container text-surface py-32">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Intro */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="font-label-sm text-label-sm tracking-[0.2em] text-on-primary-container uppercase block mb-4">
            Nuestra Filosofía
          </span>
          <h2 id="process-title" className="font-display-md text-display-md mb-6">
            Honrando el ritmo orgánico de la naturaleza.
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container/80">
            Cada tallo se elige por su carácter, no por su perfección. Trabajamos con productores locales para traerte flores que se sienten vivas.
          </p>
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {PILLARS.map(({ icon, title, desc }) => (
            <div key={title} className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-primary-fixed/5 flex items-center justify-center rounded-full border border-primary-fixed/20">
                <span className="material-symbols-outlined text-primary-fixed text-4xl">{icon}</span>
              </div>
              <h4 className="font-headline-md text-headline-md">{title}</h4>
              <p className="font-body-md text-body-md text-on-primary-container/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
