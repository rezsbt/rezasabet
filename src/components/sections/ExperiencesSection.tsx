import SectionTitle from '@/components/shared/SectionTitle'
import { Button, CardBody, Card as NextUICard, CardFooter, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { uuid } from 'uuidv4'
import appData from 'Public/data/appData.json'
import { ExperienceType } from '@/types'

const ExperiencesSection = () => {
  return (
    <section className='bg-background-100 py-header'>
      <div className='container'>
        <SectionTitle>Experiences</SectionTitle>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {appData.experiencesSection.map((item: ExperienceType) => (
            <Card key={uuid()} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Card = ({ companyName, date, description, link, image }: ExperienceType) => (
  <NextUICard className='card p-3'>
    <CardHeader className='gap-3'>
      <div className='flex-center aspect-square h-full rounded-medium bg-zinc-800'>
        {!!image && (
          <div className='relative h-14 w-14'>
            <Image src={image} alt='companyName' fill className='object-contain p-3 grayscale' />
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
  </NextUICard>
)

export default ExperiencesSection
