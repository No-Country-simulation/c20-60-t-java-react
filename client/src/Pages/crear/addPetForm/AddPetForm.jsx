import { petAPI } from '@/api'
import { Button } from '@/components/ui/index'
import { toast } from '@/components/ui/use-toast'
import { booleanOptions, sexOptions, specieOptions } from '@/data/constants'
import { addPetFormSchema, defaultValues } from '@/lib/zod-validations/addPetFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { BooleanField } from './BooleanField'
import { BooleanFieldWithIcons } from './BooleanFieldWithIcons'
import { BreedField } from './BreedField'
import { SizeField } from './SizeField'
import { TextField } from './TextField'
import { DateField } from './DateField'

export function AddPetForm() {
  const form = useForm({
    resolver: zodResolver(addPetFormSchema),
    defaultValues
  })

  const handleSubmit = (data) => {
    const birthDate = data.birthDate
    const birthTimeStamp = Math.round(birthDate.getTime()/1000)
    data.birthDate = birthTimeStamp
    
    console.log(data)
    petAPI.create(data).then(() => {
      form.reset()
      toast({ title: 'Informacion enviada', description: 'Mascota añadida!' })
    })
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 rounded-md border bg-secondary p-12">
        <TextField field={'name'} label={'Nombre'} placeholder={'Rocco'} description={'Nombre de la mascota'} />
        <BooleanFieldWithIcons field={'species'} label={'Especie'} options={specieOptions} />
        <BooleanFieldWithIcons field={'sex'} label={'Sexo de la mascota'} options={sexOptions} />
        <SizeField />
        <BooleanField field={'sterilized'} label={'La mascota esta esterilizada?'} options={booleanOptions} />
        <BooleanField field={'vaccinated'} label={'La mascota esta vacunada?'} options={booleanOptions} />
        <TextField
          field={'description'}
          label={'Descripcion'}
          placeholder={'Rocco es un perro muy hiperactivo!'}
          description={'Descripcion de la mascota'}
        />
        <TextField field={'color'} label={'Color'} placeholder={'marmolado'} description={'Nombre de la mascota'} />
        <BreedField />
        <DateField />
        <Button>enviar</Button>
      </form>
    </FormProvider>
  )
}
