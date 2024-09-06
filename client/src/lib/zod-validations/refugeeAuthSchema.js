import { z } from 'zod'

export const refugeeLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'La contraseña debe ser de al menos 6 carácteres').max(25, 'La contraseña no puede tener mas de 25 caracteres')
})

export const refugeeSignupSchema = refugeeLoginSchema.extend({
  owner: z
    .string()
    .trim()
    .min(4, 'Nombre del propietario muy corto')
    .max(50, 'Nobre del propietario muy largo')
    .regex(/^[a-zA-Z\s]+$/, 'No se admiten caracteres invalidos'),
  name: z
    .string()
    .trim()
    .regex(/^[a-zA-Z\s]+$/, 'No se admiten caracteres invalidos')
    .min(5, 'El nombre del refugio debe tener al menos 5 caracteres')
    .max(50, 'El nombre de la mascota no puede tener mas de 50 caracteres')
})

export const defaultLoginValues = {
  email: '',
  password: ''
}

export const defaultSignupValues = { ...defaultLoginValues, owner: '', name: '' }
