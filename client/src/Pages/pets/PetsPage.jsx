import { useGetPets } from '@/hooks/useGetPets'
import { usePetFilter } from '@/hooks/usePetFilter'
import { PetsPageLayout } from '@/layout'
import { AnimatePresence } from 'framer-motion'
import { PetsLoader } from './petCard/PetCardLoader'
import { PetsNotFound } from './PetsNotFound'
import { PetsGrid } from './PetsGrid'
import { PetsError } from './PetsError'
import { useGetAdoptablePets } from '@/hooks'

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
