import { NavBar } from '@/components/Navigation/'

export function PetsPageLayout({ children, onRefetch }) {
  return (
    <section className="flex flex-col md:flex-row">
      <aside className="bg-secondary px-4 py-8">
        <NavBar onRefetch={onRefetch} />
      </aside>
      <section className="flex flex-1 flex-col gap-8 py-12">{children}</section>
    </section>
  )
}
