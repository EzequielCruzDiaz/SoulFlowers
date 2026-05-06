'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/services/api'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm]       = useState({ name: '', email: '', password: '' })
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { data } = await api.post<{ token: string }>('/api/auth/register', form)
      localStorage.setItem('token', data.token)
      router.push('/')
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { error?: string } } })?.response?.data?.error
      setError(msg ?? 'Error al registrarse. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-display font-bold text-neutral-900 text-center mb-8">Crear cuenta</h1>

        {error && (
          <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="card p-8 space-y-5">
          <div>
            <label htmlFor="name" className="field-label">Nombre completo</label>
            <input
              id="name" type="text" required minLength={2} autoComplete="name"
              className="field-input"
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email" type="email" required autoComplete="email"
              className="field-input"
              value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="password" className="field-label">Contraseña</label>
            <input
              id="password" type="password" required minLength={8} autoComplete="new-password"
              className="field-input"
              value={form.password}
              onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
            />
          </div>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'Registrando…' : 'Crear cuenta'}
          </button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-4">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-primary-600 hover:underline">Inicia sesión</a>
        </p>
      </div>
    </main>
  )
}
