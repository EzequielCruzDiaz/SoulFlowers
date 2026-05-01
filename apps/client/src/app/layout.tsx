import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flores del Alma — Flores frescas para cada ocasión',
  description: 'Arreglos florales frescos, personalizados y entrega el mismo día.',
  openGraph: {
    title: 'Flores del Alma',
    description: 'Arreglos florales frescos con entrega el mismo día.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" dir="ltr">
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}
