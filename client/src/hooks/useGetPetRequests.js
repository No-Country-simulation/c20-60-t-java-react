import { useQuery } from '@tanstack/react-query'
import { requestAPI } from '@/api'

export function useGetPetRequests(id) {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['pet-requests'],
    queryFn: () => requestAPI.getAllByPet(id),
    refetchOnWindowFocus: false
  })

  return {
    requests: data ?? [],
    isError,
    isFetching
  }
}
