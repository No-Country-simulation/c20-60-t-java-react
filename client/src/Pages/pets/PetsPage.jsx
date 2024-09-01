import { useGetPets } from '@/hooks/useGetPets'
import { PetsPageLayout } from '@/layout'
import { PetsLoader } from './petCard/PetCardLoader'
import { PetsGrid } from './PetsGrid'
import { useState } from 'react'

export function PetsPage() {
  const [filters, setFilter] = useState({
    raza: '',
    tamaño: '',
    sexo: '',
    edad: '',
    vacunado: '',
    esterilizado: ''
  })
  const { pets, isError, isLoading, refetch } = useGetPets(filters)

  const handleUpdateFilter = (field, value) => {
    setFilter((prevState) => {
      const newState = { ...prevState }
      newState[field] = value

      return newState
    })
  }

  const handleApplyFilters = (event) => {
    event.preventDefault()
    refetch(filters)
  }

  return (
    <PetsPageLayout>
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
