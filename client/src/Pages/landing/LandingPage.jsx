import { InformationCard } from '@/Pages/landing/InformationCard'
import { Hero } from '@/Pages/landing/Hero'
import Contribute from './Contribute'
import Stories from './Stories'
import HowToAdopt from '@/components/common/HowToAdopt'
import ChooseCatOrDog from '@/components/common/ChooseCatOrDog'
import { Text } from '@/components/ui/text'

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
      <Text variant="display" className="text-center pb-6">
        ¿Cómo adoptar?
      </Text>
      <HowToAdopt />
      <Text variant="display" className="text-center pt-20 pb-4">
        Hoy mismo puedes adoptar y cambiar una vida
      </Text>
      <Text variant="description" className="text-center pb-9">
        En nuestro refugio hay tanto perros como gatos esperando un hogar
      </Text>
      <ChooseCatOrDog />
      <Text variant="display" className="text-center pt-20 pb-4">
        Conoce las historias de nuestros rescatados
      </Text>
      <Stories />
      <Contribute />
    </>
  )
}
