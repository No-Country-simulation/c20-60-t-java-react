import { Button } from '@/components/ui/button'
import '@/styles/hero.css'

function Hero() {
  return (
    <section className="min-h-dvh  grid place-content-center relative ">
      <img src="./heroImg.avif" alt="" className="imgHero absolute inset-0 w-full h-full object-cover opacity-[.5] z-[-10px]" />
      <div className="border-0  text-center text-2xl text-balance mt-[-80px] w-[90%] mx-auto z-10">
        <h1 className="text-6xl fade font-quicksand">Cambia su mundo, adopta hoy</h1>
        <h2 className="my-5 fade font-quicksand">Porque adoptar es más que dar un hogar, es ofrecer una segunda oportunidad.</h2>
        <Button variant="outline" className=" w-[386px] h-[56px] bg-white mb-5 rounded-[10px] max-w-full fade font-roboto">
          Quiero adoptar
        </Button>
      </div>
    </section>
  )
}

export { Hero }
