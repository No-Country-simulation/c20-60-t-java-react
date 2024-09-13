import { petAPI } from '@/api'
import { Button, Text } from '@/components/ui'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Toggle } from '@/components/ui/toggle'
import { toast } from '@/components/ui/use-toast'
import { useGetPets } from '@/hooks/useGetPets'
import { DashboardPageLayout } from '@/layout/DashboardPageLayout'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function DashPetsPage() {
  const { pets } = useGetPets()
  const client = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: ({ id, data }) => petAPI.update(id, { ...data, availableForAdoption: !data.availableForAdoption }),
    onMutate: ({ id }) => {
      const prevState = client.getQueryData(['pets'])

      client.setQueryData(['pets'], (oldData) => {
        return oldData?.map((pet) => {
          if (pet.id === id) {
            return { ...pet, availableForAdoption: !pet.availableForAdoption }
          }
          return pet
        })
      })

      return { prevState }
    },
    onError: (err, _, { prevState }) => {
      client.setQueryData(['pets'], prevState)
      toast({ title: 'Oops...', description: err.message })
    },
    onSuccess: () => {
      client.invalidateQueries()
      toast({ title: 'Tarea completada', description: 'Estado de adopción actualizado exitosamente' })
    }
  })

  const toggleAdoptionState = (pet) => {
    mutate({ id: pet.id, data: pet })
  }

  return (
    <DashboardPageLayout title="Mascotas">
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
                <Toggle onClick={() => toggleAdoptionState(pet)} active={pet.availableForAdoption} />
              </TableCell>
              <TableCell className="flex justify-end gap-2">
                <Button variant="outline">editar</Button>
                <Button>eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardPageLayout>
  )
}
