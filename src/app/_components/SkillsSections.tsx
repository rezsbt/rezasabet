import SectionTitle from '@/components/shared/SectionTitle'
import { Card, CardBody, CardHeader, Progress } from '@nextui-org/react'
import React from 'react'
import { uuid } from 'uuidv4'

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

// ** Data
const data: DataType[] = [
  {
    title: 'Foundamentals',
    skills: [
      {
        name: 'HTML/CSS/JS',
        skillLevel: 90
      },
      {
        name: 'TypeScript',
        skillLevel: 90
      },
      {
        name: 'NodeJS',
        skillLevel: 90
      },
      {
        name: 'SCSS/SASS',
        skillLevel: 90
      }
    ]
  },
  {
    title: 'Web Development',
    skills: [
      {
        name: 'ReactJS',
        skillLevel: 90
      },
      {
        name: 'NextJS',
        skillLevel: 90
      },
      {
        name: 'Redux/RTK',
        skillLevel: 70
      },
      {
        name: 'Zustand',
        skillLevel: 80
      }
    ]
  },
  {
    title: 'Ui Libraries',
    skills: [
      {
        name: 'TailWind',
        skillLevel: 90
      },
      {
        name: 'Ant Design',
        skillLevel: 70
      },
      {
        name: 'MUI',
        skillLevel: 70
      },
      {
        name: 'Bootstrap',
        skillLevel: 70
      },
      {
        name: 'NextUI',
        skillLevel: 90
      }
    ]
  },
  {
    title: 'Application Development',
    skills: [
      {
        name: 'ElectronJS',
        skillLevel: 50
      },
      {
        name: 'React Native',
        skillLevel: 50
      }
    ]
  },

  {
    title: 'Graphic Tools',
    skills: [
      {
        name: 'Adobe Photoshop',
        skillLevel: 40
      },
      {
        name: 'Adobe XD',
        skillLevel: 40
      },
      {
        name: 'Figma',
        skillLevel: 60
      }
    ]
  },
  {
    title: 'Other',
    skills: [
      {
        name: 'Python',
        skillLevel: 50
      },
      {
        name: 'Linux',
        skillLevel: 40
      },
      {
        name: 'Git/GitHub',
        skillLevel: 80
      },
      {
        name: 'WordPress',
        skillLevel: 50
      }
    ]
  }
]

const SkillsSections = () => {
  return (
    <section className='bg-background-200 py-header'>
      <div className='container'>
        <SectionTitle>Skills</SectionTitle>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
          {data.map((group: DataType) => (
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
    <div className='mb-1 flex items-center justify-between text-sm'>
      <span>{name}</span>
      <span>{skillLevel}%</span>
    </div>
    <Progress value={skillLevel} size='sm' color='secondary' />
  </div>
)

const SkillGroup = ({ children, title }: SkillGroupProps) => (
  <Card className='p-3'>
    <CardHeader>
      <h4>{title}</h4>
    </CardHeader>
    <CardBody className='space-y-4'>{children}</CardBody>
  </Card>
)

export default SkillsSections
