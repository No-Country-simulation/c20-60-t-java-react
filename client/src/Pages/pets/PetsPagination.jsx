import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { useSearchParams } from 'react-router-dom'

export function PetsPagination() {
  const [searchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink isActive={currentPage === page} href="#">
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
