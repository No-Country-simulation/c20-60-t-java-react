import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useAuth } from '@/hooks'
import { Link, useLocation } from 'react-router-dom'
import { Text } from '../../ui/index'
import { MenuIcon } from './MenuIcon'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  const { user } = useAuth()
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-20 w-full bg-accent px-4 text-primary-foreground shadow-md">
      <div className="mx-auto flex h-[80px] max-w-desktop items-center justify-between">
        <Link to="/" className="flex cursor-pointer items-center gap-2">
          <figure>
            <img src="/images/logo.png" alt="logo pawsome friend" width={60} height={60} />
          </figure>
          <Text variant="subtitle" className="text-primary">
            Pawsome friends
          </Text>
        </Link>
        <div className="flex flex-row-reverse lg:flex-row">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid justify-items-start gap-4 pt-8">
                <ThemeSwitcher className="mt-4"/>
                {user ? (
                  <Link to={'/dashboard/mascotas'} className="mt-2 hover:text-primary">
                    <Button>Dashboard</Button>
                  </Link>
                ) : (
                  <Link to={'/auth/iniciar-sesion'} className="mt-2 hover:text-primary">
                    <Button>Iniciar sesión</Button>
                  </Link>
                )}
                <Link to={'/mascotas'} className="flex items-center gap-2 font-roboto text-lg font-medium transition-colors hover:text-primary">
                  Mascotas
                </Link>
                <Link to={'/#about-us'} className="flex items-center gap-2 font-roboto text-lg font-medium transition-colors hover:text-primary">
                  Sobre Nosotros
                </Link>
                <Link href="#" className="flex items-center gap-2 font-roboto text-lg font-medium transition-colors hover:text-primary">
                  Donar
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden items-center gap-14 font-medium lg:flex">
            <a href={pathname !== '/' ? '/#about-us' : '#about-us'} className="hover:text-primary">
              <Text variant="subtitle">Sobre Nosotros</Text>
            </a>
            <a href={'#donar'} className="hover:text-primary">
              <Text variant="subtitle">Donar</Text>
            </a>
            <Link to={'/mascotas'} className="hover:text-primary">
              <Text variant="subtitle">Mascotas</Text>
            </Link>
            <ThemeSwitcher />
            {user ? (
              <Link to={'/dashboard/mascotas'} className="hover:text-primary">
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <Link to={'/auth/iniciar-sesion'} className="hover:text-primary">
                <Button>Iniciar sesión</Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
