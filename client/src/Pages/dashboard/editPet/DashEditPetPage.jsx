import { petAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'
import { useGetPet } from '@/hooks/useGetPet'
import { DashboardPageLayout } from '@/layout/DashboardPageLayout'
import { convertDateToUnix } from '@/utils/convertDateToUnix'
import { useParams } from 'react-router-dom'
import { AddPetForm } from '../crear/addPetForm/AddPetForm'

export function DashEditPetPage() {
  const { id } = useParams()
  const { pet, isFetching } = useGetPet({ id })

  if (isFetching) {
    return <div>Loading...</div>
  }

  const defaultValues = {
    birthDate: new Date(pet.birthDate * 1000),
    species: pet.species.toLowerCase(),
    description: pet.description,
    size: pet.size.toLowerCase(),
    sex: pet.sex.toLowerCase(),
    vaccinated: pet.vaccinated,
    sterilized: pet.sterilized,
    breed: pet.breed,
    color: pet.color,
    name: pet.name
  }

  const handleSubmit = (data) => {
    petAPI
      .update(id, { ...data, birthDate: convertDateToUnix(data.birthDate) })
      .then(() => {
        toast({ title: 'Operacion exitosa', description: 'Informacion actualizada exitosamente!' })
      })
      .catch((err) => {
        toast({ title: 'Oops...', description: err.message })
      })
  }

  return (
    <DashboardPageLayout title={'Editar mascota'}>
      <AddPetForm defaultValues={defaultValues} onSubmit={handleSubmit} />
    </DashboardPageLayout>
  )
}
