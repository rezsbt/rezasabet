import { ReactIconProps } from '@/utils/types.util'
import { IconType } from 'react-icons'

export type ServiceType = {
  title: string
  description: string
  icon: string
}

export type ExperienceType = {
  companyName: string
  jobPosition: string
  date: string
  image?: string
  description: string
  link: string
  linkLabel: string
}

export type SkillType = {
  name: string
  skillLevel: number
}
export type SkillGroupType = {
  title: string
  skills: SkillType[]
}

export type ContactType = {
  title: string
  icon: IconType
  iconProps?: ReactIconProps
  content: React.ReactNode
}
export type SocialMediaType = {
  label: string
  link: string
  icon: IconType
  iconProps?: ReactIconProps
}
