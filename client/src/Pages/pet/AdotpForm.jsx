import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { adotpFormSchema } from '@/lib/zod-validations/adoptFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

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
    toast({ title: 'Formulario enviado con exito!', description: 'Gracias por decidir adoptar!' })
    form.reset()
  }

  return (
    <Form {...form}>
      <form action="" className="w-[800px] flex flex-col gap-12" onSubmit={form.handleSubmit(handleSubmit)}>
        <section className="grid grid-cols-2 gap-10">
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
        </section>
        <Button className="w-fit mx-auto min-w-[300px] py-2 px-4">Adoptar</Button>
      </form>
    </Form>
  )
}
