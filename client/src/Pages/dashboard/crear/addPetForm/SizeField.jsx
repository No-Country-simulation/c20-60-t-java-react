import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui'
import { sizeOptions } from '@/data/constants'
import { useFormContext } from 'react-hook-form'

export function SizeField() {
  const form = useFormContext()

  return (
    <FormField
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
              {sizeOptions.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.text}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
