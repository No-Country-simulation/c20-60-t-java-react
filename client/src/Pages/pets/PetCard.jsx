import { Badge } from '@/components/ui/badge'
import { Text } from '@/components/ui/text'
import { Link } from 'react-router-dom'

export function PetCard() {
  return (
    <li className="bg-secondary rounded-lg list-none flex flex-col gap-3 p-3">
      <figure className="h-[167px] overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover bg-neutral-300" src="" alt="pet image" />
      </figure>
      <section className="flex gap-2">
        {['gato', 'pequeño', 'vacunado'].map((n) => (
          <Badge key={n}>{n}</Badge>
        ))}
      </section>
      <section className="flex flex-col gap-2">
        <p>Información sobre mi:</p>
        <p>Michino es un gatito de apenas 4 meses, lo encontramos en la calle y es muy juguetón</p>
      </section>
      <Link className="w-fit underline" to={'#'}>
        <Text>Mostrar más</Text>
      </Link>
    </li>
  )
}
