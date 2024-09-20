import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui'
import { useAuth } from '@/hooks'
import { defaultLoginValues, refugeeLoginSchema } from '@/lib/zod-validations/refugeeAuthSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export function LoginForm() {
  const { loginAction } = useAuth()
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(refugeeLoginSchema),
    defaultValues: defaultLoginValues
  })

  const handleSubmit = (data) => {
    console.log(data)
    loginAction(data, navigate)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex w-full flex-col gap-4">
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
        <Button>Iniciar sesión</Button>
      </form>
    </Form>
  )
}
