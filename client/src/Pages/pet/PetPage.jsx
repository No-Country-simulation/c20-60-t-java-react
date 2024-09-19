import { CarouselPets } from '@/components/common/CarouselPets'
import { useGetPet } from '@/hooks/useGetPet'
import { useParams } from 'react-router-dom'
import { DialogForm } from './DialogForm'
import './PetPageStyle.css'

export function PetPage() {
  const { id } = useParams()
  const { isError, isFetching, pet } = useGetPet({ id })

  if (isError) {
    return <div>Hubo un error</div>
  }

  if (isFetching) {
    return <div>Cargando...</div>
  }

  return (
    <section className="section p-4">
      <section className="pet-page main flex flex-col items-center gap-8 lg:flex-row lg:items-start">
        <div className="flex w-full justify-center lg:w-1/2">
          <CarouselPets images={[pet.thumbnail]} species={pet.species} />
        </div>

        <div className="card w-full p-4 lg:w-1/2">
          <div className="info">
            <ul className="pet-details space-y-2">
              <li>
                <strong>Nombre:</strong> {pet.name}
              </li>
              <li>
                <strong>Raza:</strong> {pet.breed}
              </li>
              <li>
                <strong>Tamaño:</strong> {pet.size}
              </li>
              <li>
                <strong>Sexo:</strong> {pet.sex}
              </li>
              <li>
                <strong>Edad:</strong> {pet.age}
              </li>
              <li>
                <strong>Esterilizado:</strong> {pet.sterilized ? 'Si' : 'No'}
              </li>
              <li>
                <strong>Vacunado:</strong> {pet.vaccinated ? 'Si' : 'No'}
              </li>
              <li className="last">
                <strong>Ubicación:</strong> {pet.shelter.location}
              </li>
            </ul>
            <h2 className="mt-4">Información sobre mí:</h2>
            <p className="mt-2">{pet.description}</p>

            <DialogForm />
          </div>
        </div>
      </section>
    </section>
  )
}
