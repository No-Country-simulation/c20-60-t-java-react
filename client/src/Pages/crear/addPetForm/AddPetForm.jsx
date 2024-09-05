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
    console.log(data)
  }

  const handleChangeSex = (value) => {
    form.setValue('sexo', value)
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
          <FormLabel>Sexo</FormLabel>
          <Input onChange={(e) => handleChangeSex(e.target.value)} name="sexo" type="radio" value="macho" />
          <Input onChange={(e) => handleChangeSex(e.target.value)} name="sexo" type="radio" value="hembra" />
          <FormDescription>Sexo de la mascota</FormDescription>
          <FormMessage />
        </FormItem>
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
        <Button>enviar</Button>
      </form>
    </Form>
  )
}
