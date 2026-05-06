'use client'

import { useState, useEffect } from 'react'
import api from '@/services/api'

export interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: string
  emoji: string
  badge: string | null
  stock: number
  isActive: boolean
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState<string | null>(null)

  useEffect(() => {
    api.get<{ products: Product[] }>('/api/products')
      .then(({ data }) => setProducts(data.products))
      .catch(() => setError('No se pudieron cargar los productos.'))
      .finally(() => setLoading(false))
  }, [])

  return { products, loading, error }
}
