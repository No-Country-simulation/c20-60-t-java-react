import { Grid } from '@/components/ui/grid'
import { PetCard } from './petCard'
import { PetsPagination } from './PetsPagination'
import { AnimatePresence } from 'framer-motion'
import { MotionItem } from '@/components/ui/motion-item'

export function PetsGrid({ pets }) {
  return (
    <>
      <Grid>
        <AnimatePresence mode="popLayout" initial={false}>
          {pets?.map((pet) => (
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
