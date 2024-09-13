import { NavBar } from '@/components/Navigation/'
import { Button } from '@/components/ui'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { FilterIcon } from '@/components/icons/FilterIcon'

export function PetsPageLayout({ children, onRefetch }) {
  return (
    <section className="flex flex-col gap-0 md:flex-row md:gap-4">
      <aside className="hidden bg-secondary px-4 py-8 md:block">
        <NavBar onRefetch={onRefetch} />
      </aside>
      <nav className="my-6 h-10 w-full text-end md:hidden">
        <Popover>
          <PopoverTrigger>
            <Button variant="secondary">
              <FilterIcon /> Filtrar
            </Button>
          </PopoverTrigger>
          <PopoverContent className="md:hidden">
            <NavBar></NavBar>
          </PopoverContent>
        </Popover>
      </nav>
      <section className="flex flex-1 flex-col gap-8 md:py-12">{children}</section>
    </section>
  )
}
