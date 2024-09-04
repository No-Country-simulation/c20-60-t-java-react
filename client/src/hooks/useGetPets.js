import { useQuery } from '@tanstack/react-query'
import { petAPI } from '@/api'

export function useGetPets(filters) {
  const { data, isError, refetch, isFetching } = useQuery({
    queryKey: ['pets'],
    queryFn: () => petAPI.getAll(filters)
  })

  return {
    pets: data ?? [],
    isError,
    refetch,
    isFetching
  }
}
