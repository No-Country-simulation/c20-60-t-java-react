import { Text } from '@/components/ui/text'
import './petcard.css'

export function PetCardInfo({ description }) {
  return (
    <section className="flex flex-col gap-2">
      <Text variant={'details'}>Información sobre mi:</Text>
      <Text className="pet-description">{description}</Text>
    </section>
  )
}
