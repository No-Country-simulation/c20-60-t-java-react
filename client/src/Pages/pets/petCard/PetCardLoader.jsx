import { Card } from '@/components/ui/card'
import { Grid } from '@/components/ui/grid'

export function PetCardLoader() {
  return (
    <Card className="flex flex-col gap-3 p-3 animate-pulse">
      <div className="h-[167px] bg-neutral-300 rounded-2xl" />
      <div className="flex gap-2 flex-wrap">
        <div className="w-12 h-4 rounded-full bg-neutral-300" />
        <div className="w-12 h-4 rounded-full bg-neutral-300" />
        <div className="w-12 h-4 rounded-full bg-neutral-300" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full h-3 rounded-full bg-neutral-300" />
        <div className="flex flex-col gap-1">
          <div className="w-full h-2 rounded-full bg-neutral-300" />
          <div className="w-1/2 h-2 rounded-full bg-neutral-300" />
        </div>
      </div>
      <div className="w-1/3 mt-4 h-2 rounded-full bg-neutral-300" />
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
