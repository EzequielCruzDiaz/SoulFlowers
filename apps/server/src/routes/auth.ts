import { Router } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { protect, AuthRequest } from '../middleware/auth.js'

const router = Router()

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password)
      return res.status(400).json({ error: 'Todos los campos son obligatorios' })

    const exists = await User.findOne({ email })
    if (exists) return res.status(409).json({ error: 'El email ya está registrado' })

    const user = await User.create({ name, email, password })
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '7d' })
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } })
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ error: 'Credenciales inválidas' })

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '7d' })
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } })
  } catch {
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

// GET /api/auth/me  (protected)
router.get('/me', protect, async (req: AuthRequest, res) => {
  const user = await User.findById(req.user!.id).select('-password')
  res.json(user)
})

export default router
