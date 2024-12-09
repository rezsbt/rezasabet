'use client'

import SectionTitle from '@/components/shared/SectionTitle'
import { Card, CardBody, CardHeader, Progress } from '@nextui-org/react'
import React from 'react'
import { uuid } from 'uuidv4'
import appData from 'Public/data/appData.json'
import { motion } from 'framer-motion'
import { inViewAnimation } from '@/utils/animation.util'

// ** Types
type SkillProps = {
  name: string
  skillLevel: number
}
type SkillGroupProps = {
  children: React.ReactNode
  title: string
}
type SkillType = {
  name: string
  skillLevel: number
}
type DataType = {
  title: string
  skills: SkillType[]
}

const SkillsSections = () => {
  return (
    <section className='bg-background-200 py-header'>
      <div className='container'>
        <SectionTitle>Skills</SectionTitle>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
          {appData.skillsSections.map((group: DataType) => (
            <SkillGroup title={group.title} key={uuid()}>
              {group.skills.map((item: SkillType) => (
                <Skill key={uuid()} name={item.name} skillLevel={item.skillLevel} />
              ))}
            </SkillGroup>
          ))}
        </div>
      </div>
    </section>
  )
}

const Skill = ({ name, skillLevel }: SkillProps) => (
  <div>
    <div className='mb-1 flex items-center justify-between text-medium'>
      <span>{name}</span>
      <span>{skillLevel}%</span>
    </div>
    <Progress value={skillLevel} size='sm' color='secondary' aria-label={name} />
  </div>
)

const SkillGroup = ({ children, title }: SkillGroupProps) => (
  <motion.div {...inViewAnimation} className='card py-10'>
    <h4 className='mb-4 text-large'>{title}</h4>
    <div className='space-y-4'>{children}</div>
  </motion.div>
)

export default SkillsSections
