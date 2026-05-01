import { Router } from 'express'
import Contact from '../models/Contact.js'
import { protect, adminOnly } from '../middleware/auth.js'

const router = Router()

// POST /api/contact  (public)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, occasion, message } = req.body
    if (!name || !email || !occasion || !message)
      return res.status(400).json({ error: 'Faltan campos obligatorios' })

    const msg = await Contact.create({ name, email, phone, occasion, message })
    res.status(201).json({ message: 'Mensaje enviado con éxito', id: msg._id })
  } catch (err: unknown) {
    res.status(500).json({ error: (err as Error).message })
  }
})

// GET /api/contact  (admin only)
router.get('/', protect, adminOnly, async (req, res) => {
  const { status, page = 1, limit = 20 } = req.query
  const filter: Record<string, unknown> = {}
  if (status) filter.status = status
  const total    = await Contact.countDocuments(filter)
  const messages = await Contact.find(filter).sort({ createdAt: -1 }).skip((+page - 1) * +limit).limit(+limit)
  res.json({ messages, total })
})

// PATCH /api/contact/:id  (admin only)
router.patch('/:id', protect, adminOnly, async (req, res) => {
  const msg = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!msg) return res.status(404).json({ error: 'Mensaje no encontrado' })
  res.json(msg)
})

export default router
