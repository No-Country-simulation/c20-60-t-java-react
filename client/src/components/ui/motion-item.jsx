import { motion } from 'framer-motion'
import React from 'react'

const animation = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring'
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9
  }
}

export const MotionItem = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <motion.div ref={ref} {...animation} layout {...props}>
      {children}
    </motion.div>
  )
})

MotionItem.displayName = 'MotionItem'
