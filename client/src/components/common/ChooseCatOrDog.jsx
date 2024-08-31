import { Button } from "../ui/button"

export default function ChooseCatOrDog() {
return (
  <section className="flex justify-center gap-16">
    <AdoptCard species="perro"></AdoptCard>
    <AdoptCard species="gato"></AdoptCard>
  </section>
)
}

function AdoptCard({species}) {
  return (
    <article className="bg-secondary flex flex-col justify-center items-center w-5/12 rounded-lg">
      <img src={`./images/adopcion-${species}.webp`} alt={species} className="w-11/12 aspect-[3/2] object-cover rounded-lg mt-5"/>
      <Button className="block w-44 my-8">Adoptar un {species}</Button>
    </article>
  )
}
