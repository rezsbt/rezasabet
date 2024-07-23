'use client'

import Logo from '@/components/shared/Logo'
import classNames from 'classnames'
import { motion, Transition, Variants } from 'framer-motion'

// ** Types
type Props = {
  setShowIntro: (prev: boolean) => void
  showIntro: boolean
}

// ** Animation
const logoTransition: Transition = {
  duration: 0.75,
  delay: 0.25,
  ease: 'easeOut'
}
const containerTransition: Transition = {
  duration: 0.5,
  delay: 1,
  ease: 'easeOut'
}

const Intro = ({ setShowIntro, showIntro }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={containerTransition}
      onAnimationComplete={() => setShowIntro(false)}
      className={classNames(
        'flex-center left-0 top-0 h-screen w-full bg-background-200',
        showIntro ? 'fixed' : 'hidden'
      )}
    >
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={logoTransition}>
        <Logo size='xl' />
      </motion.span>
    </motion.section>
  )
}
export default Intro
