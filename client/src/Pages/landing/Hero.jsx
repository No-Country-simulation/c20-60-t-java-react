import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import '@/styles/hero.css'

function Hero() {
  return (
    <section className="grid min-h-dvh place-content-center">
      <img
        src="./images/hero.webp"
        alt="Hero section image"
        className="imgHero absolute inset-0 z-[-10px] h-dvh w-screen object-cover opacity-[.5]"
      />
      <div className="z-10 mx-auto mt-[-80px] w-[90%] text-balance border-0 text-center text-2xl">
        <h1 className="fade font-quicksand text-4xl md:text-6xl">Cambia su mundo, adopta hoy</h1>
        <h2 className="fade my-5 font-quicksand">Porque adoptar es más que dar un hogar, es ofrecer una segunda oportunidad.</h2>
        <Link to="/mascotas">
          <Button size="lg">Quiero adoptar</Button>
        </Link>
      </div>
    </section>
  )
}
export { Hero }
