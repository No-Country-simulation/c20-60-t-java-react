import { Text } from "@/components/ui/index"

export const Story = ({ direction, title, description, imgs }) => {
  return (
    <div
      className={`relative flex flex-col ${
        direction === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } justify-between items-center gap-16 sm:gap-28 md:gap-36 bg-secondary w-full px-6 my-16 lg:my-24 shadow-2xl`}
    >
      <div className="w-1/2  sm:w-[40%] sm:max-w-56 aspect-square relative top:0 sm:top-3.5 lg:top-0 mt-6 sm:mt-0">
        <img
          src={imgs[0]}
          alt="story image 1"
          className={`border-4 border-accent w-full rounded-full absolute sm:-top-[22%] mx-auto inset-0 hidden sm:inline ${
            direction === 'left' ? 'sm:-left-0' : 'sm:-right-0'
          }`}
        />
        <img
          src={imgs[1]}
          alt="story image 2"
          className={`border-4 border-accent sm:w-2/3 rounded-full absolute sm:top-[44%] ${
            direction === 'left' ? 'sm:left-2/3' : 'sm:right-2/3'
          }`}
        />
      </div>
      <div className="flex-1 text-left -mt-10 mb-10 sm:my-10">
        <Text variant="subtitle">
          {title}
        </Text>
        <Text variant="medium" className="py-4">
          {description}
        </Text>
        <a href="/" className="underline text-link">
          Mostrar historia completa
        </a>
      </div>
    </div>
  )
}
