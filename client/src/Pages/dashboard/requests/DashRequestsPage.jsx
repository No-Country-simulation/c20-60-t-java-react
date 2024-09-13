import { RequestCard, Text } from '@/components/ui'
import { peticiones } from '@/data/constants'
import { DashboardPageLayout } from '@/layout/DashboardPageLayout'

export function DashRequestsPage() {
  return (
    <DashboardPageLayout title="Peticiones">
      <ul className="grid grid-cols-2 gap-4">
        {peticiones.map((peticion) => (
          <RequestCard peticion={peticion} key={peticion.phone_number} />
        ))}
      </ul>
    </DashboardPageLayout>
  )
}
