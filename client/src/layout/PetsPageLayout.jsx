export function PetsPageLayout({ children }) {
  return (
    <section className="flex gap-8 h-full">
      <Sidebar />
      <section className="flex-1 flex flex-col justify-center gap-8 py-12">{children}</section>
    </section>
  )
}

const Sidebar = () => <div className="min-w-[285px] bg-secondary" />
