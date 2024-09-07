import { Text } from '@/components/ui/index'

export const Story = ({ direction, title, description, imgs }) => {
  return (
    <div
      className={`relative flex flex-col ${
        direction === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } my-16 w-full items-center justify-between gap-16 bg-secondary px-6 shadow-2xl sm:gap-28 md:gap-36 lg:my-24`}
    >
      <div className="top:0 relative mt-6 aspect-square w-1/2 sm:top-3.5 sm:mt-0 sm:w-[40%] sm:max-w-56 lg:top-0">
        <img
          src={imgs[0]}
          alt="story image 1"
          className={`absolute inset-0 mx-auto hidden w-full rounded-full border-4 border-accent sm:-top-[22%] sm:inline ${
            direction === 'left' ? 'sm:-left-0' : 'sm:-right-0'
          }`}
        />
        <img
          src={imgs[1]}
          alt="story image 2"
          className={`absolute rounded-full border-4 border-accent sm:top-[44%] sm:w-2/3 ${direction === 'left' ? 'sm:left-2/3' : 'sm:right-2/3'}`}
        />
      </div>
      <div className="-mt-10 mb-10 flex-1 text-left sm:my-10">
        <Text variant="subtitle">{title}</Text>
        <Text variant="medium" className="py-4">
          {description}
        </Text>
        <a href="/" className="text-link underline">
          Mostrar historia completa
        </a>
      </div>
    </div>
  )
}
