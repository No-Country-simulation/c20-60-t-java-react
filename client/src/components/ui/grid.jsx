import { cn } from '@/lib/utils'

export function Grid({ className, ...args }) {
  return <section className={cn('grid grid-cols-responsive grid-rows-2 justify-center gap-x-10 gap-y-8', className)} {...args} />
}
