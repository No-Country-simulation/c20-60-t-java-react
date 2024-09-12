import { Button } from '@/components/ui'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Toggle } from '@/components/ui/toggle'
import { useGetPets } from '@/hooks/useGetPets'

export function DashPetsPage() {
  const { pets } = useGetPets()

  return (
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
          <TableRow>
            <TableCell>{pet.name}</TableCell>
            <TableCell>{pet.species}</TableCell>
            <TableCell>
              <Toggle active={pet.species.toLowerCase() === 'dog'} />
            </TableCell>
            <TableCell className="flex justify-end gap-2">
              <Button variant="outline">editar</Button>
              <Button>eliminar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
