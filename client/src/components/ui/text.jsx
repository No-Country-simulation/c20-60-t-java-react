import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

const textStyles = cva('first-letter:capitalize transition-colors', {
  variants: {
    variant: {
      // size 13px | height 20px
      default: '[font-size:0.8125rem] [line-height:1.25rem]',
      // size 14px | height 20px
      details: 'text-sm font-semibold font-quicksand',
      // size 15px | height 17px
      medium: '[font-size:0.9375rem] [line-height:1.5rem]',
      // size 18px | height 24px
      subtitle: '[font-size:1.125rem] [line-height:1.5rem] font-bold font-quicksand',
      // size 20px | height 28px
      title: 'text-2xl font-bold font-quicksand',
      display: 'text-4xl font-bold font-quicksand',
      landingCard: '[font-size:1rem] [line-height:1.5625rem]'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export const Text = React.forwardRef(({ variant, className, asChild = false, ...args }, ref) => {
  const Comp = asChild ? Slot : 'p'
  return <Comp ref={ref} className={cn(textStyles({ variant, className }))} {...args} />
})

Text.displayName = 'Text'
