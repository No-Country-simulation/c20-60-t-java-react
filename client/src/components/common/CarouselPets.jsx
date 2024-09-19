import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { getPlaceholderImage } from '@/utils/getPlaceholderImage'

export const CarouselPets = ({ images, species }) => {
  const pictures = images.map((src, index) => {
    return src.length > 1 ? <img src={src} alt={`Imagen ${index + 1}`} className="h-full w-full object-cover" /> : getPlaceholderImage(species)
  })

  return (
    <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
      <CarouselContent>
        {pictures.map((src, index) => (
          <CarouselItem key={index} className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">{src}</CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  )
}
