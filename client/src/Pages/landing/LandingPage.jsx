import { InformationCard } from '@/Pages/landing/InformationCard'
import { Hero } from '@/Pages/landing/Hero'
import Contribute from './Contribute'
import Stories from './Stories'

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
      <section className="w-[90%] mx-auto border-0 border-slate-600 border-solid my-[3.75rem] max-w-desktop flex flex-col gap-32">
        {information.map((element) => {
          const { title, description, alt, img } = element
          return <InformationCard title={title} description={description} src={img} alt={alt} key={title} />
        })}
      </section>
      <Stories />
      <Contribute />
    </>
  )
}
