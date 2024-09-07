import { Story } from './Story'
import { Text } from '@/components/ui/index'

export const Stories = () => {
  return (
    <section className="flex flex-col gap-5">
      <Text variant="display" className="pb-4 pt-20 text-center">
        Conoce las historias de nuestros rescatados
      </Text>
      <section className="w-full">
        <Story
          direction="left"
          title="Toby: el perrito que sobrevivió un incendio"
          description="Tras sobrevivir a un devastador incendio que arrasó su hogar, Toby, un pequeño perrito con pelaje chamuscado pero espíritu resistente, encontró refugio en Pawsome Friends. Al comenzar las primeras llamas, Toby se encon..."
          imgs={['./images/stories/Toby-1.jpg', './images/stories/Toby-2.jpg']}
        ></Story>
        <Story
          direction="right"
          title="Mora: el largo camino a casa"
          description="Mora es una juguetona y feliz perrita que llegó por su cuenta al refugio. Llegó un día lluvioso y nublado, con su ropa mojada y con frío. Instantáneamente supimos que Mora había perdido la vuelta a su hogar y se encontraba v..."
          imgs={['./images/stories/Mora-1.jpg', './images/stories/Mora-2.jpg']}
        ></Story>
        <Story
          direction="left"
          title="Charly: el gato que nadie quería"
          description="Chary es un gato con una historia complicada. Desde sus primeros días, su personalidad introvertida y su temperamento hicieron que fuera difícil encontrar un hogar que lo aceptara. Pasó por innumerables casas y famil..."
          imgs={['./images/stories/Charly-1.jpg', './images/stories/Charly-2.jpg']}
        ></Story>
      </section>
    </section>
  )
}
