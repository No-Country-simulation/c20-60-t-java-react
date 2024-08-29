import { Badge } from '@/components/ui/badge'
import { Text } from '@/components/ui/text'
import { PET_PLACEHOLDER_IMAGE } from '@/data/constants'
import { Link } from 'react-router-dom'

export function PetCard({ name, age, thumbnail, labels, id, description }) {
  const image = thumbnail.length ? thumbnail : PET_PLACEHOLDER_IMAGE

  return (
    <li className="bg-secondary rounded-card list-none flex flex-col gap-3 p-3">
      <figure className="relative h-[167px] overflow-hidden rounded-2xl">
        <div className="absolute bg-gradient-to-t from-black/50 via-transparent to-transparent  flex items-end inset-0 p-2">
          <Text className={'text-primary-foreground'} variant={'details'}>
            {name + ', ' + age}
          </Text>
        </div>
        <img draggable={'false'} className="w-full h-full object-cover bg-neutral-300" src={image} alt="pet image" />
      </figure>
      <section className="flex flex-wrap gap-2">
        {labels.map((label) => (
          <Badge key={label}>{label}</Badge>
        ))}
      </section>
      <section className="flex flex-col gap-2">
        <Text variant={'details'}>Información sobre mi:</Text>
        <Text>{description}</Text>
      </section>
      <Link className="w-fit underline" to={`/pets/${id}`}>
        <Text>Mostrar más</Text>
      </Link>
    </li>
  )
}
