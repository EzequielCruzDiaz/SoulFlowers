const PRODUCTS = [
  { id: 1, name: 'Ramo Romántico Rojo',    price: 'RD$ 1,200', emoji: '🌹', badge: 'Más vendido' },
  { id: 2, name: 'Arreglo Tropical',        price: 'RD$ 1,850', emoji: '🌺', badge: 'Nuevo' },
  { id: 3, name: 'Bouquet de Girasoles',    price: 'RD$ 950',   emoji: '🌻', badge: null },
  { id: 4, name: 'Caja de Rosas Blancas',  price: 'RD$ 2,100', emoji: '🤍', badge: 'Premium' },
  { id: 5, name: 'Mix de Temporada',        price: 'RD$ 1,400', emoji: '🌸', badge: null },
  { id: 6, name: 'Arreglo de Condolencias', price: 'RD$ 1,600', emoji: '💐', badge: null },
]

export default function Catalog() {
  return (
    <section id="catalogo" aria-labelledby="catalog-title" className="py-20 bg-neutral-50">
      <div className="container-xl text-center mb-14">
        <h2 id="catalog-title" className="section-title">Nuestros Arreglos</h2>
        <p className="section-subtitle mx-auto">
          Explora nuestra colección y encuentra el arreglo perfecto para cada momento.
        </p>
      </div>

      <div className="container-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map(({ id, name, price, emoji, badge }) => (
          <article key={id} className="card group">
            {/* Product image placeholder */}
            <div className="relative bg-primary-50 h-52 flex items-center justify-center text-7xl">
              {emoji}
              {badge && (
                <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {badge}
                </span>
              )}
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">{name}</h3>
                <p className="text-primary-700 font-bold text-sm">{price}</p>
              </div>
              <a
                href="#contacto"
                className="btn-primary text-sm px-4 py-2"
                aria-label={`Pedir ${name}`}
              >
                Pedir
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
