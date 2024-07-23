'use client'

import SectionTitle from '@/components/shared/SectionTitle'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { uuid } from 'uuidv4'
import appData from 'Public/data/appData.json'
import { motion } from 'framer-motion'
import { inViewAnimation } from '@/utils/animation.util'

// ** Types
type ExperienceType = {
  companyName: string
  jobPosition: string
  date: string
  image?: string
  description: string
  link: string
  linkLabel: string
}

// ** Components
const CardMotion = motion(Card)

const ExperiencesSection = () => {
  return (
    <section className='bg-background-100 py-header'>
      <div className='container'>
        <SectionTitle>Experiences</SectionTitle>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {appData.experiencesSection.map((item: ExperienceType) => (
            <ExperienceCard key={uuid()} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ companyName, date, description, link, image }: ExperienceType) => (
  <CardMotion {...inViewAnimation} className='p-3'>
    <CardHeader className='gap-3'>
      <div className='flex-center aspect-square h-full rounded-medium bg-zinc-800'>
        {!!image && (
          <div className='relative h-2/3 w-2/3'>
            <Image src={image} alt='companyName' fill className='object-contain grayscale' />
          </div>
        )}
      </div>
      <div className='flex w-full flex-col'>
        <h4 className='text-large font-semibold'>{companyName}</h4>
        <p className='text-small text-secondary'>{date}</p>
      </div>
    </CardHeader>
    <CardBody>
      <p className='text-medium text-zinc-400'>{description}</p>
    </CardBody>
    <CardFooter className='w-full'>
      <Link href={link} className='w-full' target='_blank'>
        <Button variant='light' color='secondary' fullWidth>
          Visit {companyName}
        </Button>
      </Link>
    </CardFooter>
  </CardMotion>
)

export default ExperiencesSection
