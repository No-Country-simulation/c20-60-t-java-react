import { requestAPI } from '@/api'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { adotpFormSchema, defaultValues } from '@/lib/zod-validations/adoptFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export function AdotpForm({ onSend }) {
  const { id } = useParams()

  const form = useForm({
    resolver: zodResolver(adotpFormSchema),
    defaultValues
  })

  const handleSubmit = (data) => {
    requestAPI
      .create({ ...data, pet: id })
      .then(() => {
        form.reset()
        onSend()
      })
      .catch(() => {
        toast({ title: 'Oops...', description: 'Hubo un error, vuelve a intentar!' })
      })
  }

  return (
    <Form {...form}>
      <form className="flex w-[800px] flex-col gap-12" onSubmit={form.handleSubmit(handleSubmit)}>
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
          <FormField
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Input placeholder="Puedo brindarle calidad de vida" {...field} />
                </FormControl>
                <FormDescription>Contamos por que queres adoptar a esta mascota.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <Button disabled={form.formState.isSubmitting} className="mx-auto w-fit min-w-[300px] px-4 py-2">
          Adoptar
        </Button>
      </form>
    </Form>
  )
}
