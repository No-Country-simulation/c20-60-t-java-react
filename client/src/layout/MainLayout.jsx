import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <section className="relative bg-background text-primary text-pretty antialiased flex flex-col">
      <Header />
      <section className="grid grid-rows-[1fr_auto] min-h-[100dvh]">
        <main className="w-full max-w-desktop mx-auto">
          <Outlet />
        </main>
        <Footer />
      </section>
    </section>
  )
}

// PLACEHOLDERS
const Header = () => <div className="absolute" />
const Footer = () => <div />
