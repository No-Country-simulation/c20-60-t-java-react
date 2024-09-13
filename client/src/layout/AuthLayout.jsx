import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <section className="flex flex-col md:flex-row md:justify-around md:mx-4 lg:grid lg:grid-cols-3 gap-8 md:gap-0 lg:gap-12 mx-8 py-12">
      <article className="flex flex-col items-center gap-12">
        <Outlet />
      </article>
      <article className="lg:col-span-2 h-[40dvw] md:h-[70dvh] overflow-hidden rounded-xl bg-secondary">
        <img src="/images/auth.webp" className="h-full w-full object-cover" />
      </article>
    </section>
  )
}
