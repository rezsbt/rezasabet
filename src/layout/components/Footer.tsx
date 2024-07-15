import { Link } from '@nextui-org/react'
import React from 'react'

// ** Variables
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const Footer = () => {
  return (
    <footer className='container'>
      <div className='mx-auto h-px w-3/4 bg-zinc-800'></div>
      <p className='my-5 text-center text-tiny text-zinc-400'>
        Designer & Built by{' '}
        <Link href={baseUrl} className='text-tiny text-secondary'>
          Reza Sabet
        </Link>
      </p>
    </footer>
  )
}

export default Footer
