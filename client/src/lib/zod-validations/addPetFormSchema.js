import { z } from 'zod'

export const addPetFormSchema = z.object({
  name: z.string(),
  sexo: z.string(),
  raza: z.string(),
  vacunado: z.boolean(),
  esterilizado: z.boolean()
})

export const defaultValues = {
  name: '',
  sexo: '',
  raza: '',
  vacunado: false,
  esterilizado: false
}
