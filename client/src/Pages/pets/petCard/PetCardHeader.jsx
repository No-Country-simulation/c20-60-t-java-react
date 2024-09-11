import { Text } from '@/components/ui/text'
import { getPlaceholderImage } from '@/utils/getPlaceholderImage'

export function PetCardHeader({ name, age, image, species }) {
  const picture =
    image.length > 1 ? (
      <img draggable={'false'} className="h-full w-full bg-neutral-300 object-cover" src={image} alt="pet image" />
    ) : (
      getPlaceholderImage(species)
    )

  return (
    <figure className="relative h-[167px] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-2">
        <Text className={'text-primary-foreground'} variant={'details'}>
          {name + ', ' + age}
        </Text>
      </div>
      {picture}
    </figure>
  )
}
