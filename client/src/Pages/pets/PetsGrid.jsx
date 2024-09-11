import { Grid } from '@/components/ui/grid'
import { MotionItem } from '@/components/ui/motion-item'
import { usePetFilter } from '@/hooks/usePetFilter'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PetsPagination } from './PetsPagination'
import { PetCard } from './petCard'

const PETS_PER_PAGE = 6

export function PetsGrid() {
  const { filteredPets } = usePetFilter()
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const end = currentPage * PETS_PER_PAGE
  const [paginatedPets, setPaginatedPets] = useState(filteredPets?.slice(end - PETS_PER_PAGE, end))
  const pagesAmount = [...Array.from({ length: Math.ceil(filteredPets.length / PETS_PER_PAGE) }, (_, index) => index + 1)]

  const onUpdatePage = (page) => {
    setSearchParams({ page: page.toString() })
  }

  useEffect(() => {
    const end = currentPage * PETS_PER_PAGE
    setPaginatedPets(filteredPets.slice(end - PETS_PER_PAGE, end))
  }, [currentPage, filteredPets])

  return (
    <>
      <Grid>
        <AnimatePresence mode="popLayout" initial={false}>
          {paginatedPets?.map((pet) => (
            <MotionItem key={pet.id}>
              <PetCard {...pet} />
            </MotionItem>
          ))}
        </AnimatePresence>
      </Grid>
      <PetsPagination activePage={currentPage} pagesAmount={pagesAmount} onUpdatePage={onUpdatePage} />
    </>
  )
}
