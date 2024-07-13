import type { Metadata } from 'next'
import { ChildrenProps } from '@/utils/types.util'
import { poppinsFont } from '@/configs/fonts.config'
import '@/styles/globals.css'
import Providers from '@/lib/providers/Providers'
import MainLayout from '@/layout/Layout'

// ** Meta
export const metadata: Metadata = {
  title: 'Reza Sabet',
  description: 'Reza Sabet Personal Website'
}

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={poppinsFont.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
