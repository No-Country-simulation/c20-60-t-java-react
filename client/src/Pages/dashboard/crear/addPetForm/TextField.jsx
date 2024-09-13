import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input, FormDescription } from '@/components/ui'
import { useFormContext } from 'react-hook-form'

export function TextField({ field, label, description, placeholder }) {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
