import { RequestCard } from '@/components/ui'
import { useGetRequests } from '@/hooks/useGetRequests'
import { DashboardPageLayout } from '@/layout/DashboardPageLayout'

export function DashRequestsPage() {
  const { requests } = useGetRequests()

  return (
    <DashboardPageLayout title="Peticiones">
      <ul className="grid grid-cols-2 gap-4">
        {requests?.map((peticion) => (
          <RequestCard peticion={peticion} key={peticion.id} />
        ))}
      </ul>
    </DashboardPageLayout>
  )
}
