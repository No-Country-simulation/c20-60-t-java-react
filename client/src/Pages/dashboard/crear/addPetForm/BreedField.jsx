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
import { useFormContext } from 'react-hook-form'
import { razasPerro, razasGato } from '@/data/constants'

export function BreedField() {
  const form = useFormContext()
  let breeds
  const selectedSpecie = form.watch('species')

  if (selectedSpecie) {
    breeds = selectedSpecie === 'dog' ? razasPerro : razasGato
  }

  return (
    <FormField
      control={form.control}
      name="breed"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Raza</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue
                  placeholder={form.getValues('species') ? 'Selecciona la raza de la mascota' : 'Primero Selecciona el especie de la mascota'}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {breeds?.map((breed) => (
                <SelectItem key={breed} value={breed}>
                  {breed}
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