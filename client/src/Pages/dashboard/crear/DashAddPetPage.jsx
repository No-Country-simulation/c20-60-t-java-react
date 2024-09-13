import { DashboardPageLayout } from '@/layout/DashboardPageLayout'
import { AddPetForm } from './addPetForm/AddPetForm'

export function DashAddPetPage() {
  return (
    <DashboardPageLayout title="Añadir mascota">
      <AddPetForm />
    </DashboardPageLayout>
  )
}
