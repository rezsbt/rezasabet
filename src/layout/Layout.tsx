import Header from '@/layout/components/Header'
import { ChildrenProps } from '@/utils/types.util'

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <div className='w-full'>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
