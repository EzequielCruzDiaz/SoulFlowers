'use client'

import { useState } from 'react'

const FAQS = [
  { q: '¿Cuánto tiempo antes debo realizar mi pedido?', a: 'Para entregas el mismo día, el pedido debe realizarse antes de las 2:00 PM. Para eventos especiales, recomendamos reservar con al menos 3 días de anticipación.' },
  { q: '¿Puedo personalizar los colores y tipos de flores?', a: 'Sí, absolutamente. En el formulario de contacto puedes indicar tus preferencias. Nuestro equipo se comunicará contigo para confirmar la disponibilidad de las flores.' },
  { q: '¿Realizan entregas fuera de la ciudad?', a: 'Actualmente hacemos entregas en Santo Domingo y Gran Santo Domingo. Estamos expandiendo nuestro servicio a otras ciudades. Contáctanos para consultar disponibilidad.' },
  { q: '¿Cómo se realiza el pago?', a: 'Aceptamos tarjetas de crédito/débito, transferencias bancarias y pago en efectivo al momento de la entrega. El pago online está disponible en nuestro sitio con SSL.' },
  { q: '¿Qué pasa si las flores no llegan frescas?', a: 'Garantizamos la calidad de todas nuestras flores. Si no estás satisfecho, te enviamos un nuevo arreglo o realizamos un reembolso completo sin preguntas.' },
  { q: '¿Puedo incluir una tarjeta con mensaje personalizado?', a: 'Sí, todos nuestros arreglos incluyen una tarjeta de regalo sin costo adicional. En el campo de mensaje puedes indicar el texto exacto que deseas que aparezca en la tarjeta.' },
  { q: '¿Ofrecen descuentos para compras frecuentes o corporativas?', a: 'Contamos con planes especiales para clientes corporativos y programas de fidelidad para clientes frecuentes. Contáctanos directamente para conocer las opciones de descuento disponibles.' },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId(prev => prev === id ? null : id)

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 bg-neutral-50">
      <div className="container-xl max-w-3xl">
        <div className="text-center mb-14">
          <h2 id="faq-title" className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle mx-auto">Todo lo que necesitas saber antes de tu pedido.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }, idx) => {
            const isOpen = openId === idx
            return (
              <div key={idx} className="card overflow-visible">
                <h3>
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 font-semibold text-neutral-800 hover:text-primary-700 transition-colors"
                  >
                    <span>{q}</span>
                    <span
                      aria-hidden="true"
                      className={`text-primary-600 text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed">{a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
