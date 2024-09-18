import { authAPI } from '@/api'
import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui'
import { toast } from '@/components/ui/use-toast'
import { defaultSignupValues, refugeeSignupSchema } from '@/lib/zod-validations/refugeeAuthSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export function SignupForm() {
  const redirect = useNavigate()
  const form = useForm({
    resolver: zodResolver(refugeeSignupSchema),
    defaultValues: defaultSignupValues
  })

  const handleSubmit = (data) => {
    authAPI.register(data).then(() => {
      form.reset()
      toast({ title: 'Shelter succesfully registered', description: 'Login with your credentials' })
      redirect({ pathname: '/auth/iniciar-sesion' })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex w-full flex-col gap-4">
        <FormField
          name="shelterName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del refugio</FormLabel>
              <FormControl>
                <Input placeholder="Patitas peludas" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="address"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Direccion</FormLabel>
              <FormControl>
                <Input placeholder="Gran Avenida 52, Kuala Lumpur" {...field} />
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
              <FormLabel>Email</FormLabel>
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
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar contraseña</FormLabel>
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
