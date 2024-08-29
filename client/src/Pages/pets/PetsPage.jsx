import { PetCard } from './PetCard'

export function PetsPage() {
  return (
    <section className="flex gap-8">
      <Sidebar />
      <section className="flex-1 flex flex-col gap-8 py-12">
        <section className="grid grid-cols-responsive gap-y-8 gap-x-10 justify-center">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <PetCard key={n} />
          ))}
        </section>
        <footer>{/* PAGINATION */}</footer>
      </section>
    </section>
  )
}

const Sidebar = () => <div className="min-w-[285px] bg-secondary" />
