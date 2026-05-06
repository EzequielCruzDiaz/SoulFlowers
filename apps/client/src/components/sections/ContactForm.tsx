'use client'

import { useState, useRef } from 'react'
import api from '@/services/api'

interface FormState {
  name: string; email: string; phone: string; occasion: string; message: string; consent: boolean
}
interface FieldErrors {
  name?: string; email?: string; phone?: string; occasion?: string; message?: string; consent?: string
}
type Status = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [form, setForm]     = useState<FormState>({ name:'', email:'', phone:'', occasion:'', message:'', consent:false })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const statusRef           = useRef<HTMLDivElement>(null)

  const validate = (f: FormState): FieldErrors => {
    const e: FieldErrors = {}
    if (!f.name.trim() || f.name.trim().length < 2) e.name = 'El nombre debe tener al menos 2 caracteres.'
    if (!EMAIL_RE.test(f.email)) e.email = 'Introduce un email válido.'
    if (!f.occasion) e.occasion = 'Por favor selecciona una ocasión.'
    if (!f.message.trim() || f.message.trim().length < 10) e.message = 'El mensaje debe tener al menos 10 caracteres.'
    if (!f.consent) e.consent = 'Debes aceptar los términos para continuar.'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setForm(prev => ({ ...prev, [name]: val }))
    if (errors[name as keyof FieldErrors]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) {
      const firstField = document.querySelector<HTMLElement>('[aria-invalid="true"]')
      firstField?.focus()
      return
    }
    setStatus('loading')
    try {
      await api.post('/api/contact', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        occasion: form.occasion,
        message: form.message,
      })
      setStatus('success')
      setForm({ name:'', email:'', phone:'', occasion:'', message:'', consent:false })
    } catch {
      setStatus('error')
    }
  }

  const fieldProps = (name: keyof FieldErrors) => ({
    name,
    id: name,
    'aria-invalid': !!errors[name],
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `field-input ${errors[name] ? 'border-red-400 focus:ring-red-400' : ''}`,
  })

  return (
    <section id="contacto" aria-labelledby="contact-title" className="py-20 bg-white">
      <div className="container-xl max-w-2xl">
        <div className="text-center mb-12">
          <h2 id="contact-title" className="section-title">Haz tu pedido</h2>
          <p className="section-subtitle mx-auto">Cuéntanos qué necesitas y te preparamos el arreglo perfecto.</p>
        </div>

        <div ref={statusRef} aria-live="polite" aria-atomic="true">
          {status === 'success' && (
            <div role="alert" className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-sm font-medium">
              ✅ ¡Tu pedido fue enviado! Te contactaremos en breve.
            </div>
          )}
          {status === 'error' && (
            <div role="alert" className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm font-medium">
              ❌ Ocurrió un error. Intenta de nuevo.
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6 card p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="field-label">Nombre completo *</label>
              <input type="text" {...fieldProps('name')} value={form.name} onChange={handleChange} placeholder="Tu nombre" minLength={2} required autoComplete="name" />
              {errors.name && <p id="name-error" className="field-error" role="alert">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="field-label">Correo electrónico *</label>
              <input type="email" {...fieldProps('email')} value={form.email} onChange={handleChange} placeholder="tu@email.com" required autoComplete="email" />
              {errors.email && <p id="email-error" className="field-error" role="alert">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="field-label">Teléfono (opcional)</label>
              <input type="tel" name="phone" id="phone" value={form.phone} onChange={handleChange} placeholder="+1 809 555 0000" className="field-input" autoComplete="tel" />
            </div>
            <div>
              <label htmlFor="occasion" className="field-label">Ocasión *</label>
              <select {...fieldProps('occasion')} value={form.occasion} onChange={handleChange} required>
                <option value="">Selecciona una ocasión</option>
                <option value="cumpleanos">Cumpleaños</option>
                <option value="aniversario">Aniversario</option>
                <option value="boda">Boda</option>
                <option value="condolencias">Condolencias</option>
                <option value="otro">Otro</option>
              </select>
              {errors.occasion && <p id="occasion-error" className="field-error" role="alert">{errors.occasion}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="field-label">Mensaje o detalles *</label>
            <textarea {...fieldProps('message')} value={form.message} onChange={handleChange} rows={4} placeholder="Cuéntanos colores, flores preferidas, fecha de entrega, dirección…" minLength={10} required className={`field-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`} />
            {errors.message && <p id="message-error" className="field-error" role="alert">{errors.message}</p>}
          </div>

          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={form.consent}
                onChange={handleChange}
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
                className="mt-0.5 w-5 h-5 rounded accent-primary-600"
              />
              <span className="text-sm text-neutral-600">
                Acepto los <a href="#" className="text-primary-600 underline hover:text-primary-800">términos y condiciones</a> y la política de privacidad.
              </span>
            </label>
            {errors.consent && <p id="consent-error" className="field-error mt-1" role="alert">{errors.consent}</p>}
          </div>

          <button type="submit" className="btn-primary w-full" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando…' : 'Enviar pedido'}
          </button>
        </form>
      </div>
    </section>
  )
}
