import { useGetPets } from '@/hooks/useGetPets'
import { PetsPageLayout } from '@/layout'
import { PetsLoader } from './petCard/PetCardLoader'
import { PetsGrid } from './PetsGrid'
import { useFilterStore } from '@/store/filtersStore'

export function PetsPage() {
  const { filters } = useFilterStore()
  const { pets, isError, isLoading, refetch } = useGetPets(filters)

  const handleApplyFilters = () => {
    refetch(filters)
  }

  return (
    <PetsPageLayout onRefetch={handleApplyFilters}>
      {isError && <PetsError />}
      {!isError && isLoading && <PetsLoader />}
      {!isError && !isLoading && (pets.length ? <PetsGrid pets={pets} /> : <PetsNotFound />)}
    </PetsPageLayout>
  )
}

export const PetsError = () => <div>Hubo un error!</div>
export const PetsNotFound = () => (
  <article className="p-4 text-center bg-secondary rounded-lg">Por el momento no tenemos mascotas para ser adoptadas</article>
)
