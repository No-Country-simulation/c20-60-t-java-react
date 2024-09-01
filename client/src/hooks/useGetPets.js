import { useQuery } from '@tanstack/react-query'
import { petAPI } from '@/api'

export function useGetPets(filters) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['pets'],
    queryFn: () => petAPI.getAll(filters)
  })

  return {
    pets: data ?? [],
    isLoading,
    isError,
    refetch
  }
}
