import { Card } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { PET_PLACEHOLDER_IMAGE } from '@/data/constants'
import { Link } from 'react-router-dom'
import { PetCardHeader, PetCardInfo, PetCardLabelsGroup } from './index'

export function PetCard({ name, age, thumbnail, labels, id, description }) {
  const image = thumbnail.length ? thumbnail : PET_PLACEHOLDER_IMAGE

  return (
    <Card className="flex flex-col gap-3 p-3">
      <PetCardHeader name={name} age={age} image={image} />
      <PetCardLabelsGroup labels={labels} />
      <PetCardInfo description={description} />
      <Link className="w-fit underline" to={`/mascotas/${id}`}>
        <Text>Mostrar más</Text>
      </Link>
    </Card>
  )
}
