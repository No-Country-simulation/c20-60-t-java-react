import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'

const adotpFormSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  location: z.string(),
  phone_number: z.coerce.number()
})

export function AdotpForm() {
  const form = useForm({
    resolver: zodResolver(adotpFormSchema),
    defaultValues: {
      email: '',
      name: '',
      location: '',
      phone_number: undefined
    }
  })

  return (
    <Form {...form}>
      <form action="">
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Lione Messi" {...field} />
              </FormControl>
              <FormDescription>Your name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
