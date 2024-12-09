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
          <p>
            Hey there! I{"'"}m Reza, a software engineer from Iran with over 5 years of experience in web development
            and web application development. While I{"'"}ve mostly been deep in the world of web, I{"'"}m also a bit
            familiar application development.
            <br />I{"'"}ve honed my skills in crafting innovative digital solutions and I{"'"}m truly passionate about
            understanding business needs. Translating those needs into functional, user-friendly websites and web
            applications is what I do best. The constant evolution of technology keeps me excited and always eager to
            learn and implement new tools and techniques to stay ahead of the curve and deliver cutting-edge solutions.
            <br />
            Ready to turn your ideas into reality? Let{"'"}s connect and make something amazing happen. Drop me a
            message – I{"'"}m just one click away from bringing your next big project to life! 🚀
          </p>
        </motion.p>
      </div>
    </section>
  )
}

export default AboutSection
