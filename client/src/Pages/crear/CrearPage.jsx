// Pagina provisional, quizas se mueva la ruta una vez tengamos sistema de logueo

import { Text } from '@/components/ui/index'
import { AddPetForm } from './addPetForm/AddPetForm'

export function CrearPage() {
  return (
    <section className="flex flex-col gap-6 py-12">
      <Text variant="title">añadir nueva mascota</Text>
      <AddPetForm />
    </section>
  )
}
