'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#catalogo',   label: 'Catálogo' },
  { href: '#clima',      label: 'Clima' },
  { href: '#faq',        label: 'FAQ' },
  { href: '#contacto',   label: 'Contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef  = useRef<HTMLUListElement>(null)
  const btnRef   = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        btnRef.current?.focus()
      }
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container-xl flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl text-primary-700 font-bold tracking-tight">
          Flores del Alma
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex">
          <ul className="flex gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 rounded-full hover:text-primary-700 hover:bg-primary-50 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a href="#contacto" className="hidden md:inline-flex btn-primary text-sm">
            Haz tu pedido
          </a>

          <button
            ref={btnRef}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsOpen(v => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <span className={`block h-0.5 w-6 bg-neutral-700 transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-neutral-700 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-neutral-700 transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 border-t border-neutral-100' : 'max-h-0'}`}
      >
        <nav aria-label="Menú móvil">
          <ul ref={menuRef} className="flex flex-col py-4 px-4 gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="block px-4 py-3 text-base font-medium text-neutral-700 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors"
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
