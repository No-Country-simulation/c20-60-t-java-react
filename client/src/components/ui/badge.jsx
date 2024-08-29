import { Text } from '@/components/ui/text'

export function Badge({ children }) {
  return (
    <span className="border border-border px-[0.5625rem] py-[0.1875rem] rounded-full">
      <Text>{children}</Text>
    </span>
  )
}
