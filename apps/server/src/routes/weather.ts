import { Router } from 'express'
import axios from 'axios'

const router = Router()

const CACHE_TTL_MS = 10 * 60 * 1000
const cache = new Map<string, { data: unknown; expiresAt: number }>()

// GET /api/weather?city=Santo+Domingo
router.get('/', async (req, res) => {
  const city = (req.query.city as string)?.trim().toLowerCase()
  if (!city) return res.status(400).json({ error: 'Parámetro city requerido' })

  const key = process.env.OPENWEATHER_API_KEY
  if (!key) return res.status(503).json({ error: 'API key de clima no configurada' })

  const cached = cache.get(city)
  if (cached && cached.expiresAt > Date.now()) {
    return res.json(cached.data)
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric&lang=es`
    const { data } = await axios.get(url)
    cache.set(city, { data, expiresAt: Date.now() + CACHE_TTL_MS })
    res.json(data)
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response?.status === 404)
      return res.status(404).json({ error: 'Ciudad no encontrada' })
    res.status(500).json({ error: 'Error al consultar el clima' })
  }
})

export default router
