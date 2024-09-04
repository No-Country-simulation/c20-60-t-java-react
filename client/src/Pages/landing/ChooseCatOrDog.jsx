import { Button } from '../../components/ui/button'
import { Text } from '../../components/ui/index'

export function ChooseCatOrDog() {
  return (
    <section className="flex flex-col gap-14">
      <header className="flex flex-col items-center gap-5">
        <Text variant="display" className="max-w-[550px] text-center px-8">
          Hoy mismo puedes adoptar y cambiar una vida
        </Text>
        <Text variant="description" className="text-center px-8">
          En nuestro refugio hay tanto perros como gatos esperando un hogar
        </Text>
      </header>
      <section className="flex flex-col sm:flex-row justify-center items-center sm:gap-8 md:gap-12 lg:gap-16">
        <AdoptCard species="perro"></AdoptCard>
        <AdoptCard species="gato"></AdoptCard>
      </section>
    </section>
  )
}

function AdoptCard({ species }) {
  return (
    <article className="bg-secondary flex flex-col justify-center items-center rounded-lg w-2/3 sm:w-[40%] md:w-[38%] lg:w-5/12 my-4 border-4 border-transparent  transition shadow-lg shadow-transparent hover:border-button hover:shadow-button">
      <img src={`./images/adopcion-${species}.webp`} alt={species} className="w-11/12 aspect-[3/2] object-cover rounded-lg mt-5" />
      <Button variant="" className="block w-44 my-8">
        Adoptar un {species}
      </Button>
    </article>
  )
}
