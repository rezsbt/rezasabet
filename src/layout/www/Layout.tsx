import Footer from '@/layout/www/components/Footer'
import { ChildrenProps } from '@/utils/types.util'

const WwwLayout = ({ children }: ChildrenProps) => {
  return (
    <div className='w-full'>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default WwwLayout
