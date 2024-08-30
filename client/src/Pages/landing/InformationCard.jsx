import { Text } from '@/components/ui/text'

export function InformationCard({ title, description, src, alt }) {
  return (
    <article
      className="relative lg:flex lg:last:flex-row-reverse py-5 lg:py-0  
      // 
      [&>section]:last:items-end [&>div]:last:translate-x-full"
    >
      <div className="absolute inset-0 bg-secondary top-0 -translate-x-full" />
      <section className="flex flex-1 flex-col justify-center bg-secondary p-4">
        <div className="flex flex-col gap-4 ">
          <Text variant="title">{title}</Text>
          <Text variant="landingCard" className="max-w-[420px]">
            {description}
          </Text>
        </div>
      </section>
      <figure className="lg:first:mr-6 flex-1 border-0 h-72">
        <img src={src} alt={alt} className="w-full h-full object-cover mx-auto border-0" />
      </figure>
    </article>
  )
}
