import { DocumentIcon } from '@/components/icons/DocumentIcon'
import { DogMiniIcon } from '@/components/icons/DogMiniIcon'
import { GearIcon } from '@/components/icons/GearIcon'
import { LogOutIcon } from '@/components/icons/LogOutIcon'
import { Button, Text } from '@/components/ui'
import { useAuth } from '@/store/authStore'
import { Link, Outlet, useLocation } from 'react-router-dom'

const DASHBOARD_NAV_LINKS = [
  {
    value: 'mascotas',
    path: '/dashboard/mascotas',
    icon: <DogMiniIcon />
  },
  {
    value: 'peticiones',
    path: '/dashboard/peticiones',
    icon: <DocumentIcon />
  }
]

export function DashboardLayout() {
  const { logOut } = useAuth()
  const { pathname } = useLocation()

  return (
    <section className="grid min-h-[90dvh] grid-cols-4 gap-6 py-12">
      <div className="relative">
        <aside className="sticky top-28 flex h-full max-h-80 flex-col justify-between overflow-hidden rounded-lg bg-secondary">
          <nav className="flex flex-col divide-y">
            {DASHBOARD_NAV_LINKS.map((link) => (
              <Link
                to={link.path}
                className={`flex items-center justify-center gap-2 px-8 py-4 transition-colors hover:bg-card ${pathname === link.path && 'bg-accent'}`}
              >
                <span>{link.icon}</span>
                <Text>{link.value}</Text>
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-3 p-2">
            <Button variant="outline" className="w-full">
              <GearIcon />
              Opciones
            </Button>
            <Button className="w-full" onClick={logOut}>
              <LogOutIcon />
              Cerrar sesión
            </Button>
          </nav>
        </aside>
      </div>
      <article className="col-span-3">
        <Outlet />
      </article>
    </section>
  )
}
