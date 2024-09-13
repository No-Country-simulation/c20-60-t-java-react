import Footer from '@/components/common/Footer'
import { Header } from '@/components/common/index'
import { DevPill, Toaster } from '@/components/ui'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <section className="relative flex flex-col text-pretty bg-background text-primary antialiased">
      <Header />
      <section className="grid min-h-[100dvh] grid-rows-[1fr_auto] px-4">
        <main className="mx-auto w-full max-w-desktop">
          <Outlet />
        </main>
        <Footer />
      </section>
      <Toaster />
      <DevPill />
    </section>
  )
}
