import { Button } from '@/components/ui/index'
import { booleanOptions, sexOptions, specieOptions } from '@/data/constants'
import { addPetFormSchema, defaultValues } from '@/lib/zod-validations/addPetFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { BooleanField } from './BooleanField'
import { SizeField } from './SizeField'
import { TextField } from './TextField'
import { BreedField } from './BreedField'
import { BooleanFieldWithIcons } from './BooleanFieldWithIcons'

export function AddPetForm() {
  const form = useForm({
    resolver: zodResolver(addPetFormSchema),
    defaultValues
  })

  const handleSubmit = (data) => {
    console.log(data)
    form.reset()
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 p-12 bg-secondary rounded-md border">
        <TextField field={'name'} label={'Nombre'} placeholder={'Rocco'} description={'Nombre de la mascota'} />
        <BooleanFieldWithIcons field={'specie'} label={'Especie'} options={specieOptions} />
        <BooleanFieldWithIcons field={'sex'} label={'Sexo de la mascota'} options={sexOptions} />
        <SizeField />
        <BooleanField field={'sterilized'} label={'La mascota esta esterilizada?'} options={booleanOptions} />
        <BooleanField field={'vaccinated'} label={'La mascota esta vacunada?'} options={booleanOptions} />
        <BreedField />
        <Button>enviar</Button>
      </form>
    </FormProvider>
  )
}
