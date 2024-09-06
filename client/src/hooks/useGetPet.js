import { useQuery } from '@tanstack/react-query'
import { petAPI } from '@/api'

export function useGetPet({ id }) {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['pet'],
    queryFn: () => petAPI.getOne({ id }),
    refetchOnWindowFocus: false
  })

  return {
    pet: data ?? [],
    isError,
    isFetching
  }
}
