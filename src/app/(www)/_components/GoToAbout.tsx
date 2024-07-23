import { Button } from '@nextui-org/react'
import classNames from 'classnames'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa6'

// ** Components
const ButtonMotion = motion(Button)

const GoToAbout = () => {
  // ** Hooks
  const { scrollY } = useScroll()
  const [opacity, setOpacity] = useState<number>(1)

  // ** Effects
  useMotionValueEvent(scrollY, 'change', latest => {
    const opacityValue = (100 - latest) / 100
    if (latest < 100) setOpacity(opacityValue)
    else setOpacity(0)
  })

  return (
    <ButtonMotion
      className={classNames('absolute bottom-3 right-3', { hidden: opacity === 0 })}
      color='secondary'
      variant='light'
      startContent={<FaArrowDown className='animate-bounce' />}
      as={Link}
      href='#about'
      style={{ opacity }}
    >
      Learn More About Me
    </ButtonMotion>
  )
}
export default GoToAbout
