import { Card } from '@/components/ui/card'
import { Grid } from '@/components/ui/grid'

export function PetCardLoader() {
  return (
    <Card className="flex animate-pulse flex-col gap-3 p-3">
      <div className="h-[167px] rounded-2xl bg-neutral-300" />
      <div className="flex flex-wrap gap-2">
        <div className="h-4 w-12 rounded-full bg-neutral-300" />
        <div className="h-4 w-12 rounded-full bg-neutral-300" />
        <div className="h-4 w-12 rounded-full bg-neutral-300" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-3 w-full rounded-full bg-neutral-300" />
        <div className="flex flex-col gap-1">
          <div className="h-2 w-full rounded-full bg-neutral-300" />
          <div className="h-2 w-1/2 rounded-full bg-neutral-300" />
        </div>
      </div>
      <div className="mt-4 h-2 w-1/3 rounded-full bg-neutral-300" />
      <div />
    </Card>
  )
}

export function PetsLoader() {
  return (
    <Grid>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <PetCardLoader key={n} />
      ))}
    </Grid>
  )
}
