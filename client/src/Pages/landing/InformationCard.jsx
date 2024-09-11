import { Text } from '@/components/ui/text'
import PropTypes from 'prop-types'

export function InformationCard({ title, description, src, alt }) {
  return (
    <article className="relative flex flex-col py-5 shadow-2xl lg:flex-row lg:py-0 lg:last:flex-row-reverse [&>div]:last:translate-x-full [&>section]:last:items-end">
      <div className="absolute inset-0 top-0 hidden -translate-x-full bg-secondary lg:block" />
      <section className="flex flex-1 flex-col justify-center bg-secondary p-4">
        <div className="flex flex-col gap-4">
          <Text variant="title">{title}</Text>
          <Text variant="landingCard" className="max-w-[420px]">
            {description}
          </Text>
        </div>
      </section>
      <figure className="h-72 flex-1">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </figure>
    </article>
  )
}

InformationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
