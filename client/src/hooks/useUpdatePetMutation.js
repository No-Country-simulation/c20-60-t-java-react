import { useMutation, useQueryClient } from '@tanstack/react-query'
import { petAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'

export function useUpdatePetMutation() {
  const client = useQueryClient()

  const adoptionMutation = useMutation({
    mutationFn: (data) => petAPI.update(data.id, { ...data, availableForAdoption: !data.availableForAdoption }),
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

  return { adoptionMutation }
}
