import type { Metadata } from 'next'
import { Noto_Serif, Inter } from 'next/font/google'
import { CartProvider } from '@/context/CartContext'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flores del Alma — Artisanal Botanicals',
  description: 'Arreglos florales artesanales frescos, personalizados y entregados el mismo día.',
  openGraph: {
    title: 'Flores del Alma',
    description: "Artisanal botanicals for life's moments.",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${notoSerif.variable} ${inter.variable} font-sans bg-surface text-on-surface antialiased`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded"
        >
          Saltar al contenido principal
        </a>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
