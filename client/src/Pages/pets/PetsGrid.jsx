import { Grid } from '@/components/ui/grid'
import { PetCard } from './petCard'
import { PetsPagination } from './PetsPagination'
import { AnimatePresence } from 'framer-motion'
import { MotionItem } from '@/components/ui/motion-item'
import { usePetFilter } from '@/hooks/usePetFilter'

export function PetsGrid() {
  const { filteredPets } = usePetFilter()

  return (
    <>
      <Grid>
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredPets?.map((pet) => (
            <MotionItem key={pet.id}>
              <PetCard {...pet} />
            </MotionItem>
          ))}
        </AnimatePresence>
      </Grid>
      <PetsPagination />
    </>
  )
}
