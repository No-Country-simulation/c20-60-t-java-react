import { z } from 'zod'

export const addPetFormSchema = z.object({
  name: z.string().min(3, "El nombre debe tener minimo 3 letras"),
  specie: z.string(),
  sex: z.string().max(6, "El sexo solo puede ser macho o hembra"),
  breed: z.string().max(20, "La raza debe tener máximo 20 letras"),
  vaccinated: z.boolean(),
  sterilized: z.boolean(),
  // size: z.string().max(7, "El tamaño solo puede ser pequeño, mediano o grande"),
  // image: z.instanceOf(File)
})

export const defaultValues = {
  name: '',
  sexo: '',
  raza: '',
  vacunado: false,
  esterilizado: false
}
