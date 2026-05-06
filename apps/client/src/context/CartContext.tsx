'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

export interface CartItem {
  productId: string
  name: string
  size: 'Standard' | 'Deluxe' | 'Premium'
  price: number
  qty: number
  img: string
}

interface CartCtx {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'qty'>) => void
  removeItem: (productId: string, size: string) => void
  updateQty: (productId: string, size: string, qty: number) => void
  clear: () => void
  total: number
  count: number
}

const Ctx = createContext<CartCtx | null>(null)

const KEY = 'fda_cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((newItem: Omit<CartItem, 'qty'>) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.productId === newItem.productId && i.size === newItem.size)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 }
        return next
      }
      return [...prev, { ...newItem, qty: 1 }]
    })
  }, [])

  const removeItem = useCallback((productId: string, size: string) => {
    setItems(prev => prev.filter(i => !(i.productId === productId && i.size === size)))
  }, [])

  const updateQty = useCallback((productId: string, size: string, qty: number) => {
    if (qty < 1) return
    setItems(prev =>
      prev.map(i => i.productId === productId && i.size === size ? { ...i, qty } : i)
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0)
  const count = items.reduce((acc, i) => acc + i.qty, 0)

  return (
    <Ctx.Provider value={{ items, addItem, removeItem, updateQty, clear, total, count }}>
      {children}
    </Ctx.Provider>
  )
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
