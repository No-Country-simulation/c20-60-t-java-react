import { cn } from '@/lib/utils'

export function Grid({ className, ...args }) {
  return <section className={cn('grid grid-cols-responsive justify-center gap-x-10 gap-y-8', className)} {...args} />
}
