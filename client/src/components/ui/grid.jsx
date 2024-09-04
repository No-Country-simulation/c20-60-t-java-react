import { cn } from '@/lib/utils'

export function Grid({ className, ...args }) {
  return <section className={cn('grid grid-cols-responsive gap-y-8 gap-x-10 justify-center', className)} {...args} />
}
