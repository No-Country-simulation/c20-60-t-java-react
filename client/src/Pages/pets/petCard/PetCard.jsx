import { Card } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { Link } from 'react-router-dom'
import { PetCardHeader, PetCardInfo, PetCardLabelsGroup } from './index'

export function PetCard({ name, age, thumbnail, labels, id, description, species }) {
  return (
    <Card className="flex h-full flex-col gap-3 p-3">
      <PetCardHeader name={name} age={age} image={thumbnail} species={species} />
      {/* <PetCardLabelsGroup labels={labels} /> */}
      <PetCardInfo description={description} />
      <Link className="mt-auto w-fit underline transition hover:translate-y-[-2px]" to={`/mascotas/${id}`}>
        <Text>Mostrar más</Text>
      </Link>
    </Card>
  )
}
