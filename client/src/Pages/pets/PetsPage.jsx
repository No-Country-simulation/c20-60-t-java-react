import { useGetPets } from '@/hooks/useGetPets'
import { usePetFilter } from '@/hooks/usePetFilter'
import { PetsPageLayout } from '@/layout'
import { PetsGrid } from './PetsGrid'
import { PetsNotFound } from './PetsNotFound'
import { PetsLoader } from './petCard/PetCardLoader'

export function PetsPage() {
  const { filters } = usePetFilter()
  const { pets, isError, refetch, isFetching } = useGetPets(filters)

  const handleApplyFilters = () => {
    refetch(filters)
  }

  return (
    <PetsPageLayout onRefetch={handleApplyFilters}>
      {isError && <PetsError />}
      {!isError && isFetching && <PetsLoader />}
      {!isError && !isFetching && (pets.length ? <PetsGrid pets={pets} /> : <PetsNotFound />)}
    </PetsPageLayout>
  )
}

export const PetsError = () => <div>Hubo un error!</div>
