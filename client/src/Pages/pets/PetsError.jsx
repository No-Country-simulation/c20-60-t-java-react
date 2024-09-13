import { CatIcon } from '@/components/icons/CatIcon'
import { Text, Button } from '@/components/ui'
import { MotionItem } from '@/components/ui/motion-item'

export function PetsError({ onRefetch }) {
  return (
    <MotionItem className="h-full">
      <article className="ml-8 flex h-full flex-col items-center justify-center gap-4 rounded-lg bg-secondary p-4 text-accent">
        <CatIcon />
        <Text className="max-w-[380px] text-center" variant="title">
          Hubo un error al obtener las mascotas
        </Text>
        <Button onClick={onRefetch}>Reintentar</Button>
      </article>
    </MotionItem>
  )
}
