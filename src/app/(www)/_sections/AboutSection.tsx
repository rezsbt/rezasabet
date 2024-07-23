'use client'

import SectionTitle from '@/components/shared/SectionTitle'
import { inViewAnimation } from '@/utils/animation.util'
import appData from 'Public/data/appData.json'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className='bg-background-100 py-header' id='about'>
      <div className='container'>
        <SectionTitle>About Me</SectionTitle>
        <motion.p {...inViewAnimation} className='text-medium'>
          {appData.aboutSection.mainContent}
        </motion.p>
      </div>
    </section>
  )
}

export default AboutSection
