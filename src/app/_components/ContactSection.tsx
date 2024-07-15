/* eslint-disable react/no-unescaped-entities */
import SectionTitle from '@/components/shared/SectionTitle'
import { ReactIconProps } from '@/utils/types.util'
import { Button, Link as NextUILink } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { FaPhone } from 'react-icons/fa'
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaMessage, FaTelegram } from 'react-icons/fa6'

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
const contactSubtitle: string =
  "Interested in working together or have a question? Feel free to reach out. I'm here to help you turn your ideas into amazing digital realities. Looking forward to hearing from you soon!"
const socialMedia: SocialMediaType[] = [
  {
    label: '@rezsbt',
    link: 'https://github.com/rezsbt',
    icon: FaGithub
  },
  {
    label: '@rsabet',
    link: 'https://www.linkedin.com/in/rsabet',
    icon: FaLinkedin
  },
  {
    label: '@callme01010010',
    link: 't.me/callme01010010',
    icon: FaTelegram
  }
]
const data: ContactCardType[] = [
  {
    title: 'Location',
    icon: FaLocationDot,

    content: <span className='text-small'>Tehran, Iran</span>
  },
  {
    title: 'Call',
    icon: FaPhone,
    content: (
      <NextUILink size='sm' underline='always' href='tel:+989909154032'>
        +98 990 915 4032
      </NextUILink>
    )
  },
  {
    title: 'Email',
    icon: FaEnvelope,

    content: (
      <NextUILink size='sm' underline='always' href='mailto:rezsabet24@gmail.com'>
        rezsabet24@gmail.com
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
      <p className='text-sm text-zinc-400'>{contactSubtitle}</p>
      <div className='mt-7 grid grid-cols-1 gap-5'>
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
