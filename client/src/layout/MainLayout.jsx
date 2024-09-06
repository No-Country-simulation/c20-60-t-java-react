import { Outlet } from 'react-router-dom'
import Footer from '@/components/common/Footer'
import { Header } from '@/components/common/index'
import { Toaster } from '@/components/ui/toaster'

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
      <Toaster />
    </section>
  )
}
