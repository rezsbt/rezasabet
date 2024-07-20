import { ChildrenProps } from '@/utils/types.util'
import '@/styles/globals.css'
import WwwLayout from '@/layout/www/Layout'

const Layout = ({ children }: ChildrenProps) => {
  return <WwwLayout>{children}</WwwLayout>
}

export default Layout
