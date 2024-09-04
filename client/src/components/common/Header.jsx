import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from '@/hooks'
import { Link } from 'react-router-dom'
import { MoonIcon } from '../icons/MoonIcon'
import { SunIcon } from '../icons/SunIcon'
import { Text } from '../ui/index'

function Header() {
  return (
    <header className="w-full bg-accent text-primary-foreground px-4 shadow-md sticky top-0 z-20">
      <div className="h-[80px] max-w-desktop flex items-center justify-between mx-auto">
        <a href="#top" className="flex items-center gap-2 cursor-pointer">
          <figure>
            <img src="./images/logo.png" alt="logo pawsome friend" width={60} height={60} />
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
              <nav className="grid gap-4 p-6 ">
                <Link to="/" className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary font-roboto">
                  Inicio
                </Link>
                <Link href="#" className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary font-roboto">
                  Sobre Nosotros
                </Link>
                <Link href="#" className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary font-roboto">
                  Donar
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden items-center gap-14 font-medium lg:flex ">
            <Link to={'/'} className="flex items-center gap-2 transition-colors hover:text-primary font-roboto">
              <Text variant="subtitle">Inicio</Text>
            </Link>
            <Link to={''} className="flex items-center gap-2 transition-colors hover:text-primary font-roboto">
              <Text variant="subtitle">Sobre Nosotros</Text>
            </Link>
            <Link to={''} className="flex items-center gap-2 transition-colors hover:text-primary font-roboto">
              <Text variant="subtitle">Donar</Text>
            </Link>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function ThemeSwitcher() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="bg-background rounded-full flex p-1 gap-3">
      <span className={`transition rounded-full p-1 ${isDarkMode ? 'bg-[#343434]' : 'text-[#B5B5B5]'}`}>
        <MoonIcon />
      </span>
      <span className={`transition rounded-full p-1 ${!isDarkMode ? 'bg-[#343434]' : 'text-[#B5B5B5]'}`}>
        <SunIcon />
      </span>
    </button>
  )
}

export { Header }
