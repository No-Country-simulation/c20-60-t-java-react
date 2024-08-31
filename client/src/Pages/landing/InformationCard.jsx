import { Text } from '@/components/ui/text'
import PropTypes from 'prop-types';

export function InformationCard({ title, description, src, alt }) {
  return (
    <article className="relative flex flex-col lg:flex-row lg:last:flex-row-reverse py-5 lg:py-0">
      <div className="absolute inset-0 bg-secondary top-0 -translate-x-full" />
      <section className="flex flex-1 flex-col justify-center bg-secondary p-4">
        <div className="flex flex-col gap-4">
          <Text variant="title">{title}</Text>
          <Text variant="landingCard" className="max-w-[420px]">
            {description}
          </Text>
        </div>
      </section>
      <figure className="flex-1 h-72">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </figure>
    </article>
  )
}

InformationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
