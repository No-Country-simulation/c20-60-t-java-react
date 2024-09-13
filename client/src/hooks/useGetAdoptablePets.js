import { petAPI } from '@/api'
import { useQuery } from '@tanstack/react-query'

export function useGetAdoptablePets() {
  const { data, isError, refetch, isFetching } = useQuery({
    queryKey: ['pets-adoptable'],
    queryFn: () => petAPI.getAll({ adoptable: true }),
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
