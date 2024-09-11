import { Pagination, PaginationContent, PaginationItem, PaginationButton, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

export function PetsPagination({ pagesAmount, activePage, onUpdatePage }) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {pagesAmount.map((page) => (
          <PaginationItem key={page}>
            <PaginationButton onClick={() => onUpdatePage(page)} isActive={activePage === page}>
              {page}
            </PaginationButton>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
