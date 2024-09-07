import { Button } from '../../components/ui/button'
import { Text } from '../../components/ui/index'

export function ChooseCatOrDog() {
  return (
    <section className="flex flex-col gap-14">
      <header className="flex flex-col items-center gap-5">
        <Text variant="display" className="max-w-[550px] px-8 text-center">
          Hoy mismo puedes adoptar y cambiar una vida
        </Text>
        <Text variant="description" className="px-8 text-center">
          En nuestro refugio hay tanto perros como gatos esperando un hogar
        </Text>
      </header>
      <section className="flex flex-col items-center justify-center sm:flex-row sm:gap-8 md:gap-12 lg:gap-16">
        <AdoptCard species="perro"></AdoptCard>
        <AdoptCard species="gato"></AdoptCard>
      </section>
    </section>
  )
}

function AdoptCard({ species }) {
  return (
    <article className="my-4 flex w-2/3 flex-col items-center justify-center rounded-lg border-4 border-transparent bg-secondary shadow-lg shadow-transparent transition hover:border-button hover:shadow-button sm:w-[40%] md:w-[38%] lg:w-5/12">
      <img src={`./images/adopcion-${species}.webp`} alt={species} className="mt-5 aspect-[3/2] w-11/12 rounded-lg object-cover" />
      <Button variant="" className="my-8 block w-44">
        Adoptar un {species}
      </Button>
    </article>
  )
}
