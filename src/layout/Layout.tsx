import Header from '@/layout/components/Header'
import { ChildrenProps } from '@/utils/types.util'

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <div className='full-screen flex flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
    </div>
  )
}

export default MainLayout
