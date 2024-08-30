import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function InformationCard({ title, description, src, alt }) {
  return (
    <article className={` lg:flex  lg:last:flex-row-reverse lg:first:mb-[7.5rem] first:mb-10 py-5 lg:py-0 overflow-hidden rounded-[.5rem] shadow-xl`}>
      <Card className="w-full mb-5 lg:mb-0  lg:basis-2/4 shadow-none border-none rounded-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-quicksand">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground font-roboto">{description}</p>
        </CardContent>
      </Card>
      <div className=" lg:first:mr-6 ">
        <figure className="border-0">
          <img src={src} alt={alt} className="object-cover w-[36.875rem] h-[18.125rem] mx-auto border-0" />
        </figure>
      </div>
    </article>
  )
}

export { InformationCard }
