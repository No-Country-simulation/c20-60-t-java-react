import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import * as React from 'react'
import { Text } from './text'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#E3C8D0] text-primary shadow-md hover:bg-button',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border-[#E3C8D0] border-4 bg-inherit hover:bg-button hover:text-accent-foreground',
        secondary: 'bg-[#DA9FB050] text-secondary-foreground hover:bg-secondary/80',
        disabled: 'text-[#20202180] bg-[#E3C8D0]',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        navigation: 'rounded-none border border-black hover:bg-secondary',
        navigationActive: 'border border-black bg-black/20 rounded-none',
        navBar: 'bg-[#E3C8D080] text-gray-600 shadow-[0_4px_6px_rgba(0,0,0,0.2)] rounded-[15px] py-32 w-full',
        navBarInactive: 'bg-[#fff] text-gray-600 shadow-[0_4px_6px_rgba(0,0,0,0.2)] rounded-[15px] py-32 w-full'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 px-8 w-[380px]',
        icon: 'h-6 w-6'
      },
      hoverable: {
        true: 'hover:-translate-y-1 transition'
      },
      fullWidth: {
        true: 'w-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      hoverable: false,
      fullWidth: false
    }
  }
)

const Button = React.forwardRef(({ className, variant, size, hoverable, fullWidth, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={cn(buttonVariants({ variant, size, hoverable, fullWidth, className }))} ref={ref} {...props}>
      <Text variant="medium" className="font-quicksand font-bold">
        {props.children}
      </Text>
    </Comp>
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
