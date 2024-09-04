import { Badge } from '@/components/ui/badge'

export function PetCardLabelsGroup({ labels }) {
  return (
    <section className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <Badge variant={'outlined'} key={label}>
          {label}
        </Badge>
      ))}
    </section>
  )
}
