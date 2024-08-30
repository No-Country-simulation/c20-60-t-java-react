import "/public/Step-1.svg";
import "/public/Step-2.svg";
import '/public/Step-3.svg'
import { Text } from '../ui/text'

export default function HowToAdopt() {
  return (
    <section className="flex justify-around bg-secondary">
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
  )
}

function Step({ step, imgUrl, title, description }) {
  return (
    <article className="flex flex-col items-center w-1/4">
      <img src={`./public/${imgUrl}`} alt={title} className="w-1/3 mt m-8 mb-4" />
      <Text variant="subtitle" className="pb-4">
        {step}
      </Text>
      <Text variant="medium" className="pb-2">
        {title}
      </Text>
      <Text className="text-center pb-8">{description}</Text>
    </article>
  )
}
