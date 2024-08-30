import { PetCard } from './petCard'
import { Grid } from '@/components/ui/grid'

export function PetsGrid({ pets }) {
  return (
    <>
      <Grid>
        {pets?.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </Grid>
      <footer>{/* PAGINATION */}</footer>
    </>
  )
}
