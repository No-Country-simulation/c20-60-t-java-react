import { z } from 'zod'

export const adotpFormSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }).max(50, { message: 'El nombre es muy largo' }),
  location: z.string().min(5, { message: 'Dirección inválida' }),
  message: z.string().min(3, { message: 'El mensaje debe estar definido' }).max(250, { message: 'El mensaje es muy largo' }),
  phone_number: z.coerce.number().refine(
    (phone) => {
      const phoneStringified = phone.toString()
      return phoneStringified.length > 5 && phoneStringified.length < 20
    },
    { message: 'Numero telefónico invalido' }
  )
})

export const defaultValues = {
  email: '',
  name: '',
  location: '',
  phone_number: '',
  message: ''
}
