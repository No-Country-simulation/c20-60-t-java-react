import { z } from 'zod'

export const addPetFormSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener minimo 3 letras'),
  specie: z.string().min(1, 'La especie debe estar definida'),
  sex: z.string().max(6, 'El sexo solo puede ser macho o hembra').min(1, 'El sexo debe estar definido'),
  breed: z.string().max(50, 'La raza debe tener máximo 50 letras').min(4, 'La raza debe estar definida'),
  size: z.string().max(7, 'El tamaño solo puede ser pequeño, mediano o grande').min(4, 'El tamaño debe estar definido'),
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
