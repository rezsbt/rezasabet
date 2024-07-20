import React from 'react'

const HeroBackground = () => {
  return (
    <div className='absolute min-h-screen w-full overflow-hidden blur-3xl'>
      <div className='absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/15'></div>
    </div>
  )
}

export default HeroBackground
