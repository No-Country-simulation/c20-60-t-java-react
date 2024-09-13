import { useGetAdoptablePets } from '@/hooks'
import { usePetFilter } from '@/hooks/usePetFilter'
import { PetsPageLayout } from '@/layout'
import { AnimatePresence } from 'framer-motion'
import { PetsError } from './PetsError'
import { PetsGrid } from './PetsGrid'
import { PetsNotFound } from './PetsNotFound'
import { PetsLoader } from './petCard/PetCardLoader'

export function PetsPage() {
  const { isError, isFetching, refetch } = useGetAdoptablePets()
  const { filteredPets } = usePetFilter()

  return (
    <PetsPageLayout>
      <AnimatePresence>
        {isError && <PetsError onRefetch={refetch} />}
        {!isError && isFetching && <PetsLoader />}
        {!isError && !isFetching && (filteredPets?.length ? <PetsGrid /> : <PetsNotFound />)}
      </AnimatePresence>
    </PetsPageLayout>
  )
}
