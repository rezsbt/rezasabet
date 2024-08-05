import { Link } from '@nextui-org/react'
import React from 'react'

// ** Variables
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const Footer = () => {
  return (
    <footer className='container'>
      <div className='h-footer flex items-center justify-center'>
        <p className='text-center text-tiny text-zinc-400'>
          Designed & Built by{' '}
          <Link href={baseUrl} className='text-tiny text-secondary'>
            Reza Sabet
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
