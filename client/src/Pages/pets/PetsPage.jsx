import { useGetPets } from '@/hooks/useGetPets'
import { PetsPageLayout } from '@/layout'
import { PetsLoader } from './petCard/PetCardLoader'
import { PetsGrid } from './PetsGrid'
import { usePetFilter } from '@/hooks/usePetFilter'

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
export const PetsNotFound = () => (
  <article className="p-4 text-center bg-secondary rounded-lg">Por el momento no tenemos mascotas para ser adoptadas</article>
)
