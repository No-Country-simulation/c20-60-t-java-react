import { Button, FormControl, FormField, FormItem, FormLabel, FormMessage, Popover, PopoverContent, PopoverTrigger } from '@/components/ui'
import { cn } from '@/lib/utils'
import { useFormContext } from 'react-hook-form'

export function ImageField() {
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name="petPhoto"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Foto de la mascota</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                  <span>Cargar una foto</span>
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start"></PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
