import { useQuery } from '@tanstack/react-query'
import { petAPI } from '@/api'

export function useGetPets() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['pets'],
    queryFn: () => petAPI.getAll()
  })

  return {
    pets: data ?? [],
    isLoading,
    isError
  }
}
