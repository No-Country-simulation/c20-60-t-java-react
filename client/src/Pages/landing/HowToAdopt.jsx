import Step1 from '/Step-1.svg'
import Step2 from '/Step-2.svg'
import Step3 from '/Step-3.svg'
import { Text } from '../../components/ui/text'

export function HowToAdopt() {
  return (
    <section>
      <Text variant="display" className="pb-6 text-center">
        ¿Cómo adoptar?
      </Text>
      <section className="relative grid justify-items-center gap-y-0 bg-secondary px-8 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 md:gap-12 lg:gap-x-16">
        <Step
          step="1"
          imgUrl={Step1}
          title="Encuentra a tu amigo fiel"
          description="Puedes filtrar entre perro o gato, ciudad o provincia, razas, tamaño y otras preferencias"
        ></Step>
        <Step
          step="2"
          imgUrl={Step2}
          title="Rellena el formulario"
          description="Una vez decidido a adoptar, deberás rellenar el formulario con datos personales para que podamos contactarnos contigo"
        ></Step>
        <Step
          step="3"
          imgUrl={Step3}
          title="Te contactamos"
          description="Según los datos que nos proporcionaste, te contactaremos para continuar con el proceso de adopción"
        ></Step>
      </section>
    </section>
  )
}

function Step({ step, imgUrl, title, description }) {
  return (
    <article className="flex max-w-64 flex-col items-center sm:last:col-span-2 md:last:col-span-1">
      {/* <figure clas>

      </figure> */}
      <img src={imgUrl} alt={title} className="m-8 mb-4 w-44" />
      <Text variant="display" className="pb-3">
        {step}
      </Text>
      <Text variant="title" className="pb-2 text-center">
        {title}
      </Text>
      <Text variant="medium" className="pb-9 text-center">
        {description}
      </Text>
    </article>
  )
}
