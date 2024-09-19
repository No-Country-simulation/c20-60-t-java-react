import { petAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'
import { DashboardPageLayout } from '@/layout/DashboardPageLayout'
import { defaultValues } from '@/lib/zod-validations/addPetFormSchema'
import { convertDateToUnix } from '@/utils/convertDateToUnix'
import { convertFileToBase64 } from '@/utils/convertImageToBase64'
import { useNavigate } from 'react-router-dom'
import { AddPetForm } from './addPetForm/AddPetForm'
import { envs } from '@/config/envs'

export function DashAddPetPage() {
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    let firstImageBase64 = 'img1'
    let secondImageBase64 = 'img2'

    if (envs.MODE !== 'dev') {
      firstImageBase64 = await convertFileToBase64(data.firstImage)
      secondImageBase64 = await convertFileToBase64(data.secondImage)
    }

    const petData = {
      ...data,
      birthDate: convertDateToUnix(data.birthDate),
      imgURL: [firstImageBase64, secondImageBase64]
    }

    petAPI
      .create(petData)
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
