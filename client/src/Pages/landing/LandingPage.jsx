import { InformationCard } from '@/components/common/InformationCard'
import { Hero } from '@/components/common/Hero'

const information = [
  {
    title: 'Tenemos una misión...',
    description:
      'En Refugio Pawsome Friends, nuestra misión es proporcionar un lugar seguro a los animales que han sido abandonados o maltratados hasta que encuentren su hogar. Promovemos la adopción responsable y el respeto hacia los animales.',
    img: './carryingDog.avif',
    alt: 'mujer cargando un perro'
  },
  {
    title: '+10.000 animales encontraron su hogar',
    description:
      'En los últimos 3 años, ayudamos a miles de perros y gatos brindándoles atención veterinaria, nutrición y cuidados necesarios para su rehabilitación física y emocional.',
    img: './groomingDog.avif',
    alt: 'mujer motilado un perro'
  }
]

export function LandingPage() {
  return (
    <>
      <Hero />
      <section className="w-[90%]  max-w-[1224px]  mx-auto border-0 border-slate-600 border-solid  my-[3.75rem]">
        {information.map((element) => {
          const { title, description, alt, img } = element
          return <InformationCard title={title} description={description} src={img} alt={alt} key={title} />
        })}
      </section>
    </>
  )
}
