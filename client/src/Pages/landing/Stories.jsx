import { Button } from '@/components/ui/button'

export default function Stories() {
  return (
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
  )
}

function Story({ direction, title, description, imgs }) {
  return (
    <div
      className={`flex flex-col ${
        direction === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } justify-center items-center gap-6 bg-secondary w-full my-12`}
    >
      <div className="w-2/3 sm:w-1/3 aspect-square relative">
        <img src={imgs[0]} alt="asdf" className="w-2/3 rounded-full absolute top-4 mx-auto inset-x-0" />
        <img src={imgs[1]} alt="asdf" className={`w-1/3 rounded-full absolute top-1/2 ${direction === 'left' ? 'left-1/2' : 'right-1/2'}`} />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="py-4">{description}</p>
        <a href="/">
          <Button variant="link">Mostrar historia completa</Button>
        </a>
      </div>
    </div>
  )
}
