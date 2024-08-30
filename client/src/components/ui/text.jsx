import { cva } from 'class-variance-authority'

const textStyles = cva('first-letter:capitalize', {
  variants: {
    variant: {
      // 13px
      default: '[font-size:0.8125rem] [line-height:1.25rem]',
      // 14px
      details: 'text-sm font-semibold',
      // 18px
      subtitle: '[font-size:1.125rem] [line-height:1.5rem] font-bold',
      // 20px
      title: 'text-xl font-black'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export function Text({ variant, className, ...args }) {
  return <p className={textStyles({ variant, className })} {...args} />
}
