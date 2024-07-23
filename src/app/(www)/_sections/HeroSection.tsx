'use client'

import HeroBackground from '@/app/(www)/_components/HeroBackground'
import Logo from '@/components/shared/Logo'
import { Button, Link as NextUILink } from '@nextui-org/react'
import Link from 'next/link'
import { FaArrowDown } from 'react-icons/fa6'
import appData from 'Public/data/appData.json'
import GoToAbout from '@/app/(www)/_components/GoToAbout'

const HeroSection = () => {
  // ** Effects

  return (
    <div className='relative bg-background-200'>
      <HeroBackground />
      <section className='container relative flex h-[100svh] flex-col items-center justify-center'>
        <Logo size='xl' color='primary' />
        <div className='mt-14 text-center'>
          <h1 className='text-5xl font-bold'>
            Hi, I&apos;m <span className='upper text-nowrap text-secondary'>Reza Sabet</span>
          </h1>
          <p className='mx-auto mt-3 max-w-[550px] text-medium text-zinc-400'>{appData.heroSection.subtitle}</p>
          <Link href='/contact'>
            <Button variant='flat' color='secondary' className='mt-5' fullWidth>
              Contact
            </Button>
          </Link>
        </div>
      </section>
      <GoToAbout />
    </div>
  )
}

export default HeroSection
