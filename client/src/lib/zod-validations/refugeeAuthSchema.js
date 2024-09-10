import { z } from 'zod'

export const refugeeLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'La contraseña debe ser de al menos 6 carácteres').max(25, 'La contraseña no puede tener mas de 25 caracteres')
})

export const refugeeSignupSchema = refugeeLoginSchema.extend({
  typeUser: z.string().min(1),
  firstName: z
    .string()
    .trim()
    .min(3, 'Primer nombre muy corto')
    .max(50, 'Primer nombre muy largo')
    .regex(/^[a-zA-Z\s]+$/, 'No se admiten caracteres invalidos'),
  lastName: z
    .string()
    .trim()
    .regex(/^[a-zA-Z\s]+$/, 'No se admiten caracteres invalidos')
    .min(3, 'Apellido muy corto')
    .max(50, 'Apellido muy largo')
})

export const defaultLoginValues = {
  email: '',
  password: ''
}

export const defaultSignupValues = { ...defaultLoginValues, typeUser: undefined, firstName: '', lastName: '' }
