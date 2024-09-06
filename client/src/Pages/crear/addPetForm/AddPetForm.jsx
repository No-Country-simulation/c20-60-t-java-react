import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui/index'
import { addPetFormSchema, defaultValues } from '@/lib/zod-validations/addPetFormSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function AddPetForm() {
  const form = useForm({
    resolver: zodResolver(addPetFormSchema),
    defaultValues
  })

  const handleSubmit = (data) => {
    console.log('CREANDO MASCOTA')
    console.log(data)
  }
  
  const handleChangeSex = (value) => {
    form.setValue('sex', value)
  }
  
  const handleToggleVacunado = (value) => {
    form.setValue('vaccinated', value)
  }

  const handleToggleEsterilizado = (value) => {
    form.setValue('sterilized', value)
  }

  const handleChangeSpecie = (value) => {
    form.setValue('specie', value)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="rocco" {...field} />
              </FormControl>
              <FormDescription>Nombre de la mascota</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Especie</FormLabel>
          <Input onChange={(e) => handleChangeSpecie(e.target.value)} name="specie" type="radio" value={'perro'} />
          <Input onChange={(e) => handleChangeSpecie(e.target.value)} name="specie" type="radio" value={'gato'} />
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Sexo</FormLabel>
          <Input onChange={(e) => handleChangeSex(e.target.value)} name="sex" type="radio" value="macho" />
          <Input onChange={(e) => handleChangeSex(e.target.value)} name="sex" type="radio" value="hembra" />
          <FormDescription>Sexo de la mascota</FormDescription>
          <FormMessage />
        </FormItem>
        {/* <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tamaño</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tamaño de la mascota" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["pequeño", "mediano", "grande"].map(size => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormItem>
          <FormLabel>Vacunado</FormLabel>
          <Input onChange={(e) => handleToggleVacunado(e.target.value)} name="vaccinated" type="radio" value={true} />
          <Input onChange={(e) => handleToggleVacunado(e.target.value)} name="vaccinated" type="radio" value={false} />
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Esterilizado</FormLabel>
          <Input onChange={(e) => handleToggleEsterilizado(e.target.value)} name="sterilized" type="radio" value={true} />
          <Input onChange={(e) => handleToggleEsterilizado(e.target.value)} name="sterilized" type="radio" value={false} />
          <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name="breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Raza</FormLabel>
              <FormControl>
                <Input placeholder="Labrador" {...field} />
              </FormControl>
              <FormDescription>Raza de la mascota</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>enviar</Button>
      </form>
    </Form>
  )
}
