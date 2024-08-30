import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const adotpFormSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }).max(50, { message: 'El nombre es muy largo' }),
  location: z.string().min(5, { message: 'Dirección inválida' }),
  phone_number: z.coerce.number().refine(
    (phone) => {
      const phoneStringified = phone.toString()
      return phoneStringified.length > 5 && phoneStringified.length < 20
    },
    { message: 'Numero telefónico invalido' }
  )
})

export function AdotpForm() {
  const form = useForm({
    resolver: zodResolver(adotpFormSchema),
    defaultValues: {
      email: '',
      name: '',
      location: '',
      phone_number: ''
    }
  })

  const handleSubmit = (data) => {
    console.log(data)
    form.reset()
  }

  return (
    <Form {...form}>
      <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Lionel Messi" {...field} />
              </FormControl>
              <FormDescription>Tu nombre.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormDescription>Tu email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input placeholder="Buenos Aires, Capital" {...field} />
              </FormControl>
              <FormDescription>Tu dirección.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número telefónico</FormLabel>
              <FormControl>
                <Input placeholder="1126157262" type="number" {...field} />
              </FormControl>
              <FormDescription>Tu número telefónico.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Enviar</Button>
      </form>
    </Form>
  )
}
