import { Router } from 'express'
import Product from '../models/Product.js'
import { protect, adminOnly } from '../middleware/auth.js'

const router = Router()

// GET /api/products  (public)
router.get('/', async (req, res) => {
  try {
    const { category, page = 1, limit = 9 } = req.query
    const filter: Record<string, unknown> = { isActive: true }
    if (category) filter.category = category

    const total    = await Product.countDocuments(filter)
    const products = await Product.find(filter)
      .skip((+page - 1) * +limit)
      .limit(+limit)
      .sort({ createdAt: -1 })

    res.json({ products, total, page: +page, totalPages: Math.ceil(total / +limit) })
  } catch {
    res.status(500).json({ error: 'Error al obtener productos' })
  }
})

// GET /api/products/:id (public)
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' })
  res.json(product)
})

// POST /api/products (admin only)
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (err: unknown) {
    res.status(400).json({ error: (err as Error).message })
  }
})

// PATCH /api/products/:id (admin only)
router.patch('/:id', protect, adminOnly, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' })
  res.json(product)
})

// DELETE /api/products/:id — soft delete (admin only)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, { isActive: false })
  res.json({ message: 'Producto desactivado' })
})

export default router
