'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useProducts, type Product } from '@/hooks/useProducts'
import api from '@/services/api'

const EMPTY_FORM = { name: '', description: '', price: '', category: 'ramos', emoji: '🌸', badge: '', stock: '' }

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('token')) router.replace('/login')
  }, [router])

  const { products, loading, error } = useProducts()
  const [list, setList] = useState<Product[] | null>(null)
  const [editing, setEditing] = useState<Product | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [msgType, setMsgType] = useState<'success' | 'error'>('success')

  const displayed = list ?? products

  const showMsg = (text: string, type: 'success' | 'error' = 'success') => {
    setMsg(text)
    setMsgType(type)
    setTimeout(() => setMsg(''), 3000)
  }

  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  const openCreate = () => {
    setEditing(null)
    setForm(EMPTY_FORM)
    setShowForm(true)
  }

  const openEdit = (p: Product) => {
    setEditing(p)
    setForm({
      name: p.name,
      description: p.description,
      price: String(p.price),
      category: p.category,
      emoji: p.emoji,
      badge: p.badge ?? '',
      stock: String(p.stock),
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('¿Eliminar este producto?')) return
    try {
      await api.delete(`/api/products/${id}`)
      setList(prev => (prev ?? products).filter(p => p._id !== id))
      showMsg('Producto eliminado.')
    } catch {
      showMsg('No se pudo eliminar el producto.', 'error')
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const payload = {
      name: form.name,
      description: form.description,
      price: Number(form.price),
      category: form.category,
      emoji: form.emoji,
      badge: form.badge || null,
      stock: Number(form.stock),
    }
    try {
      if (editing) {
        const { data } = await api.patch<{ data: Product }>(`/api/products/${editing._id}`, payload)
        setList(prev => (prev ?? products).map(p => p._id === editing._id ? data.data : p))
        showMsg('Producto actualizado.')
      } else {
        const { data } = await api.post<{ data: Product }>('/api/products', payload)
        setList(prev => [...(prev ?? products), data.data])
        showMsg('Producto creado.')
      }
      setShowForm(false)
    } catch {
      showMsg('Error al guardar. ¿Estás autenticado como admin?', 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-display font-bold text-neutral-900">Panel de Administración</h1>
          <div className="flex gap-3">
            <button type="button" onClick={openCreate} className="btn-primary">+ Nuevo producto</button>
            <button type="button" onClick={logout} className="px-4 py-2 text-sm text-neutral-600 border border-neutral-300 rounded-lg hover:bg-neutral-100">
              Salir
            </button>
          </div>
        </header>

        {msg && (
          <div role="alert" className={`mb-4 p-3 rounded-xl text-sm border ${msgType === 'error' ? 'bg-red-50 border-red-200 text-red-800' : 'bg-green-50 border-green-200 text-green-800'}`}>
            {msg}
          </div>
        )}

        {loading && <p className="text-neutral-500">Cargando productos…</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <div className="card overflow-hidden">
            {displayed.length === 0 ? (
              <p className="px-4 py-8 text-center text-neutral-400">No hay productos. Crea el primero.</p>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-neutral-100 text-left text-neutral-600">
                  <tr>
                    <th className="px-4 py-3">Emoji</th>
                    <th className="px-4 py-3">Nombre</th>
                    <th className="px-4 py-3">Categoría</th>
                    <th className="px-4 py-3">Precio</th>
                    <th className="px-4 py-3">Stock</th>
                    <th className="px-4 py-3">Badge</th>
                    <th className="px-4 py-3">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {displayed.map(p => (
                    <tr key={p._id} className="hover:bg-neutral-50">
                      <td className="px-4 py-3 text-2xl">{p.emoji}</td>
                      <td className="px-4 py-3 font-medium text-neutral-900">{p.name}</td>
                      <td className="px-4 py-3 text-neutral-500 capitalize">{p.category}</td>
                      <td className="px-4 py-3 text-primary-700 font-semibold">RD$ {p.price.toLocaleString()}</td>
                      <td className="px-4 py-3">{p.stock}</td>
                      <td className="px-4 py-3">{p.badge ?? '—'}</td>
                      <td className="px-4 py-3 flex gap-2">
                        <button type="button" onClick={() => openEdit(p)} className="text-xs px-3 py-1 border border-neutral-300 rounded-lg hover:bg-neutral-100">
                          Editar
                        </button>
                        <button type="button" onClick={() => handleDelete(p._id)} className="text-xs px-3 py-1 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Product form modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
              <h2 className="text-lg font-semibold mb-5">{editing ? 'Editar producto' : 'Nuevo producto'}</h2>
              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label htmlFor="prod-name" className="field-label">Nombre</label>
                    <input id="prod-name" required className="field-input" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="prod-description" className="field-label">Descripción</label>
                    <textarea id="prod-description" required className="field-input resize-none" rows={2} value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
                  </div>
                  <div>
                    <label htmlFor="prod-price" className="field-label">Precio (RD$)</label>
                    <input id="prod-price" required type="number" min="0" className="field-input" value={form.price} onChange={e => setForm(p => ({ ...p, price: e.target.value }))} />
                  </div>
                  <div>
                    <label htmlFor="prod-stock" className="field-label">Stock</label>
                    <input id="prod-stock" required type="number" min="0" className="field-input" value={form.stock} onChange={e => setForm(p => ({ ...p, stock: e.target.value }))} />
                  </div>
                  <div>
                    <label htmlFor="prod-category" className="field-label">Categoría</label>
                    <select id="prod-category" className="field-input" value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}>
                      <option value="ramos">Ramos</option>
                      <option value="arreglos">Arreglos</option>
                      <option value="cajas">Cajas</option>
                      <option value="eventos">Eventos</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="prod-emoji" className="field-label">Emoji</label>
                    <input id="prod-emoji" required className="field-input" value={form.emoji} onChange={e => setForm(p => ({ ...p, emoji: e.target.value }))} />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="prod-badge" className="field-label">Badge (opcional)</label>
                    <input id="prod-badge" className="field-input" placeholder="Ej: Nuevo, Premium…" value={form.badge} onChange={e => setForm(p => ({ ...p, badge: e.target.value }))} />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="submit" className="btn-primary flex-1" disabled={saving}>
                    {saving ? 'Guardando…' : 'Guardar'}
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 text-sm">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
