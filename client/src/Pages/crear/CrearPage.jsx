import { Text } from '@/components/ui/index'
import { AddPetForm } from './addPetForm/AddPetForm'

export function CrearPage() {
  return (
    <section className="flex flex-col gap-6">
      <Text variant="title">añadir nueva mascota</Text>
      <AddPetForm />
    </section>
  )
}
