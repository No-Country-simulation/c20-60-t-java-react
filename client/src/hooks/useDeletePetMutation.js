import { useMutation, useQueryClient } from '@tanstack/react-query'
import { petAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'

export function useDeletePetMutation() {
  const client = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: (id) => petAPI.delete(id),
    onMutate: (id) => {
      const prevState = client.getQueryData(['pets'])

      client.setQueryData(['pets'], (prevState) => prevState?.filter((pet) => pet.id !== id))

      return { prevState }
    },
    onError: (err, _, { prevState }) => {
      client.setQueryData(['pets'], prevState)
      toast({ title: 'Oops...', description: err.message })
    },
    onSuccess: () => {
      client.invalidateQueries()
      toast({ title: 'Tarea completada', description: 'Mascota elimina exitosamente' })
    }
  })

  return { deleteMutation }
}
