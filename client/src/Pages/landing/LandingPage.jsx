import { ChooseCatOrDog } from './ChooseCatOrDog'
import { Contribute } from './Contribute'
import { Hero } from './Hero'
import { HowToAdopt } from './HowToAdopt'
import { InformationCard } from './InformationCard'
import { Stories } from './Stories'

const information = [
  {
    title: 'Tenemos una misión...',
    description:
      'En Refugio Pawsome Friends, nuestra misión es proporcionar un lugar seguro a los animales que han sido abandonados o maltratados hasta que encuentren su hogar. Promovemos la adopción responsable y el respeto hacia los animales.',
    img: './images/objetivo-2.webp',
    alt: 'mujer cargando un perro'
  },
  {
    title: '+10.000 animales encontraron su hogar',
    description:
      'En los últimos 3 años, ayudamos a miles de perros y gatos brindándoles atención veterinaria, nutrición y cuidados necesarios para su rehabilitación física y emocional.',
    img: './images/objetivo-1.webp',
    alt: 'mujer motilado un perro'
  }
]

export function LandingPage() {
  return (
    <>
      <Hero />
      <section className="flex flex-col gap-28 pb-16">
        <section className="mx-auto my-[3.75rem] flex w-[90%] max-w-desktop flex-col gap-32 border-0 border-solid border-slate-600">
          {information.map((element) => {
            const { title, description, alt, img } = element
            return <InformationCard title={title} description={description} src={img} alt={alt} key={title} />
          })}
        </section>
        <HowToAdopt />
        <ChooseCatOrDog />
        <Stories />
        <Contribute />
      </section>
    </>
  )
}
