import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Link } from 'react-router-dom'
import { Text } from '../../ui/index'
import { MenuIcon } from './MenuIcon'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-accent px-4 text-primary-foreground shadow-md">
      <div className="mx-auto flex h-[80px] max-w-desktop items-center justify-between">
        <a href="#top" className="flex cursor-pointer items-center gap-2">
          <figure>
            <img src="/images/logo.png" alt="logo pawsome friend" width={60} height={60} />
          </figure>
          <Text variant="subtitle" className="text-primary">
            Pawsome friends
          </Text>
        </a>
        <div className="flex flex-row-reverse lg:flex-row">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4 p-2">
                <Link to="/" className="flex items-center gap-2 font-roboto text-lg font-medium transition-colors hover:text-primary">
                  Inicio
                </Link>
                <Link href="#" className="flex items-center gap-2 font-roboto text-lg font-medium transition-colors hover:text-primary">
                  Sobre Nosotros
                </Link>
                <Link href="#" className="flex items-center gap-2 font-roboto text-lg font-medium transition-colors hover:text-primary">
                  Donar
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden items-center gap-14 font-medium lg:flex">
            <Link to={'/'} className="hover:text-primary">
              <Text variant="subtitle">Inicio</Text>
            </Link>
            <Link to={''} className="hover:text-primary">
              <Text variant="subtitle">Sobre Nosotros</Text>
            </Link>
            <Link to={''} className="hover:text-primary">
              <Text variant="subtitle">Donar</Text>
            </Link>
            <Link to={'/auth/registro'} className="hover:text-primary">
              <Text variant="subtitle">Registrarse</Text>
            </Link>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  )
}
