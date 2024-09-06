import { FormControl, FormField, FormItem, FormLabel, FormMessage, RadioGroup, RadioGroupItem } from '@/components/ui'
import { useFormContext } from 'react-hook-form'

export function BooleanField({ options, label, field }) {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
              {options.map(({ text, value }) => (
                <FormItem key={text} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={value} />
                  </FormControl>
                  <FormLabel className="font-normal">{text}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
