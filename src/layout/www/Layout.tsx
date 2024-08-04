'use client'

import Footer from '@/layout/www/components/Footer'
import Intro from '@/layout/www/components/Intro'
import { ChildrenProps } from '@/utils/types.util'

const WwwLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
      <Intro />
    </div>
  )
}

export default WwwLayout
