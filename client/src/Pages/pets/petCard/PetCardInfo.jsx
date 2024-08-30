import { Text } from '@/components/ui/text'

export function PetCardInfo({ description }) {
  return (
    <section className="flex flex-col gap-2">
      <Text variant={'details'}>Información sobre mi:</Text>
      <Text>{description}</Text>
    </section>
  )
}
