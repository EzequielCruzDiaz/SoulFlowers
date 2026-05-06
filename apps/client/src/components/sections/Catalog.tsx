'use client'

import { useState } from 'react'

const CATEGORIES = ['Todos', 'Temporada', 'Condolencias', 'Artesanal', 'Seco', 'Aniversario', 'Vivo']

const PRODUCTS = [
  {
    id: 1, name: 'The Solstice Blend', price: 'RD$ 2,750', category: 'Temporada',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYRn3IkwdMDncZ_Qspwq37vB42bNbQw-pce-ZtMPV2179BZtVJlxSvquaOpiec4rJGaZzeesd3aM7j4xRDnGPmud_YLyxpYFb7TuGuYM5OHfY9tcZnSBMDyNy_r57QVLgeZ77zW1hbwGTNiYmr_VKycU-Je5kVNYoLBokwibKCXJ3ogg_m3pjO_sdpPyFa9EaBNFTuriNMb3OnsXR18ADoSkzL1uhTf19yVX-f2PTU77BHuRIDs-Wqf2rWfxlpaAcCci4r0bmAzVo',
    alt: 'The Solstice Blend bouquet',
  },
  {
    id: 2, name: 'Serene Grace', price: 'RD$ 3,900', category: 'Condolencias',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-0KEYDZ2ITewcJMkTl4JXtQ-MJFL54-bNyj0SqWfaeirT1bxRiBztiBlDr5WJc-P-ernSb1TtygBFXQXeOtd6hiPW6ZHbprUzg03q5H0zG6ZDYDOJYEIXvwVNBjMcKeOzvL7EVUgtgEExCaBkLTzoZbS5US1zVTLWNBWkcbTdqdibkNYbx2IBPIfkNQTyrT24b2IIq7vloNJqwT32Dw75drYdazNYFnX-nP92hBEUl25t0s_D1qbWTDLG6q28puHyz5OpDJ4IepM',
    alt: 'Serene Grace white lily arrangement',
  },
  {
    id: 3, name: 'Poppy Fields', price: 'RD$ 3,150', category: 'Artesanal',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsmsQuHJzKXJqE6PmkqMJame421vvl8LEAv67chVzmCBe3YfitfEo_pW_k6tAPsZgbuc0HqHBq42ZVTvADrPxmtI-Yy3qBdlk9kKQjb6BXF93WJ9n9cG6ALeXZYlJwqr8WcLQTUJxJZpzhc-Gn4HmcXpr08wLq_la5WN-dsGGTZw4j0UlLVDWgKZfvzUJwIILW41A3g79lqMirddzOWJlCeXYZtBZloMQ1zrfZ2plZoW9T1_dDbpNBPWSgQWOylIaQOdDntq9f28U',
    alt: 'Poppy Fields arrangement',
  },
  {
    id: 4, name: 'Eternal Harvest', price: 'RD$ 2,200', category: 'Seco',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDERbLiFlH15jpbsJu1gur0V1HMJKyBlmNqGzioDHz9ra7lOTTI3oJeY8g65CUNZVcxZ9ShkcvgXXoBA2XIva-TE5Def-oBi7ICzzvfQZ8Mpyp9shyRsafqIAz_3xapCnBTmUkpfEYyi4Gx-_5rwPCk5WtlaWi2r4t0vut1PNdBiPQthYNPPcaAl0Dy5F9rxxJhQ1sa5XlNNJeHbt6DItFFNYBi0RJ0f0mK1uSMXPwv8V5brpJ5wQtrK2Nfr6oe90D6A7YkJSKF4A0',
    alt: 'Eternal Harvest dried florals',
  },
  {
    id: 5, name: 'Midnight Orchid', price: 'RD$ 4,750', category: 'Aniversario',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8oa-VzM8aywp1HkzdnMqKdS7OzrX4WrT8AwTX4P3pMC9n1CZhdz1qkRctn9-Lnajb9SX9RCfTkp_Zsv7wU8itdIsxJGTbZT4YVS3ETscPA7xniPTUfMVM_NSCMpTD_Qgqfyf9PtXQMSVpXtDxPdbrYQhYumLdg4OjvlZbS-RVOKiCNASNznn5Jy07KqTQld6S5u88n2GZowiPl2kq-iZ1Eidnhpp6BkK2Q0nmc3U3X4BhnQDgJfnbxVeicRde7RbMqMcUcIlJfLE',
    alt: 'Midnight Orchid arrangement',
  },
  {
    id: 6, name: 'Desert Oasis', price: 'RD$ 1,800', category: 'Vivo',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6F6bC90tnoNV7gB-bLyiDLFzXzJx3lTnYQIJ--zvjaK9dtBPqBPqLuyyEo35oJozQzPR573OF3k5Yw6uHtuulzeg1nlFGdYbosAfyi7dBZDBANeMhLLCx_fgj8vTUwXKq8H5ZMv3W3cG2HIB8qWAjMvJ2fVcZyojXdxnKd_1nv51u97OZaEu0JzMZOKARiKZFcP0NVVM0vtT8OY2W3Zgl4qX5bfc3UEIIOEbxoccWL4p0hpiNeNIAFHIzlJclq5QH207oRVIUJvg',
    alt: 'Desert Oasis succulent garden',
  },
]

export default function Catalog() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  return (
    <section id="catalogo-completo" aria-labelledby="catalog-title" className="py-20 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-gutter mb-12 py-8 border-y border-outline-variant/40">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/80 mr-2">
              Filtrar por
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full font-label-sm text-label-sm transition-colors ${
                    active === cat
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <select aria-label="Filtrar por tipo de flor" className="appearance-none bg-surface-container border-none rounded-lg px-5 py-2.5 pr-12 font-label-sm text-label-sm text-on-surface-variant focus:ring-1 focus:ring-primary/30 outline-none cursor-pointer">
              <option>Tipo de Flor</option>
              <option>Peonías</option>
              <option>Rosas</option>
              <option>Silvestres</option>
              <option>Secas</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
              expand_more
            </span>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
          {filtered.map(({ id, name, price, category, img, alt }) => (
            <article key={id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden mb-6 relative border border-outline-variant/30 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  src={img}
                  alt={alt}
                />
                <div className="absolute inset-0 botanical-overlay" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="/checkout"
                    className="bg-on-primary text-primary px-8 py-3 rounded-full font-label-sm text-label-sm flex items-center gap-2 shadow-xl whitespace-nowrap border border-primary/10 hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                    Añadir rápido
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-start px-1">
                <div>
                  <span className="font-label-sm text-[10px] text-on-primary-container uppercase tracking-wider mb-2 block">
                    {category}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary">{name}</h3>
                </div>
                <p className="font-headline-md text-headline-md text-primary">{price}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-24 text-center">
          <button
            type="button"
            className="px-12 py-5 border border-primary/40 text-primary hover:bg-primary hover:text-on-primary transition-all duration-500 font-label-sm text-label-sm uppercase tracking-widest rounded-full"
          >
            Descubrir Más
          </button>
        </div>
      </div>
    </section>
  )
}
