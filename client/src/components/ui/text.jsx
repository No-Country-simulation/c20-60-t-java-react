import { cva } from 'class-variance-authority'

const textStyles = cva('first-letter:capitalize', {
  variants: {
    variant: {
      // 13px
      default: '[font-size:0.8125rem] [line-height:1.25rem]',
      // 18px
      subtitle: '[font-size:1.125rem] [line-height:1.5rem] font-semibold',
      // 20px
      title: 'text-xl font-bold',
      details: ''
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export function Text({ variant, className, ...args }) {
  return <p className={textStyles({ variant, className })} {...args} />
}
