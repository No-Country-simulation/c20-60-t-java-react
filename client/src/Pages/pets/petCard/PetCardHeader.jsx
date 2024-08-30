import { Text } from '@/components/ui/text'

export function PetCardHeader({ name, age, image }) {
  return (
    <figure className="relative h-[167px] overflow-hidden rounded-2xl">
      <div className="absolute bg-gradient-to-t from-black/50 via-transparent to-transparent  flex items-end inset-0 p-2">
        <Text className={'text-primary-foreground'} variant={'details'}>
          {name + ', ' + age}
        </Text>
      </div>
      <img draggable={'false'} className="w-full h-full object-cover bg-neutral-300" src={image} alt="pet image" />
    </figure>
  )
}
