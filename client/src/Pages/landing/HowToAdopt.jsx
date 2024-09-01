import '/public/Step-1.svg'
import '/public/Step-2.svg'
import '/public/Step-3.svg'
import { Text } from '../../components/ui/text'

export default function HowToAdopt() {
  return (
    <section>
      <Text variant="display" className="text-center pb-6">
        ¿Cómo adoptar?
      </Text>
      <section className="relative flex justify-around bg-secondary">
        <div className="absolute inset-0 bg-secondary translate-x-full" />
        <div className="absolute inset-0 bg-secondary -translate-x-full" />
        <Step
          step="1"
          imgUrl="Step-1.svg"
          title="Encuentra a tu amigo fiel"
          description="Puedes filtrar entre perro o gato, ciudad o provincia, razas, tamaño y otras preferencias"
        ></Step>
        <Step
          step="2"
          imgUrl="Step-2.svg"
          title="Rellena el formulario"
          description="Una vez decidido a adoptar, deberás rellenar el formulario con datos personales para que podamos contactarnos contigo"
        ></Step>
        <Step
          step="3"
          imgUrl="Step-3.svg"
          title="Te contactamos"
          description="Según los datos que nos proporcionaste, te contactaremos para continuar con el proceso de adopción"
        ></Step>
      </section>
    </section>
  )
}

function Step({ step, imgUrl, title, description }) {
  return (
    <article className="flex flex-col items-center max-w-96">
      <img src={`./public/${imgUrl}`} alt={title} className="w-44 mt m-8 mb-4" />
      <Text variant="display" className="pb-3">
        {step}
      </Text>
      <Text variant="title" className="pb-2">
        {title}
      </Text>
      <Text variant="medium" className="text-center pb-9">
        {description}
      </Text>
    </article>
  )
}
