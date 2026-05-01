import 'dotenv/config'
import mongoose from 'mongoose'
import Product from '../models/Product.js'
import User from '../models/User.js'

const PRODUCTS = [
  { name: 'Ramo Romántico Rojo',     price: 1200, category: 'ramos',    emoji: '🌹', badge: 'Más vendido', description: 'Ramo de 12 rosas rojas frescas con follaje y lazo.', stock: 20 },
  { name: 'Arreglo Tropical',         price: 1850, category: 'arreglos', emoji: '🌺', badge: 'Nuevo',       description: 'Arreglo exótico con flores tropicales de colores.', stock: 10 },
  { name: 'Bouquet de Girasoles',     price: 950,  category: 'ramos',    emoji: '🌻', badge: null,          description: 'Bouquet de 8 girasoles frescos con decoración rústica.', stock: 15 },
  { name: 'Caja de Rosas Blancas',   price: 2100, category: 'cajas',    emoji: '🤍', badge: 'Premium',     description: 'Caja de madera con 20 rosas blancas premium.', stock: 8 },
  { name: 'Mix de Temporada',         price: 1400, category: 'arreglos', emoji: '🌸', badge: null,          description: 'Arreglo variado con flores frescas de temporada.', stock: 12 },
  { name: 'Arreglo de Condolencias', price: 1600, category: 'arreglos', emoji: '💐', badge: null,          description: 'Arreglo blanco sobrio y elegante para expresar condolencias.', stock: 10 },
]

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI!)
  await Product.deleteMany({})
  await Product.insertMany(PRODUCTS)
  console.log('✅ Productos sembrados:', PRODUCTS.length)

  const admin = await User.findOne({ email: 'admin@floresdelalma.com' })
  if (!admin) {
    await User.create({ name: 'Admin', email: 'admin@floresdelalma.com', password: 'Admin1234!', role: 'admin' })
    console.log('✅ Admin creado: admin@floresdelalma.com / Admin1234!')
  }

  await mongoose.disconnect()
  process.exit(0)
}

seed().catch(err => { console.error(err); process.exit(1) })
