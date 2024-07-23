'use client'

import Footer from '@/layout/www/components/Footer'
import Intro from '@/layout/www/components/Intro'
import { ChildrenProps } from '@/utils/types.util'
import classNames from 'classnames'
import { useState } from 'react'

const WwwLayout = ({ children }: ChildrenProps) => {
  // ** States
  const [showIntro, setShowIntro] = useState<boolean>(true)

  return (
    <div className={classNames({ 'overflow-hidden': showIntro })}>
      <main>{children}</main>
      <Footer />
      <Intro setShowIntro={setShowIntro} showIntro={showIntro} />
    </div>
  )
}

export default WwwLayout
