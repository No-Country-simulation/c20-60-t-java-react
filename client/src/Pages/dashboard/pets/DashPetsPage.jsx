import { Button } from '@/components/ui'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Toggle } from '@/components/ui/toggle'
import { useDeletePetMutation, useUpdatePetMutation } from '@/hooks'
import { useGetPets } from '@/hooks/useGetPets'
import { DashboardPageLayout } from '@/layout/DashboardPageLayout'
import { Link } from 'react-router-dom'

export function DashPetsPage() {
  const { pets } = useGetPets()
  const { adoptionMutation } = useUpdatePetMutation()
  const { deleteMutation } = useDeletePetMutation()

  return (
    <DashboardPageLayout title="Mascotas">
      <section className="rounded-lg border border-border bg-secondary p-8">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Especie</TableHead>
              <TableHead>En adopción</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pets.map((pet) => (
              <TableRow key={pet.id}>
                <TableCell>{pet.name}</TableCell>
                <TableCell>{pet.species}</TableCell>
                <TableCell>
                  <Toggle disabled={adoptionMutation.isPending} onClick={() => adoptionMutation.mutate(pet)} active={pet.availableForAdoption} />
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Link to={'../editar-mascota/' + pet.id}>
                    <Button variant="outline">editar</Button>
                  </Link>
                  <Link to={'../mascotas/' + pet.id + '/peticiones'}>
                    <Button variant="secondary">peticiones</Button>
                  </Link>
                  <Button disabled={deleteMutation.isPending} onClick={() => deleteMutation.mutate(pet.id)}>
                    eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </DashboardPageLayout>
  )
}
