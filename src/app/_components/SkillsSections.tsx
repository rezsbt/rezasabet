import SectionTitle from '@/components/shared/SectionTitle'
import { Card, CardBody, CardHeader, Divider, Progress } from '@nextui-org/react'
import React from 'react'

// ** Types
type SkillProps = {
  title: string
  percentage: number
}

const SkillsSections = () => {
  return (
    <section className='bg-background-200 py-header'>
      <div className='container'>
        <SectionTitle>Skills</SectionTitle>
        <div className='flex flex-col gap-6'>
          <Skill title='HTML/CSS' percentage={90} />
          <Skill title='JavaScript/TypeScript' percentage={90} />
          <Skill title='React.JS' percentage={90} />
          <Skill title='Next.JS' percentage={90} />
        </div>
      </div>
    </section>
  )
}

const Skill = ({ title, percentage }: SkillProps) => (
  <div>
    <div className='mb-1 flex items-center justify-between text-sm'>
      <span>{title}</span>
      <span>{percentage}%</span>
    </div>
    <Progress value={percentage} size='sm' color='secondary' />
  </div>
)

export default SkillsSections
