const COLLECTIONS = [
  {
    name:        'Verdant Solstice',
    description: 'Helechos de bosque, musgo y lirios. RD$ 2,800',
    badge:       'Limitado',
    img:         'https://lh3.googleusercontent.com/aida-public/AB6AXuDbxKXeIVgWsAFSwx-TQFL6-E87FrlKk81aMO7tlzGClZeMTQSYrHM4gMbcex-F5AY-fSTosALcJh5K9Jcb3QznF1p5DYx9IBfaeuDM6ahdUScmYmtweRHUvI2ZyJxCxRBimgUrgCSlWAG_CTs3OQWeU6L6KrLrHTnt7k1msdlk0_hs9DkmcpBX4nu_bhylXE3pN85gXfLYFDZog2XKRAeZKmxX72ZbqE9HFq3v-tdBxouBofigm4HAKgnyApA_FuBImTi0CDd9JsE',
    alt:         'Arreglo de helechos y suculentas verdes en cerámica artesanal',
  },
  {
    name:        'Morning Mist',
    description: 'Lirios blancos y eucalipto plateado. RD$ 3,900',
    badge:       null,
    img:         'https://lh3.googleusercontent.com/aida-public/AB6AXuCFLKbhQsxspz5ViKQgqQ9OTVnq0raLn7lMhGiqJcMIgN2J2Tn_ckE7eredkqVh90XFMLV9RQCNHjaLXlPZDgjXFK_tftmBIHZklx9dB2qTre-d5yVp4XxBLGTzF-rwj6LeHd5N4RiZX8riTvCEAD19FoX6b77MxYEVtrlxYNd7F8IMQuK2BNEluYGG-UtECP5knKrD3Q7hL0gY_JCGCGxpwDwvlnlX68tH80dtQqqtvOBz9YGW_fETCH1QmCXaEWrgE0_gF9JL9Ss',
    alt:         'Lirios blancos y eucalipto en florero de vidrio verde',
  },
  {
    name:        'Wild Moss',
    description: 'Suculentas sage y hiedra de bosque. RD$ 3,100',
    badge:       null,
    img:         'https://lh3.googleusercontent.com/aida-public/AB6AXuAjh3sODk1Mq1aMQ9aQrWmscTtis_xxWY4oI4SQ93NS0dNyXhOIV90EV0CpsR12bnB4f3Q97E79CRvGBNu3NHKMNUIpjrcYN5d620cwrrQ3C07JEY47jZXL7CBkxMzl_ieTYSS2mG-mA8AHvSuMQAxG5l-M1Cmk8dTO_kJ7jsBelGrgF0bY35J1dJ_fVtlzdbxBUUf3eiMmE-r1dOZiwvxizUv9YZT8R5bYFn7tCfCastct1muF4qbSj8ZzgU9Pq4IrCDJXMKxD-io',
    alt:         'Ramo artesanal de suculentas sage y hiedra en lino orgánico',
  },
]

export default function SeasonalCollections() {
  return (
    <section id="catalogo" aria-labelledby="seasonal-title" className="py-24 linen-texture">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 id="seasonal-title" className="font-headline-lg text-headline-lg text-primary mb-2">
              Colecciones de Temporada
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Las flores más frescas de la cosecha de esta semana.
            </p>
          </div>
          <a
            href="/catalog"
            className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:translate-x-1 transition-transform group uppercase tracking-widest"
          >
            Ver Todo el Catálogo
            <span className="material-symbols-outlined text-[16px] group-hover:ml-1 transition-all">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {COLLECTIONS.map(({ name, description, badge, img, alt }) => (
            <div key={name} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src={img}
                  alt={alt}
                />
                {badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 backdrop-blur px-3 py-1 rounded-full font-label-sm text-label-sm text-on-primary uppercase">
                      {badge}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1">{name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
