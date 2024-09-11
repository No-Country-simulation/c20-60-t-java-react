import { cn } from '@/lib/utils'

export function Grid({ className, ...args }) {
  return <section className={cn('grid auto-rows-[24em] grid-cols-responsive justify-center gap-x-10 gap-y-8', className)} {...args} />
}
