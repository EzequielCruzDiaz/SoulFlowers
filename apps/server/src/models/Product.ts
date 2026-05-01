import mongoose, { Schema, Document } from 'mongoose'

export interface IProduct extends Document {
  name: string
  description: string
  price: number
  category: string
  emoji: string
  badge?: string
  stock: number
  isActive: boolean
}

const ProductSchema = new Schema<IProduct>({
  name:        { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price:       { type: Number, required: true, min: 0 },
  category:    { type: String, required: true, enum: ['ramos', 'arreglos', 'cajas', 'eventos'] },
  emoji:       { type: String, default: '🌸' },
  badge:       { type: String },
  stock:       { type: Number, default: 0, min: 0 },
  isActive:    { type: Boolean, default: true },
}, { timestamps: true })

export default mongoose.model<IProduct>('Product', ProductSchema)
