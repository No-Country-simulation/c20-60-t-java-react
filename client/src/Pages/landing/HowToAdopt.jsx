import Step1 from '/Step-1.svg'
import Step2 from '/Step-2.svg'
import Step3 from '/Step-3.svg'
import { Text } from '../../components/ui/text'

export function HowToAdopt() {
  return (
    <section>
      <Text variant="display" className="text-center pb-6">
        ¿Cómo adoptar?
      </Text>
      <section className=" relative grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-0 sm:gap-x-8 md:gap-12 lg:gap-x-16 bg-secondary px-8">
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
    <article className="flex flex-col items-center max-w-64 sm:last:col-span-2 md:last:col-span-1">
      {/* <figure clas>

      </figure> */}
      <img src={imgUrl} alt={title} className="w-44 m-8 mb-4" />
      <Text variant="display" className="pb-3">
        {step}
      </Text>
      <Text variant="title" className="pb-2 text-center">
        {title}
      </Text>
      <Text variant="medium" className="text-center pb-9">
        {description}
      </Text>
    </article>
  )
}
