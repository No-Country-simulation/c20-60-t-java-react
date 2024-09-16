import { petAPI } from '@/api'
import { useQuery } from '@tanstack/react-query'

export function useGetPets() {
  const { data, isError, refetch, isFetching } = useQuery({
    queryKey: ['pets'],
    queryFn: () => petAPI.getAll(),
    refetchOnWindowFocus: false
  })

  return {
    pets: data ?? [],
    isError,
    refetch,
    isFetching,
    refetch
  }
}
