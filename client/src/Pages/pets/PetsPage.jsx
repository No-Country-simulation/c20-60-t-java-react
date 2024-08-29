import { useGetPets } from '@/hooks/useGetPets'
import { PetsPageLayout } from '@/layout/PetsPageLayout'
import { PetsGrid } from './PetsGrid'

export function PetsPage() {
  const { pets, isError, isLoading } = useGetPets()

  return (
    <PetsPageLayout>
      {isError && <PetsError />}
      {!isError && isLoading && <PetsLoader />}
      {!isError && !isLoading && (pets.length ? <PetsGrid pets={pets} /> : <PetsNotFound />)}
    </PetsPageLayout>
  )
}

export const PetsError = () => <div>Hubo un error!</div>
export const PetsLoader = () => <div>Cargando informacion...</div>
export const PetsNotFound = () => (
  <article className="p-4 text-center bg-secondary rounded-lg">Por el momento no tenemos mascotas para ser adoptadas</article>
)
