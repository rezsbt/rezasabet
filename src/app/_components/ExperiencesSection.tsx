import SectionTitle from '@/components/shared/SectionTitle'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { uuid } from 'uuidv4'

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

// ** Data
const data: ExperienceType[] = [
  {
    companyName: 'Sarvban',
    jobPosition: 'Front-end Developer',
    date: 'Apr 2022 - Jun 2023',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere qui earum facilis magnam harum doloremque sunt eos? Cupiditate, fugit. Eius minus nobis officiis culpa unde labore omnis, ut excepturi amet voluptates! Nostrum sed illum consequuntur dolores, laboriosam, rem cupiditate earum blanditiis saepe dolores, qui excepturi? Assumenda cumque aliquam modi',
    image: '/images/companies/sarvban-logo.png',
    link: 'https://sarvban.com',
    linkLabel: 'Sarvban'
  },
  {
    companyName: 'Cafemive',
    jobPosition: 'Front-end Developer',
    date: 'Sep 2022 - Jul 2023',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere qui earum facilis magnam harum doloremque searum blanditiis saepe dolores, qui excepturi? Assumenda cumque aliquam modi',
    image: '/images/companies/cafemive-logo.png',
    link: 'https://cafemive.com',
    linkLabel: 'Cafemive'
  },
  {
    companyName: 'GIG - Wira System Pouya',
    jobPosition: 'Front-end Developer',
    date: 'Jun 2023 - Present',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere qui earum facilis magnam harum doloremque sunt eos? Cupiditate, fugit. Eius minus nobis officiis culpa unde labore omnis, ut excepturi amet voluptates! Nostrum sed illum consequuntur dolores, laboriosam, rem cupiditate deleniti nemo temporre libero, harum impedit, at ut expedita suscipit aut adipisci repellat minima tempora earum blanditiis saepe dolores, qui excepturi? Assumenda cumque aliquam modi',
    image: '/images/companies/wira-logo.png',
    link: 'https://wirapos.com/',
    linkLabel: 'Wira System Pouya'
  }
]

const ExperiencesSection = () => {
  return (
    <section className='bg-background-100 py-header'>
      <div className='container'>
        <SectionTitle>Experinces</SectionTitle>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {data.map((item: ExperienceType) => (
            <ExperienceCard key={uuid()} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ companyName, date, description, link, image }: ExperienceType) => (
  <Card className='p-3'>
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
      <p className='text-small text-zinc-200'>{description}</p>
    </CardBody>
    <CardFooter className='w-full'>
      <Link href={link} className='w-full' target='_blank'>
        <Button variant='flat' color='secondary' fullWidth>
          Visit {companyName}
        </Button>
      </Link>
    </CardFooter>
  </Card>
)

export default ExperiencesSection
