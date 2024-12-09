import { Button, Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export function generateStaticParams() {
  return [{ id: 'test' }]
}

const NotFoundPage = () => {
  return (
    <main className='h-not-found flex-center container'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <p className='text-zinc-400'>Page Not Found!</p>
        <Button as={Link} href='/' variant='light' color='secondary'>
          Back to Home
        </Button>
      </div>
    </main>
  )
}

export default NotFoundPage
