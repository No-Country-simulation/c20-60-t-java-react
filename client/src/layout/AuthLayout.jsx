import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <section className="grid grid-cols-3 gap-12 py-12  h-[70dvh] max-h-[70dvh]">
      <article className="flex flex-col gap-12 items-center">
        <Outlet />
      </article>
      <article className="col-span-2 bg-secondary rounded-xl overflow-hidden">
        <img src="/images/auth.webp" className="object-cover w-full h-full" />
      </article>
    </section>
  )
}
