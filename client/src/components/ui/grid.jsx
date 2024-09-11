import { cn } from '@/lib/utils'

export function Grid({ className, ...args }) {
  return (
    <section
      className={cn('grid grid-cols-responsive grid-rows-[minmax(24em,auto)_minmax(24em,auto)] justify-center gap-x-10 gap-y-8', className)}
      {...args}
    />
  )
}
