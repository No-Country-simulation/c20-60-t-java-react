import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Lista de imágenes
const images = [
  "/images/stories/Charly-1.jpg",
  "/images/stories/Charly-2.jpg",
  "/images/stories/Mora-2.jpg",
  
]

export const CarouselPets = () => {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={src} alt={`Imagen ${index + 1}`} className="object-cover w-full h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
