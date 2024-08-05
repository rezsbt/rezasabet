import { Button, Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const NotFoundPage = () => {
  return (
    <main className='h-not-found flex-center container'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <Image src='/images/404-error.png' width={600} height={600} alt='Page not found error' />
        <Button as={Link} href='/' variant='light' color='secondary'>
          Back to Home
        </Button>
      </div>
    </main>
  )
}

export default NotFoundPage
