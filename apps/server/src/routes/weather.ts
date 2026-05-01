import { Router } from 'express'
import axios from 'axios'

const router = Router()

// GET /api/weather?city=Santo+Domingo
router.get('/', async (req, res) => {
  const city = req.query.city as string
  if (!city?.trim()) return res.status(400).json({ error: 'Parámetro city requerido' })

  const key = process.env.OPENWEATHER_API_KEY
  if (!key) return res.status(503).json({ error: 'API key de clima no configurada' })

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric&lang=es`
    const { data } = await axios.get(url)
    res.json(data)
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response?.status === 404)
      return res.status(404).json({ error: 'Ciudad no encontrada' })
    res.status(500).json({ error: 'Error al consultar el clima' })
  }
})

export default router
