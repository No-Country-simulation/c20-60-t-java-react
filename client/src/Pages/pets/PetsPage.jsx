import { useGetPets } from '@/hooks/useGetPets'
import { usePetFilter } from '@/hooks/usePetFilter'
import { PetsPageLayout } from '@/layout'
import { PetsGrid } from './PetsGrid'
import { PetsNotFound } from './PetsNotFound'
import { PetsLoader } from './petCard/PetCardLoader'
import { AnimatePresence } from 'framer-motion'

export function PetsPage() {
  const { pets, isError, isFetching } = useGetPets()
  const { filterPets, filteredPets } = usePetFilter(pets)

  return (
    <PetsPageLayout onRefetch={filterPets}>
      <AnimatePresence>
        {isError && <PetsError />}
        {!isError && isFetching && <PetsLoader />}
        {!isError && !isFetching && (filteredPets.length ? <PetsGrid pets={filteredPets} /> : <PetsNotFound />)}
      </AnimatePresence>
    </PetsPageLayout>
  )
}

export const PetsError = () => <div>Hubo un error!</div>
