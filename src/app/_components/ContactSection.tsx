/* eslint-disable react/no-unescaped-entities */
import SectionTitle from '@/components/shared/SectionTitle'
import { ReactIconProps } from '@/utils/types.util'
import { Button, Link as NextUILink } from '@nextui-org/react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { FaPhone } from 'react-icons/fa'
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaMessage, FaTelegram } from 'react-icons/fa6'
import appData from 'Public/data/appData.json'

// ** Type
type ContactCardType = {
  title: string
  icon: IconType
  iconProps?: ReactIconProps
  content: React.ReactNode
}
type SocialMediaType = {
  label: string
  link: string
  icon: IconType
  iconProps?: ReactIconProps
}

// ** Data
const socialMedia: SocialMediaType[] = [
  {
    label: appData.ContactInfo.github.text,
    link: appData.ContactInfo.github.link,
    icon: FaGithub
  },
  {
    label: appData.ContactInfo.linkedin.text,
    link: appData.ContactInfo.linkedin.link,
    icon: FaLinkedin
  },
  {
    label: appData.ContactInfo.telegram.text,
    link: appData.ContactInfo.telegram.link,
    icon: FaTelegram
  },
  {
    label: appData.ContactInfo.discord.text,
    link: appData.ContactInfo.discord.link,
    icon: FaDiscord
  }
]
const data: ContactCardType[] = [
  {
    title: 'Location',
    icon: FaLocationDot,
    content: <span className='text-small'>{appData.ContactInfo.location.text}</span>
  },
  {
    title: 'Call',
    icon: FaPhone,
    content: (
      <NextUILink size='sm' underline='always' href={appData.ContactInfo.call.link}>
        {appData.ContactInfo.call.text}
      </NextUILink>
    )
  },
  {
    title: 'Email',
    icon: FaEnvelope,
    content: (
      <NextUILink size='sm' underline='always' href={appData.ContactInfo.email.link}>
        {appData.ContactInfo.email.text}
      </NextUILink>
    )
  },
  {
    title: 'Social Media',
    icon: FaMessage,

    content: (
      <div className='flex gap-3'>
        {socialMedia.map((item: SocialMediaType) => (
          <Link href={item.link} key={item.link}>
            <Button variant='flat' startContent={<item.icon />} isIconOnly />
          </Link>
        ))}
      </div>
    )
  }
]

const ContactSection = () => (
  <section className='bg-background-200 py-header'>
    <div className='container'>
      <SectionTitle>Let's Talk!</SectionTitle>
      {/* <p className='text-sm text-zinc-400'>{appData.contactSection.subtitle}</p> */}
      <div className='mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2'>
        {data.map((item: ContactCardType) => (
          <ContactCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
)

const ContactCard = ({ iconProps, content, ...props }: ContactCardType) => (
  <article className='flex h-36 flex-col items-center justify-center gap-7 rounded-small border border-zinc-700 p-7 text-sm font-light'>
    <props.icon {...iconProps} className='text-[20px] text-zinc-400' />
    {content}
  </article>
)

export default ContactSection
