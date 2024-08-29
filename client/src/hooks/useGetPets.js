import { petAPI } from '@/api/pet/petAPI'
import { useQuery } from 'node_modules/@tanstack/react-query/build/legacy/useQuery'

export function useGetPets() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['pets'],
    queryFn: () => petAPI.getAll()
  })

  return {
    pets: data,
    isLoading,
    isError
  }
}
