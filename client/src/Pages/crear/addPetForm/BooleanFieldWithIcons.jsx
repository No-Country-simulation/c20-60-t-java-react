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
                      className={`w-full cursor-pointer hover:-translate-y-1 transition bg-accent flex justify-center items-center rounded-lg p-2 ${
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
