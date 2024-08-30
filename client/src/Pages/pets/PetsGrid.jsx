import { Grid } from '@/components/ui/grid'
import { PetCard } from './petCard'
import { PetsPagination } from './PetsPagination'

export function PetsGrid({ pets }) {
  return (
    <>
      <Grid>
        {pets?.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </Grid>
      <PetsPagination />
    </>
  )
}
