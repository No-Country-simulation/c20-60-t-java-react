import { NavBar } from '@/components/Navigation/'

export function PetsPageLayout({ children }) {
  return (
    <section className="flex">
      <aside className="bg-secondary px-4 py-8">
        <NavBar />
      </aside>
      <section className="flex-1 flex flex-col gap-8 py-12">{children}</section>
    </section>
  )
}
