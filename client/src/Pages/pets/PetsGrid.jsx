import { PetCard } from './PetCard'

export function PetsGrid({ pets }) {
  return (
    <>
      <section className="grid grid-cols-responsive gap-y-8 gap-x-10 justify-center">
        {pets?.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </section>
      <footer>{/* PAGINATION */}</footer>
    </>
  )
}
