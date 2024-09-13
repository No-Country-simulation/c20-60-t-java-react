import { petAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'
import { DashboardPageLayout } from '@/layout/DashboardPageLayout'
import { defaultValues } from '@/lib/zod-validations/addPetFormSchema'
import { useNavigate } from 'react-router-dom'
import { AddPetForm } from './addPetForm/AddPetForm'

export function DashAddPetPage() {
  const navigate = useNavigate()

  const handleSubmit = (data) => {
    petAPI
      .create(data)
      .then((response) => {
        toast({ title: 'Informacion enviada', description: 'Mascota añadida!' })
        navigate({ pathname: '/mascotas/' + response.pet.id })
      })
      .catch((err) => {
        toast({ title: 'Oops...', description: err.message })
      })
  }

  return (
    <DashboardPageLayout title="Añadir mascota">
      <AddPetForm defaultValues={defaultValues} onSubmit={handleSubmit} />
    </DashboardPageLayout>
  )
}