import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui'
import { defaultSignupValues, refugeeSignupSchema } from '@/lib/zod-validations/refugeeAuthSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export function SignupForm() {
  const form = useForm({
    resolver: zodResolver(refugeeSignupSchema),
    defaultValues: defaultSignupValues
  })

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex w-full flex-col gap-4">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del refugio</FormLabel>
              <FormControl>
                <Input placeholder="patitas peludas" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email del refugio</FormLabel>
              <FormControl>
                <Input placeholder="patitaspeludas@gmail.com" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="owner"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Responsable del refugio</FormLabel>
              <FormControl>
                <Input placeholder="Jhon Doe" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder="******" type="password" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Registrar</Button>
      </form>
    </Form>
  )
}
