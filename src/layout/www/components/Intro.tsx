'use client'

import classNames from 'classnames'
import { motion, Transition, Variants } from 'framer-motion'
import { useState } from 'react'

const containerTransition: Transition = {
  duration: 1,
  delay: 0.5,
  ease: 'easeOut'
}

const Intro = () => {
  // ** States
  const [isCompleted, setIsCompleted] = useState<boolean>(true)

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={containerTransition}
      onAnimationComplete={() => setIsCompleted(false)}
      className={classNames(
        'flex-center left-0 top-0 h-screen w-full bg-background-200',
        isCompleted ? 'fixed' : '!hidden'
      )}
    />
  )
}
export default Intro
