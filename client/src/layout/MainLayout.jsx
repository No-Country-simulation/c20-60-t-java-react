import { Outlet } from 'react-router-dom'
import Footer from '@/components/common/Footer'
import { Header } from '@/components/common/index'
import { Toaster } from '@/components/ui/toaster'

export function MainLayout() {
  return (
    <section className="relative flex flex-col text-pretty bg-background text-primary antialiased">
      <Header />
      <section className="grid min-h-[100dvh] grid-rows-[1fr_auto]">
        <main className="mx-auto w-full max-w-desktop">
          <Outlet />
        </main>
        <Footer />
      </section>
      <Toaster />
    </section>
  )
}
