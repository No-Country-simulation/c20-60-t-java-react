import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <section className="relative bg-background text-primary text-pretty antialiased flex flex-col">
      <Header />
      <section className="grid grid-rows-[1fr_auto] min-h-[100dvh]">
        <Outlet />
        <Footer />
      </section>
    </section>
  )
}

// PLACEHOLDERS
const Header = () => <div className="absolute" />
const Footer = () => <div />
