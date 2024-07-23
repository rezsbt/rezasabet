import { CustomValueType, TargetAndTransition, Transition, Variant } from 'framer-motion'

// ** Types
type InViewAnimation = {
  initial: any
  whileInView: any
  transition: Transition
  viewport: any
}

export const inViewAnimation: InViewAnimation = {
  initial: {
    opacity: 0,
    y: 50
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.25,
    delay: 0.1
  },
  viewport: { once: true }
}
