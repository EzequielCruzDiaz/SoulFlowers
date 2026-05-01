'use client'

import { useState } from 'react'
import axios from 'axios'

interface WeatherData {
  name: string
  main: { temp: number; humidity: number }
  weather: { description: string; icon: string }[]
  wind: { speed: number }
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function WeatherWidget() {
  const [city, setCity]     = useState('')
  const [data, setData]     = useState<WeatherData | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errMsg, setErrMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = city.trim()
    if (!trimmed) return

    setStatus('loading')
    setData(null)
    setErrMsg('')

    try {
      // Using backend proxy (Lab 6 integration) or direct call with env key
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY
      const url = apiKey
        ? `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(trimmed)}&appid=${apiKey}&units=metric&lang=es`
        : `/api/weather?city=${encodeURIComponent(trimmed)}`  // backend proxy (Lab 6)

      const { data: weather } = await axios.get<WeatherData>(url)
      setData(weather)
      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setErrMsg('Ciudad no encontrada. Intenta con otro nombre.')
      } else {
        setErrMsg('Error al obtener el clima. Verifica tu conexión.')
      }
    }
  }

  return (
    <section id="clima" aria-labelledby="weather-title" className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="container-xl max-w-2xl text-center">
        <h2 id="weather-title" className="section-title">Clima en tu ciudad</h2>
        <p className="section-subtitle mx-auto mb-10">
          Consulta el estado del tiempo para planificar tu entrega perfecta.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-3 mb-8" role="search">
          <label htmlFor="city-input" className="sr-only">Nombre de la ciudad</label>
          <input
            id="city-input"
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Ej: Santo Domingo, Madrid, Bogotá…"
            className="field-input flex-1"
            aria-label="Buscar clima por ciudad"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className="btn-primary px-6"
            disabled={status === 'loading' || !city.trim()}
          >
            {status === 'loading' ? '⏳' : '🔍'} Buscar
          </button>
        </form>

        {/* Loading */}
        {status === 'loading' && (
          <p className="text-sky-600 font-medium" aria-live="polite">Consultando el clima…</p>
        )}

        {/* Error */}
        {status === 'error' && (
          <p className="text-red-600 font-medium" role="alert">{errMsg}</p>
        )}

        {/* Result */}
        {status === 'success' && data && (
          <div className="card p-8 text-left" aria-live="polite">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-neutral-900">{data.name}</h3>
                <p className="text-neutral-500 capitalize">{data.weather[0].description}</p>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                width={80}
                height={80}
              />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-sky-50 rounded-xl p-4">
                <p className="text-3xl font-bold text-sky-600">{Math.round(data.main.temp)}°C</p>
                <p className="text-xs text-neutral-500 mt-1">Temperatura</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-4">
                <p className="text-3xl font-bold text-sky-600">{data.main.humidity}%</p>
                <p className="text-xs text-neutral-500 mt-1">Humedad</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-4">
                <p className="text-3xl font-bold text-sky-600">{data.wind.speed}</p>
                <p className="text-xs text-neutral-500 mt-1">Viento m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
