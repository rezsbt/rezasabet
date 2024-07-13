'use client'

import { CustomButton } from '@/components/custom/CustomButton'
import { Button } from '@nextui-org/react'
// import ButtonLink from '@/components/shared/ButtonLink'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// ** Typs
type NavbarItem = {
  label: string
  link: string
  highlight?: boolean
}

const navbarItems: NavbarItem[] = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Blog',
    link: '/blog'
  },
  {
    label: 'Contact',
    link: '/contact',
    highlight: true
  }
]

const Header = () => {
  // ** Hooks
  const pathname = usePathname()

  // ** Functions
  const isLinkActive = (link: string) => {
    if (link === '/') return link === pathname
    else return pathname.includes(link)
  }
  return (
    <header>
      <div className='container'>
        <ul className='flex w-full items-center justify-center gap-6 py-6'>
          {navbarItems.map((item: NavbarItem) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={classNames('inline-block min-w-16 text-center text-small', {
                  'font-bold': isLinkActive(item.link),
                  'font-semibold text-secondary': item.highlight && !isLinkActive(item.link),
                  'rounded-sm bg-primary px-1 py-0.5 text-background': isLinkActive(item.link) && !item.highlight,
                  'rounded-sm bg-secondary px-1 py-0.5 text-background': isLinkActive(item.link) && item.highlight
                })}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
