'use client'

import { ChildrenProps } from '@/utils/types.util'
import { NextUIProvider } from '@nextui-org/react'

const Providers = ({ children }: ChildrenProps) => {
  return <NextUIProvider>{children}</NextUIProvider>
}
export default Providers
