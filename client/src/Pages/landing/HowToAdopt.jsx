import { Step1 } from '@/components/icons/Step1'
import { Step2 } from '@/components/icons/Step2'
import { Step3 } from '@/components/icons/Step3'
import { Text } from '../../components/ui/text'

export function HowToAdopt() {
  return (
    <section>
      <Text variant="display" className="pb-6 text-center">
        ¿Cómo adoptar?
      </Text>
      <section className="relative grid justify-items-center gap-y-12 bg-secondary px-8 py-9 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 md:gap-12 lg:gap-x-16">
        <Step
          step="1"
          icon={<Step1 />}
          title="Encuentra a tu amigo fiel"
          description="Puedes filtrar entre perro o gato, ciudad o provincia, razas, tamaño y otras preferencias"
        ></Step>
        <Step
          step="2"
          icon={<Step2 />}
          title="Rellena el formulario"
          description="Una vez decidido a adoptar, deberás rellenar el formulario con datos personales para que podamos contactarnos contigo"
        ></Step>
        <Step
          step="3"
          icon={<Step3 />}
          title="Te contactamos"
          description="Según los datos que nos proporcionaste, te contactaremos para continuar con el proceso de adopción"
        ></Step>
      </section>
    </section>
  )
}

function Step({ step, icon, title, description }) {
  return (
    <article className="flex max-w-64 flex-col items-center gap-2 sm:last:col-span-2 md:last:col-span-1">
      {icon}
      <Text variant="display" className="">
        {step}
      </Text>
      <Text variant="title" className="text-center">
        {title}
      </Text>
      <Text variant="medium" className="text-center">
        {description}
      </Text>
    </article>
  )
}
