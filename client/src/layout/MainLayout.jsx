import Footer from '@/components/common/Footer'
import { Header } from '@/components/common/index'
import { Button, DevPill, Toaster } from '@/components/ui'
import { useAuth } from '@/store/authStore'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  const { user, logOut } = useAuth()
  console.log(user)

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
      <DevPill />
      {user && (
        <div className="fixed bottom-0 right-0 m-12">
          <Button onClick={logOut}>Log out</Button>
        </div>
      )}
    </section>
  )
}
