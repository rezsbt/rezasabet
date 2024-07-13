'use client'

import { ChildrenProps } from '@/utils/types.util'
import { NextUIProvider } from '@nextui-org/react'

import dynamic from 'next/dynamic'
const NextThemesProvider = dynamic(() => import('@/lib/providers/NextThemesProvider'), { ssr: false })

const Providers = ({ children }: ChildrenProps) => {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme='dark' attribute='class'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
export default Providers
