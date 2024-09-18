import { petAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'
import { DashboardPageLayout } from '@/layout/DashboardPageLayout'
import { defaultValues } from '@/lib/zod-validations/addPetFormSchema'
import { convertDateToUnix } from '@/utils/convertDateToUnix'
import { useNavigate } from 'react-router-dom'
import { AddPetForm } from './addPetForm/AddPetForm'

export function DashAddPetPage() {
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    const convertFileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => resolve(reader.result) // This will be the base64 string
        reader.onerror = reject
      })
    }

    const firstImageBase64 = await convertFileToBase64(data.firstImage)
    const secondImageBase64 = await convertFileToBase64(data.secondImage)

    const petData = {
      ...data,
      birthDate: convertDateToUnix(data.birthDate),
      imgURL: [firstImageBase64, secondImageBase64]
      // secondImage: secondImageUrl
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
