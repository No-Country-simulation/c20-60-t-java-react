import { petAPI } from '@/api'
import { useQuery } from '@tanstack/react-query'
import { PETS_ADOPTABLE } from '@/config/keys'

export function useGetAdoptablePets() {
  const { data, isError, refetch, isFetching } = useQuery({
    queryKey: [PETS_ADOPTABLE],
    queryFn: () => petAPI.getAllAdoptable(),
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
