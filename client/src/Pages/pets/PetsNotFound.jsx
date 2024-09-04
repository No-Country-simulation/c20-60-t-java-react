import { DogIcon } from '@/components/icons/DogIcon'
import { Text } from '@/components/ui/index'

export function PetsNotFound() {
  return (
    <article className="p-4 bg-secondary rounded-lg h-full ml-8 flex items-center justify-center flex-col text-accent">
      <DogIcon />
      <Text className="max-w-[380px] text-center" variant="title">
        Por el momento no tenemos mascotas para ser adoptadas
      </Text>
    </article>
  )
}
