import { z } from 'zod'

export const refugeeLoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const refugeeSignupSchema = refugeeLoginSchema.extend({
  owner: z.string(),
  name: z.string()
})

export const defaultLoginValues = {
  email: '',
  password: ''
}

export const defaultSignupValues = { ...defaultLoginValues, owner: '', name: '' }
