import { useGetPets } from '@/hooks/useGetPets'
import { usePetFilter } from '@/hooks/usePetFilter'
import { PetsPageLayout } from '@/layout'
import { PetsGrid } from './PetsGrid'
import { PetsNotFound } from './PetsNotFound'
import { PetsLoader } from './petCard/PetCardLoader'
import { AnimatePresence } from 'framer-motion'

export function PetsPage() {
  const { isError, isFetching } = useGetPets()
  const { filteredPets } = usePetFilter()

  return (
    <PetsPageLayout>
      <AnimatePresence>
        {isError && <PetsError />}
        {!isError && isFetching && <PetsLoader />}
        {!isError && !isFetching && (filteredPets?.length ? <PetsGrid /> : <PetsNotFound />)}
      </AnimatePresence>
    </PetsPageLayout>
  )
}

export const PetsError = () => <div>Hubo un error!</div>
