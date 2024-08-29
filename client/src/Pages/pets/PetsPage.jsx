import { PetsPageLayout } from '@/layout/PetsPageLayout'
import { useState } from 'react'
import { PetCard } from './PetCard'

const PETS = [1, 2, 3, 4, 5, 6]

export function PetsPage() {
  // Reemplazar con react-query para fetch de datos
  const [pets] = useState(PETS)

  return (
    <PetsPageLayout>
      {pets.length ? (
        <>
          <section className="grid grid-cols-responsive gap-y-8 gap-x-10 justify-center">
            {pets.map((n) => (
              <PetCard key={n} />
            ))}
          </section>
          <footer>{/* PAGINATION */}</footer>
        </>
      ) : (
        <article className="p-4 text-center bg-secondary rounded-lg">Por el momento no tenemos mascotas para ser adoptadas</article>
      )}
    </PetsPageLayout>
  )
}
