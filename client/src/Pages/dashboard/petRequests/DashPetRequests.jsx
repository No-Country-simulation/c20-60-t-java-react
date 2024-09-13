import { RequestCard } from '@/components/ui'
import { useGetPetRequests } from '@/hooks'
import { DashboardPageLayout } from '@/layout/DashboardPageLayout'
import { useParams } from 'react-router-dom'

export function DashPetRequests() {
  const { id } = useParams()
  const { requests } = useGetPetRequests(id)

  return (
    <DashboardPageLayout title={'Peticiones por mascota'}>
      <ul className="grid grid-cols-2 gap-4">
        {requests?.map((peticion) => (
          <RequestCard peticion={peticion} key={peticion.phone_number} />
        ))}
      </ul>
    </DashboardPageLayout>
  )
}
