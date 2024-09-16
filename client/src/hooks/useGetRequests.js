import { useQuery } from '@tanstack/react-query'
import { requestAPI } from '@/api'

export function useGetRequests() {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['requests'],
    queryFn: () => requestAPI.getAll(),
    refetchOnWindowFocus: false
  })

  return {
    requests: data ?? [],
    isError,
    isFetching
  }
}
