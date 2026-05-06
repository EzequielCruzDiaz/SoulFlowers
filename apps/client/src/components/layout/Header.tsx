'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/',          label: 'Inicio' },
  { href: '#catalogo',  label: 'Catálogo' },
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#contacto',  label: 'Contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLUListElement>(null)
  const btnRef  = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsOpen(false); btnRef.current?.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) menuRef.current?.querySelector('a')?.focus()
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-outline-variant/30 ${
        scrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm' : 'bg-surface'
      }`}
    >
      <div className="container-xl flex items-center justify-between h-20">
        {/* Logo + desktop nav */}
        <div className="flex items-center gap-10">
          <Link href="/" className="font-serif text-2xl text-primary tracking-tight">
            Flores del Alma
          </Link>

          <nav aria-label="Navegación principal" className="hidden md:flex">
            <ul className="flex gap-1">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-on-surface-variant rounded-full hover:text-primary transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Search + icons + CTA */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:block relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant !text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar arreglos..."
              className="bg-surface-container border-none rounded-full py-2 pl-10 pr-4 text-xs font-medium w-56 focus:ring-1 focus:ring-primary outline-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Carrito"
              className="material-symbols-outlined text-primary hover:text-secondary transition-colors duration-300"
            >
              shopping_cart
            </button>
            <button
              type="button"
              aria-label="Perfil"
              className="material-symbols-outlined text-primary hover:text-secondary transition-colors duration-300"
            >
              person
            </button>
          </div>

          <a href="#contacto" className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5">
            Haz tu pedido
          </a>

          {/* Hamburger */}
          <button
            ref={btnRef}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsOpen(v => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className={`block h-0.5 w-6 bg-primary transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-primary transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-primary transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 border-t border-outline-variant/30' : 'max-h-0'}`}
      >
        <nav aria-label="Menú móvil">
          <ul ref={menuRef} className="flex flex-col py-4 px-4 gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="block px-4 py-3 text-base font-medium text-on-surface-variant rounded-xl hover:bg-surface-container hover:text-primary transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#contacto" onClick={close} className="btn-primary w-full text-center text-sm">
                Haz tu pedido
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
