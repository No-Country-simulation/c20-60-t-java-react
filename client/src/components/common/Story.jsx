import { Button } from "../ui/button"

export const Story = ({ direction, title, description, imgs }) => {
  return (
    <div
      className={`flex flex-col px-4 ${
        direction === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } justify-center items-center gap-6 bg-secondary w-full my-12`}
    >
      <div className="w-2/3 sm:w-1/3 aspect-square relative">
        <img src={imgs[0]} alt="story image 1" className="w-2/3 rounded-full absolute top-4 mx-auto inset-x-0" />
        <img src={imgs[1]} alt="story image 2" className={`w-1/3 rounded-full absolute top-1/2 ${direction === 'left' ? 'left-1/2' : 'right-1/2'}`} />
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
