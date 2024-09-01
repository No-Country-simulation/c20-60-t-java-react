import { Button } from '../../components/ui/button'
import { Text } from '../../components/ui/index'

export default function ChooseCatOrDog() {
  return (
    <section className="flex flex-col gap-14">
      <header className="flex flex-col items-center gap-5">
        <Text variant="display" className="max-w-[600px] text-center">
          Hoy mismo puedes adoptar y cambiar una vida
        </Text>
        <Text variant="description" className="">
          En nuestro refugio hay tanto perros como gatos esperando un hogar
        </Text>
      </header>
      <section className="flex justify-center gap-16">
        <AdoptCard species="perro"></AdoptCard>
        <AdoptCard species="gato"></AdoptCard>
      </section>
    </section>
  )
}

function AdoptCard({ species }) {
  return (
    <article className="bg-secondary flex flex-col justify-center items-center w-5/12 rounded-lg">
      <img src={`./images/adopcion-${species}.webp`} alt={species} className="w-11/12 aspect-[3/2] object-cover rounded-lg mt-5" />
      <Button className="block w-44 my-8">Adoptar un {species}</Button>
    </article>
  )
}
