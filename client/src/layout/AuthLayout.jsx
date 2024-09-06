import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <section className="grid grid-cols-3 gap-12 py-12">
      <article className="">
        <Outlet />
      </article>
      <article className="col-span-2">
        <div className="grid place-content-center w-full h-full bg-secondary rounded-xl">Imagen</div>
      </article>
    </section>
  )
}
