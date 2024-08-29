export function PetsPage() {
  return (
    <section className="flex gap-8">
      <Sidebar />
      <section className="flex-1 flex flex-col gap-8 py-12">
        <section className="grid grid-cols-responsive gap-y-8 gap-x-10">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <PetCard key={n} />
          ))}
        </section>
        <footer>{/* PAGINATION */}</footer>
      </section>
    </section>
  )
}

const Sidebar = () => <div className="w-[285px]" />

export function PetCard() {
  return (
    <li className="bg-secondary rounded-lg list-none flex flex-col gap-2 p-3">
      <figure className="h-[167px] overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover bg-neutral-300" src="" alt="pet image" />
      </figure>
      <section className="flex gap-2">
        {['gato', 'pequeño', 'vacunado'].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </section>
      <section className="flex flex-col gap-2">
        <p>Información sobre mi:</p>
        <p>Michino es un gatito de apenas 4 meses, lo encontramos en la calle y es muy juguetón</p>
      </section>
      <footer>Mostrar más</footer>
    </li>
  )
}
