import { CatIcon } from '@/components/icons/CatIcon'
import { DogIcon } from '@/components/icons/DogIcon'

export function getPlaceholderImage(species) {
  return <figure className="flex h-full w-full items-center justify-center bg-accent">{species === 'dog' ? <DogIcon /> : <CatIcon />}</figure>
}
