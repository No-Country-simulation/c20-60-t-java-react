import {
  Button,
  Calendar,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { useFormContext } from 'react-hook-form'

export function DateField() {
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name="birthDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Fecha de Nacimiento</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                  {field.value ? format(field.value, 'PPP') : <span>Selecciona una fecha</span>}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>El año de nacimiento se usará para calcular la edad</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
