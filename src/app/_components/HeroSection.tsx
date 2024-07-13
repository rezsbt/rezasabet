/* eslint-disable react/no-unescaped-entities */
import HeroBackground from '@/app/_components/HeroBackground'
import Logo from '@/components/shared/Logo'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-background-200 relative min-h-screen'>
      <HeroBackground />
      <section className='container relative flex min-h-screen flex-col items-center justify-center'>
        <Logo size='xl' color='primary' />
        <div className='mt-14 text-center'>
          <h1 className='text-5xl font-bold'>
            Hi, I'm <span className='upper text-nowrap text-secondary'>Reza Sabet</span>
          </h1>
          <p className='mt-5 text-medium text-neutral-400'>
            I'm front-end web developer, application developer and Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ratione, optio.
          </p>
          <Link href='/contact'>
            <Button variant='flat' color='secondary' className='mt-5' fullWidth>
              Contact
            </Button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default HeroSection
