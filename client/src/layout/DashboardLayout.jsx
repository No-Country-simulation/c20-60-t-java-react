import { Button } from '@/components/ui'
import { useAuth } from '@/store/authStore'

export function DashboardLayout({ children }) {
  const { logOut } = useAuth()

  return (
    <section className="grid min-h-[90dvh] grid-cols-4 gap-6 py-12">
      <aside className="flex flex-col justify-between rounded-lg bg-secondary">
        <nav></nav>
        <nav className="p-2">
          <Button className="w-full" onClick={logOut}>
            Log out
          </Button>
        </nav>
      </aside>
      <article className="col-span-3">{children}</article>
    </section>
  )
}
