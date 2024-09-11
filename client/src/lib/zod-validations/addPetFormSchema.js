import { unknown, z } from 'zod'

export const addPetFormSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener minimo 3 letras'),
  species: z.string().min(1, 'La especie debe estar definida'),
  sex: z.string().max(6, 'El sexo solo puede ser macho o hembra').min(1, 'El sexo debe estar definido'),
  breed: z.string().max(50, 'La raza debe tener máximo 50 letras').min(4, 'La raza debe estar definida'),
  description: z.string().max(150, 'La descripcion debe tener máximo 50 letras').min(5, 'Descripcion muy corta'),
  color: z.string().max(50, 'La descripcion debe tener máximo 50 letras').min(1, 'El color debe estar definido'),
  size: z.string().max(7, 'El tamaño solo puede ser pequeño, mediano o grande').min(4, 'El tamaño debe estar definido'),
  vaccinated: z.coerce.boolean(),
  sterilized: z.coerce.boolean(),
  birthDate: z.date()
  // image: z.instanceOf(File)
})

export const defaultValues = {
  name: '',
  species: '',
  sex: '',
  breed: '',
  vaccinated: false,
  sterilized: false,
  size: '',
  birthDate: undefined
}
