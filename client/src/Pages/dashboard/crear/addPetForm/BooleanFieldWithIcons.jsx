import { FormControl, FormField, FormItem, FormLabel, FormMessage, RadioGroup, RadioGroupItem, Text } from '@/components/ui'
import { useFormContext } from 'react-hook-form'

export function BooleanFieldWithIcons({ options, label, field }) {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
              {options.map(({ text, value, icon }) => (
                <FormItem key={text} className="flex flex-1">
                  <FormControl>
                    <label
                      htmlFor={value}
                      className={`flex w-full cursor-pointer items-center justify-center rounded-lg bg-accent p-2 transition hover:-translate-y-1 ${
                        field.value === value ? 'opacity-100' : 'opacity-50'
                      }`}
                    >
                      {icon}
                      <Text>{text}</Text>
                      <RadioGroupItem id={value} value={value} className="hidden" />
                    </label>
                  </FormControl>
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
