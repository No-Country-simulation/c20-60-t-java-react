import { DogIcon } from '@/components/icons/DogIcon'
import { Text } from '@/components/ui/index'
import { MotionItem } from '@/components/ui/motion-item'

export function PetsNotFound() {
  return (
    <MotionItem className="h-full">
      <article className="ml-8 flex h-full flex-col items-center justify-center rounded-lg bg-secondary p-4 text-accent">
        <DogIcon />
        <Text className="max-w-[380px] text-center" variant="title">
          Por el momento no tenemos mascotas para ser adoptadas
        </Text>
      </article>
    </MotionItem>
  )
}
