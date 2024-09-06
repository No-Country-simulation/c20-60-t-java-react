import { z } from 'zod'

export const addPetFormSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener minimo 3 letras'),
  specie: z.string(),
  sex: z.string().max(6, 'El sexo solo puede ser macho o hembra'),
  breed: z.string().max(50, 'La raza debe tener máximo 50 letras').min(4, 'La raza debe estar definida'),
  size: z.string().max(7, 'El tamaño solo puede ser pequeño, mediano o grande'),
  vaccinated: z.coerce.boolean(),
  sterilized: z.coerce.boolean()
  // image: z.instanceOf(File)
})

export const defaultValues = {
  name: '',
  specie: '',
  sex: '',
  breed: '',
  vaccinated: false,
  sterilized: false,
  size: ''
}
