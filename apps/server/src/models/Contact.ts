import mongoose, { Schema, Document } from 'mongoose'

export interface IContact extends Document {
  name: string
  email: string
  phone?: string
  occasion: string
  message: string
  status: 'pending' | 'read' | 'replied'
}

const ContactSchema = new Schema<IContact>({
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, lowercase: true },
  phone:    { type: String },
  occasion: { type: String, required: true },
  message:  { type: String, required: true, minlength: 10 },
  status:   { type: String, enum: ['pending', 'read', 'replied'], default: 'pending' },
}, { timestamps: true })

export default mongoose.model<IContact>('Contact', ContactSchema)
